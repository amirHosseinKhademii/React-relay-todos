import {
  useLazyLoadQuery,
  usePaginationFragment,
  useSubscription,
} from "react-relay";
import { useTransition } from "react";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodosQuery } from "containers/todos/graphql/Todos.queries";
import { TodosSubscription } from "containers/todos/graphql/Todos.subscriptions";
import type { TodosQuery as TTodosQuery } from "containers/todos/graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "containers/todos/graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "containers/todos/graphql/__generated__/TodosFragment.graphql";
import type { TodosSubscription as TTodosSubscription } from "containers/todos/graphql/__generated__/TodosSubscription.graphql";
import { TodosFragment } from "../graphql/Todos.fragment";

const subscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> = {
  subscription: TodosSubscription,
  variables: {},
};

export const useTodos = () => {
  const [isPending, startTransition] = useTransition();
  const todos = useLazyLoadQuery<TTodosQuery>(TodosQuery, { first: 3 });
  const { data, loadNext } = usePaginationFragment<
    TodosPaginationFrgament,
    TodosFragment$key
  >(TodosFragment, todos);

  //useSubscription(subscriptionConfig);

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
