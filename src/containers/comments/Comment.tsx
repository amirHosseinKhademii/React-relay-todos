import { ICTrash } from "icons/ICTrash";
import { TComment, useComment } from "./hooks/use-comment";

export const Comment = ({ comment, __id }: TComment) => {
  const { onDelete } = useComment({ comment, __id });
  return (
    <div className="text-xs text-gray-600 p-2 w-full rounded border bg-cyan-300">
      <div className="flex items-center justify-between">
        <span> {comment.node?.title}</span>

        <div className="flex items-center space-x-2">
          <ICTrash
            className="text-red-600 w-5"
            onClick={() => onDelete(comment.node?.id!)}
          />
        </div>
      </div>
    </div>
  );
};
