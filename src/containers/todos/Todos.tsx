import { Modal } from "components";
import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlusTodo } from "icons/ICPlusTodo";
import { Suspense } from "react";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
// import { Todo } from "./Todo";
export const Todos = () => {
  const { data, onLoadMore, isPending } = useTodos();

  return (
    <>
      <div
        className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-600 antialiased  max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {data?.todos?.edges?.map((todo) => (
          <Todo key={todo.node.id} {...{ todo }} />
        ))}
        {data?.todos?.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="ml-auto w-10 text-gray-400 cursor-pointer"
            onClick={onLoadMore}
          />
        )}
        {isPending && "Loading more ..."}
      </div>
    </>
  );
};
