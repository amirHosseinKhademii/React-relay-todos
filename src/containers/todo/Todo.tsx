import { Cards } from "containers/cards/Cards";
import { useTodo } from "./hooks";

export const Todo = ({ id }: { id: string }) => {
  const { todo, onUpdate } = useTodo(id);
  return (
    <div
      className={`mx-auto w-full rounded border border-gray-300  p-4 shadow-lg ${
        todo.isCompleted ? "bg-slate-400" : "bg-gray-100"
      }`}
      onClick={onUpdate}
    >
      <p className="text-lg pb-4 text-center"> {todo.title}</p>
      <Cards {...{ todo }} />
    </div>
  );
};
