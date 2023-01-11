import {
  useLazyLoadQuery,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { useTransition } from "react";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import {
  TodosFragment,
  TodosQuery,
} from "containers/todo/graphql/Todos.queries";
import { TodosSubscription } from "containers/todo/graphql/Todos.subscriptions";
import type { TodosQuery as TTodosQuery } from "containers/todo/graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "containers/todo/graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "containers/todo/graphql/__generated__/TodosFragment.graphql";
import type { TodosSubscription as TTodosSubscription } from "containers/todo/graphql/__generated__/TodosSubscription.graphql";

const subscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> = {
  subscription: TodosSubscription,
  variables: {},
};

export const useTodos = () => {
  const [isPending, startTransition] = useTransition();
  const todos = useLazyLoadQuery<TTodosQuery>(TodosQuery, { first: 100 });
  const { data, loadNext } = usePaginationFragment<
    TodosPaginationFrgament,
    TodosFragment$key
  >(TodosFragment, todos);

  useSubscription(subscriptionConfig);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });

  return {
    data,
    isPending,
    onLoadMore,
  };
};
