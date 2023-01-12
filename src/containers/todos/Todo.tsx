import { Cards } from "containers/cards/Cards";
import { useTodo } from "./hooks";

export const Todo = ({ id }: { id: string }) => {
  const { todo, onUpdate } = useTodo(id);
  return (
    <div
      className={`mx-auto w-full rounded border border-green-500    p-4 shadow-lg ${
        todo?.isCompleted ? "bg-green-400" : "bg-green-200"
      }`}
      onClick={onUpdate}
    >
      <p className="text-lg pb-4 text-center"> {todo?.title}</p>
      {todo && <Cards {...{ todo }} todoId={todo.id!} />}
    </div>
  );
};
