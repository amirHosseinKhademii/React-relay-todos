import {
  useLazyLoadQuery,
  useMutation,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { useId, useState, useTransition } from "react";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodosQuery } from "containers/todos/graphql/Todos.queries";
import { TodosSubscription } from "containers/todos/graphql/Todos.subscriptions";
import type { TodosQuery as TTodosQuery } from "containers/todos/graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "containers/todos/graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "containers/todos/graphql/__generated__/TodosFragment.graphql";
import type { TodosSubscription as TTodosSubscription } from "containers/todos/graphql/__generated__/TodosSubscription.graphql";
import { TodosFragment } from "containers/todos/graphql/Todos.fragment";
import { CardsUpdatedSubscription } from "containers/cards/graphql/Cards.subscriptions";
import type { CardsUpdatedSubscription as TCardsUpdatedSubscription } from "containers/cards/graphql/__generated__/CardsUpdatedSubscription.graphql";
import { TodoAddMutation } from "containers/todos/graphql/Todo.mutations";
import { TodoAddMutation as TTodoAddMutation } from "containers/todos/graphql/__generated__/TodoAddMutation.graphql";

const todosSubscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> = {
  subscription: TodosSubscription,
  variables: {},
};

const cardsSubscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
  {
    subscription: CardsUpdatedSubscription,
    variables: {},
  };

export const useTodos = () => {
  const [isPending, startTransition] = useTransition();

  const todos = useLazyLoadQuery<TTodosQuery>(TodosQuery, { first: 3 });

  const { data, loadNext } = usePaginationFragment<
    TodosPaginationFrgament,
    TodosFragment$key
  >(TodosFragment, todos);

  useSubscription(todosSubscriptionConfig);

  useSubscription(cardsSubscriptionConfig);

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TTodoAddMutation>(TodoAddMutation);

  const clientMutationId = useId();

  return {
    data,
    isPending,
    isOpen,
    onOpen,
    onClose,
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: ["client:root:__List__todos_connection"],
          input: {
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addTodo: {
            addTodoEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
                isCompleted: false,
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
    onLoadMore: () =>
      startTransition(() => {
        loadNext(2);
      }),
  };
};
