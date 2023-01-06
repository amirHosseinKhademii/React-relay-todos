import { PreloadedQuery, useMutation, usePreloadedQuery } from "react-relay";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";
import { Cards } from "containers/cards/Cards";
import { TodoMutation } from "./graphql/Todo.mutations";
import { TodoMutation as TTodoMutation } from "./graphql/__generated__/TodoMutation.graphql";
import { useId } from "react";
interface TTodo {
  initialQueryRef: PreloadedQuery<TTodoQuery>;
}
export const Todo = ({ initialQueryRef }: TTodo) => {
  const { todo } = usePreloadedQuery<TTodoQuery>(TodoQuery, initialQueryRef);
  const [mutate] = useMutation<TTodoMutation>(TodoMutation);
  const clientMutationId = useId();

  return (
    <div
      className={`mx-auto max-w-lg rounded border border-gray-300 my-40 p-4 shadow-lg ${
        todo.isCompleted && "bg-slate-400"
      }`}
      onClick={() =>
        mutate({
          variables: {
            input: {
              id: todo.id,
              isCompleted: !todo.isCompleted,
              clientMutationId: clientMutationId,
            },
          },
          optimisticResponse: {
            updateTodo: {
              todo: {
                id: todo.id,
                isCompleted: !todo.isCompleted,
                description: todo.description,
                title: todo.title,
              },
              clientMutationId: clientMutationId,
            },
          },
        })
      }
    >
      <p className="text-lg pb-4 text-center"> {todo.title}</p>
      <Cards {...{ todo }} />
    </div>
  );
};
