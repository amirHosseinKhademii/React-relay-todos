import { Users } from "containers/users/Users";
import { ICHeartOutline } from "icons/ICHeartOutline";
import { ICTrash } from "icons/ICTrash";
import { Suspense } from "react";
import { TComment, useComment } from "./hooks/use-comment";

export const Comment = ({ comment, __id }: TComment) => {
  const { onDelete, onLike, isUsers, onUsersToggle } = useComment({
    comment,
    __id,
  });

  return (
    <div className="text-xs text-gray-600 p-2 w-full rounded border bg-cyan-300 flex flex-col">
      <div className="flex items-center justify-between">
        <span> {comment.node?.title}</span>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 ">
            <button
              className="text-[14px] text-indigo-500 cursor-pointer"
              onClick={onUsersToggle}
              disabled={!comment?.node?.likes?.length}
            >
              {comment?.node?.likes?.length}
            </button>
            <ICHeartOutline
              className="text-red-500 w-5"
              onClick={() => onLike(comment)}
            />
          </div>
          <ICTrash
            className="text-red-600 w-5"
            onClick={() => onDelete(comment.node?.id!)}
          />
        </div>
      </div>
      <span className="text-[9px] text-gray-800">
        {comment.node?.description}
      </span>
      <span className="text-[8px] text-blue-600">
        {comment.node?.created_at.slice(0, 10)}
      </span>

      {isUsers && comment?.node?.likes.length !== 0 && (
        <Suspense fallback={<div>users Loading...</div>}>
          <Users ids={comment.node?.likes!} />
        </Suspense>
      )}
    </div>
  );
};
