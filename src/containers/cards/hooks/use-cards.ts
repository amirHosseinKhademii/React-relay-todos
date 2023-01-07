import { useTransition } from "react";
import { usePaginationFragment } from "react-relay";
import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";

export type TCards = { todo: TodoCardsFragment$key };

export const useCards = ({ todo }: TCards) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(TodoCardsFragment, todo);

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
