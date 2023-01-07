import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { useTransition } from "react";
import {
  TodosFragment,
  TodosQuery,
} from "containers/todo/graphql/Todos.queries";
import type { TodosQuery as TTodosQuery } from "containers/todo/graphql/__generated__/TodosQuery.graphql";
import type { TodosPaginationFrgament } from "containers/todo/graphql/__generated__/TodosPaginationFrgament.graphql";
import type { TodosFragment$key } from "containers/todo/graphql/__generated__/TodosFragment.graphql";

export const useTodos = () => {
  const [isPending, startTransition] = useTransition();
  const todos = useLazyLoadQuery<TTodosQuery>(TodosQuery, { first: 2 });
  const { data, loadNext } = usePaginationFragment<
    TodosPaginationFrgament,
    TodosFragment$key
  >(TodosFragment, todos);

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
