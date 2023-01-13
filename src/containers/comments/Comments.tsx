import { useComments } from "./hooks";

export const Comments = ({ cardId }: { cardId: string }) => {
  const { data, onLoadMore, isPending } = useComments(cardId);

  return (
    <div className="  w-full">
      <div className="flex flex-col space-y-2 my-2">
        {data?.comments?.edges?.map((comment) => (
          <div
            key={comment.node?.id}
            className="text-xs text-gray-600 p-2 w-full rounded border bg-cyan-100"
          >
            {comment.node?.title}
          </div>
        ))}
      </div>

      {data.comments.pageInfo?.hasNextPage && (
        <button
          className="text-centet text-xs w-full  bg-cyan-300 p-2 rounded"
          onClick={onLoadMore}
          disabled={isPending}
        >
          Load more comments
        </button>
      )}
      {isPending && "Loading more ..."}
    </div>
  );
};
