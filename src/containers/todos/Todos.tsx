import { Modal } from "components";
import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlusTodo } from "icons/ICPlusTodo";
import { Suspense } from "react";
import { useTodos } from "./hooks";
// import { Todo } from "./Todo";
export const Todos = () => {
  const { data, onLoadMore, isPending } = useTodos();

  return (
    <>
      <div
        className="rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-600 antialiased  max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <ICPlusTodo
          className=" text-gray-800 w-8 ml-auto cursor-pointer "
          onClick={onOpen}
        >
          Create Todo
        </ICPlusTodo> */}
        {data?.todos?.edges?.map((todo) => (
          <div key={todo.node.id}>{todo.node?.title}</div>
        ))}
        {data?.todos?.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="ml-auto w-10 text-gray-400 cursor-pointer"
            onClick={onLoadMore}
            //disabled={isPending}
          />
        )}
        {isPending && "Loading more ..."}
      </div>
      {/* {isOpen && (
        <Modal {...{ onClose }}>
          <form
            className="w-full flex flex-col space-y-8 mt-4"
            {...{ onSubmit }}
          >
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full h-14 rounded border border-gray-300 px-4"
            />
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="w-full h-14 rounded border border-gray-300 px-4"
            />
            <button
              type="submit"
              className=" mb-4 p-4 rounded bg-gray-800 text-white text-center w-full"
            >
              Save Todo
            </button>
          </form>
        </Modal>
      )} */}
    </>
  );
};
