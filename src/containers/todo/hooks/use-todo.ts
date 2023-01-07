import { TodoMutation } from "../graphql/Todo.mutations";
import type { TodoMutation as TTodoMutation } from "../graphql/__generated__/TodoMutation.graphql";
import { useLazyLoadQuery, useMutation } from "react-relay";
import type { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";
import { useId } from "react";

export const useTodo = (id: string) => {
  const { todo } = useLazyLoadQuery<TTodoQuery>(TodoQuery, { id });
  const [mutate] = useMutation<TTodoMutation>(TodoMutation);
  const clientMutationId = useId();

  return {
    todo,
    onUpdate: () =>
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
      }),
  };
};
