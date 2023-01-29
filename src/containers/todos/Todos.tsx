import { Modal } from "components";
import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlus } from "icons/ICPlus";
import { Suspense } from "react";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
export const Todos = () => {
  const { data, onLoadMore, isPending, onClose, onOpen, onSubmit, isOpen } =
    useTodos();

  return (
    <>
      <div
        className="   rounded p-4 shadow-md flex flex-col space-y-2 bg-slate-600 antialiased  max-w-lg mx-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <ICPlus
          className=" text-gray-800 w-9 ml-auto cursor-pointer "
          onClick={onOpen}
        />

        {data.todos.edges?.map((todo) => (
          <Suspense
            key={todo.node?.id}
            fallback={
              <div
                className={`mx-auto w-full border-green-500 bg-green-200 rounded border  p-4 shadow-lg `}
              />
            }
          >
            <Todo id={todo.node?.id!} __id={data.todos.__id} />
          </Suspense>
        ))}
        {data.todos.pageInfo?.hasNextPage && (
          <ICLoadMore
            className="ml-auto w-10 text-gray-400 cursor-pointer"
            onClick={onLoadMore}
            //disabled={isPending}
          />
        )}
        {isPending && "Loading more ..."}
      </div>
      {isOpen && (
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
      )}
    </>
  );
};
