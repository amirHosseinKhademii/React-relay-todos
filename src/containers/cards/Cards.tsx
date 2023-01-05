import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";
import { TodoQuery$data } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { useTransition } from "react";
import { useFragment, usePaginationFragment } from "react-relay";

export const Cards = ({ todo }: { todo: TodoCardsFragment$key }) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(TodoCardsFragment, todo);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });
  return (
    <ul className=" border border-cyan-500 bg-cyan-200 rounded p-4 shadow-md flex flex-col space-y-2 ">
      {data.cards.edges?.map((card) => (
        <li
          className="bg-amber-200 border border-amber-300 rounded p-2"
          key={card.node?.id}
        >
          {card.node?.title}
        </li>
      ))}
      {data.cards.pageInfo?.hasNextPage && (
        <button
          className="bg-green-200 border border-green-300 rounded p-2"
          onClick={onLoadMore}
          disabled={isPending}
        >
          Load Next
        </button>
      )}
      {isPending && "Loading more ..."}
    </ul>
  );
};
