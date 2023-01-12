import { Modal } from "components";
import { Suspense } from "react";
import { Card } from "./Card";
import { TCards, useCards } from "./hooks";

export const Cards = ({ todo, todoId }: TCards) => {
  const { data, isPending, onLoadMore, onClose, onOpen, onSubmit, isOpen } =
    useCards({
      todo,
      todoId,
    });

  return (
    <>
      <div>
        <button
          className=" mb-4 p-4 rounded bg-gray-600 text-white text-center w-full"
          onClick={onOpen}
        >
          Create Card
        </button>
        <ul
          className=" border border-cyan-500 bg-cyan-200 rounded p-4 shadow-md flex flex-col space-y-2 "
          onClick={(e) => e.stopPropagation()}
        >
          {data.cards.edges?.map((card) => (
            <Suspense
              key={card.node?.id}
              fallback={
                <li className="bg-amber-200 border border-amber-300 rounded p-2 cursor-pointer flex items-center justify-between"></li>
              }
            >
              <Card {...{ card }} __id={data.cards.__id} />
            </Suspense>
          ))}
          {data.cards.pageInfo?.hasNextPage && (
            <button
              className="bg-green-200 border border-green-300 rounded p-2"
              onClick={onLoadMore}
              disabled={isPending}
            >
              Load Next Cards
            </button>
          )}
          {isPending && "Loading more ..."}
        </ul>
      </div>
      {isOpen && (
        <Modal {...{ onClose }}>
          <form
            className="w-full flex flex-col space-y-8 mt-12"
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
              className=" mb-4 p-4 rounded bg-gray-600 text-white text-center w-full"
            >
              Save Card
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
