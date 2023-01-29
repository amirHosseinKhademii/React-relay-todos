import { ICLoadMore } from "icons/ICLoadMore";
import { ICPlus } from "icons/ICPlus";
import { Comment } from "./Comment";
import { CommentModal } from "./CommentModal";
import { useComments } from "./hooks";

export const Comments = ({ cardId }: { cardId: string }) => {
  const { data, onLoadMore, isPending, onOpen, isOpen, onClose } =
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
        <CommentModal {...{ cardId, onClose }} __id={data.comments.__id} />
      )}
    </>
  );
};
