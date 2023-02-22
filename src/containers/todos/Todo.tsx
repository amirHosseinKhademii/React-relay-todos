import { ICDone } from "icons/ICDone";
import { ICTrash } from "icons/ICTrash";
import { ICUnDone } from "icons/ICUnDone";

export const Todo = ({
  todo,
}: {
  todo: {
    readonly node: {
      readonly body: string | null;
      readonly createdDate: any;
      readonly id: string;
      readonly isCompleted: boolean;
      readonly title: string;
    };
  };
}) => {
  return (
    <div
      className={`mx-auto w-full rounded border border-green-500  p-4 shadow-lg ${
        todo.node?.isCompleted ? "bg-green-400" : "bg-cyan-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xl "> {todo.node?.title}</span>
      </div>
      <div className="flex items-center space-x-2 mr-3">
        {todo.node.body?.substring(0, 100)}...
      </div>
      <span className="text-[10px] text-blue-400">{todo.node.createdDate}</span>
    </div>
  );
};
