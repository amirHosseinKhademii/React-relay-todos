import { useLazyLoadQuery, useMutation, useQueryLoader } from "react-relay";
import { DeleteTodoMutation } from "./graphql/DeleteTodo.mutation";
import { AddTodoMutation } from "./graphql/AddTodo.mutation";
import { TodosQuery } from "./graphql/Todos.queries";
import { UpdateTodoMutation } from "./graphql/UpdateTodo.mutation";
import type { TodosQuery as TTodosQuery } from "./graphql/__generated__/todosQuery.graphql";
import type { DeleteTodoMutation as TDeleteTodoMutation } from "./graphql/__generated__/DeleteTodoMutation.graphql";
import type { AddTodoMutation as TAddTodoMutation } from "./graphql/__generated__/AddTodoMutation.graphql";
import type { UpdateTodoMutation as TUpdateTodoMutation } from "./graphql/__generated__/UpdateTodoMutation.graphql";

export const Todos = () => {
  const [_, loadQuery] = useQueryLoader<TTodosQuery>(TodosQuery);

  const data = useLazyLoadQuery<TTodosQuery>(TodosQuery, {});

  const [deleteTodo] = useMutation<TDeleteTodoMutation>(DeleteTodoMutation);

  const [addTodo] = useMutation<TAddTodoMutation>(AddTodoMutation);

  const [updateTodo] = useMutation<TUpdateTodoMutation>(UpdateTodoMutation);

  const onDelete = (id: string) =>
    deleteTodo({
      variables: { id },
      onCompleted: () => loadQuery({}, { fetchPolicy: "network-only" }),
    });

  const onAdd = () =>
    addTodo({
      variables: { title: "Client todo", description: "Client desc" },
      onCompleted: () => loadQuery({}, { fetchPolicy: "network-only" }),
    });

  const onCompleted = (id: string, isCompleted: boolean) =>
    updateTodo({
      variables: { id, isCompleted: !isCompleted },
      onCompleted: () => loadQuery({}, { fetchPolicy: "network-only" }),
    });

  return (
    <div className=" m-20 flex flex-col space-y-4">
      <button className="p-3 bg-green-500" onClick={onAdd}>
        Add Todo
      </button>
      <ul className="flex flex-col space-y-10">
        {data.todos.data.map((todo) => (
          <li
            className={`p-4 rounded flex items-center justify-between ${
              todo.isCompleted ? "bg-cyan-700 " : "bg-cyan-300"
            }`}
            key={todo.id}
          >
            <span>{todo.title}</span>
            <button
              className="p-1 bg-red-400 rounded text-sm"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className="p-1 bg-yellow-400 rounded text-sm"
              onClick={() => onCompleted(todo.id, todo.isCompleted ?? false)}
            >
              {todo.isCompleted ? "Completed" : "UnCompleted"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
