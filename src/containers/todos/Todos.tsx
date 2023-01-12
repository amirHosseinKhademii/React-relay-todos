import { Suspense } from "react";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
export const Todos = () => {
  const { data, onLoadMore, isPending } = useTodos();

  return (
    <ul
      className="  border  rounded p-4 shadow-md flex flex-col space-y-2 border-gray-300 bg-gray-100 "
      onClick={(e) => e.stopPropagation()}
    >
      {data.todos.edges?.map((todo) => (
        <Suspense
          key={todo.node?.id}
          fallback={
            <div
              className={`mx-auto w-full border-green-500 bg-green-200 rounded border  p-4 shadow-lg `}
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
