import { Modal } from "components";
import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlus } from "icons/ICPlus";
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
        <ICPlus
          className=" mb-2 p-2 w-11 text-gray-600 ml-auto cursor-pointer "
          onClick={onOpen}
        />

        <ul
          className="rounded p-2  flex flex-col space-y-2 "
          onClick={(e) => e.stopPropagation()}
        >
          {data.cards.edges?.map((card) => (
            <Suspense
              key={card.node?.id}
              fallback={
                <li className="border-cyan-500 bg-cyan-200 border  rounded p-2 cursor-pointer flex items-center justify-between"></li>
              }
            >
              <Card {...{ card }} __id={data.cards.__id} />
            </Suspense>
          ))}
          {data.cards.pageInfo?.hasNextPage && (
            <ICLoadMore
              className="w-8 text-cyan-300 ml-auto cursor-pointer"
              onClick={onLoadMore}
              // disabled={isPending}
            />
          )}
          {isPending && "Loading more ..."}
        </ul>
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
