import { TodoCardsFragment } from "containers/todo/graphql/Todo.queries";
import { TodoCardsFragment$key } from "containers/todo/graphql/__generated__/TodoCardsFragment.graphql";
import { TodoQuery$data } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { useFragment, usePaginationFragment } from "react-relay";

export const Cards = ({ todo }: { todo: TodoCardsFragment$key }) => {
  const { data, loadNext, loadPrevious } = usePaginationFragment(
    TodoCardsFragment,
    todo
  );

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
      <button
        className="bg-green-200 border border-green-300 rounded p-2"
        onClick={() => loadNext(2)}
      >
        Load Next
      </button>
    </ul>
  );
};
