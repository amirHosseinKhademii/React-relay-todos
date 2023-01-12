import { MouseEventHandler, useId, useState, useTransition } from "react";
import {
  useMutation,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { CardsUpdatedSubscription } from "containers/cards/graphql/Cards.subscriptions";
import type { CardsUpdatedSubscription as TCardsUpdatedSubscription } from "containers/cards/graphql/__generated__/CardsUpdatedSubscription.graphql";
import type { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";
import { CardsMutation } from "../graphql/Cards.Mutation";
import { CardsMutation as TCardsMutation } from "../graphql/__generated__/CardsMutation.graphql";

export type TCards = { todo: TodoCardsFragment$key; todoId: string };

const subscriptionConfig: GraphQLSubscriptionConfig<TCardsUpdatedSubscription> =
  {
    subscription: CardsUpdatedSubscription,
    variables: {},
  };

export const useCards = ({ todo, todoId }: TCards) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(TodoCardsFragment, todo);

  //useSubscription(subscriptionConfig);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (e: any) => {
    e.stopPropagation();
    setIsOpen(true);
  };
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TCardsMutation>(CardsMutation);
  const clientMutationId = useId();

  return {
    data,
    isPending,
    onLoadMore,
    isOpen,
    onOpen,
    onClose,
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: [data.cards.__id],
          input: {
            todoId,
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addCard: {
            addCardEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
  };
};
