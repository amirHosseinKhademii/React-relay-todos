import { Suspense } from "react";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
export const Todos = () => {
  const { data, onLoadMore, isPending } = useTodos();

  return (
    <ul
      className="  border border-green-500 bg-green-200 rounded p-4 shadow-md flex flex-col space-y-2 "
      onClick={(e) => e.stopPropagation()}
    >
      {data.todos.edges?.map((todo) => (
        <Suspense
          key={todo.node?.id}
          fallback={
            <div
              className={`mx-auto w-full rounded border border-gray-300  p-4 shadow-lg bg-gray-100`}
            />
          }
        >
          <Todo id={todo.node?.id!} />
        </Suspense>
      ))}
      {data.todos.pageInfo?.hasNextPage && (
        <button
          className="bg-indigo-200 border border-indigo-300 rounded p-2"
          onClick={onLoadMore}
          disabled={isPending}
        >
          Load Next Todos
        </button>
      )}
      {isPending && "Loading more ..."}
    </ul>
  );
};
