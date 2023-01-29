import { Modal } from "components";
import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlus } from "icons/ICPlus";
import { Comment } from "./Comment";
import { useComments } from "./hooks";

export const Comments = ({ cardId }: { cardId: string }) => {
  const { data, onLoadMore, isPending, onOpen, isOpen, onClose, onSubmit } =
    useComments(cardId);

  return (
    <>
      <div className="  w-full">
        <ICPlus
          className=" mb-2 p-2 w-8 text-gray-600 ml-auto cursor-pointer "
          onClick={onOpen}
        />
        <div className="flex flex-col space-y-2 my-2">
          {data?.comments?.edges?.map((comment) => (
            <Comment
              {...{ comment }}
              key={comment.node?.id}
              __id={data.comments.__id}
            />
          ))}
        </div>

        {data.comments.pageInfo?.hasNextPage && (
          <ICLoadMore
            className=" text-xs w-6 ml-auto text-cyan-300 "
            onClick={onLoadMore}
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
              className=" mb-4 p-4 rounded bg-gray-600 text-white text-center w-full"
            >
              Save Comment
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
