import { TodoMutation } from "containers/todo/graphql/Todo.mutations";
import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";
import { useTransition } from "react";
import { useMutation, usePaginationFragment } from "react-relay";
export type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;

export const Cards = ({ todo }: { todo: TodoCardsFragment$key }) => {
  const [isPending, startTransition] = useTransition();
  const { data, loadNext } = usePaginationFragment(TodoCardsFragment, todo);

  const onLoadMore = () =>
    startTransition(() => {
      loadNext(2);
    });
  return (
    <ul
      className=" border border-cyan-500 bg-cyan-200 rounded p-4 shadow-md flex flex-col space-y-2 "
      onClick={(e) => e.stopPropagation()}
    >
      {data.cards.edges?.map((card) => (
        <Card key={card.node?.id} {...{ card }} />
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

const Card = ({
  card,
}: {
  card: {
    readonly node: { readonly id: string; readonly title: string } | null;
  };
}) => {
  return (
    <li
      className="bg-amber-200 border border-amber-300 rounded p-2 cursor-pointer"
      key={card.node?.id}
    >
      {card.node?.title}
    </li>
  );
};
