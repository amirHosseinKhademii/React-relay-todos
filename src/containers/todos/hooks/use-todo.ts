import { TodoUpdateMutation } from "containers/todos/graphql/Todo.mutations";
import type { TodoUpdateMutation as TTodoUpdateMutation } from "containers/todos/graphql/__generated__/TodoUpdateMutation.graphql";
import { useLazyLoadQuery, useMutation } from "react-relay";
import type { TodoQuery as TTodoQuery } from "containers/todos/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todos/graphql/Todo.queries";
import { useId } from "react";

export const useTodo = (id: string) => {
  const { node: todo } = useLazyLoadQuery<TTodoQuery>(TodoQuery, { id });
  const [mutate] = useMutation<TTodoUpdateMutation>(TodoUpdateMutation);
  const clientMutationId = useId();

  return {
    todo,
    onUpdate: () =>
      mutate({
        variables: {
          input: {
            id: todo?.id!,
            isCompleted: !todo?.isCompleted,
            clientMutationId: clientMutationId,
          },
        },
        optimisticResponse: {
          updateTodo: {
            todo: {
              id: todo?.id!,
              isCompleted: !todo?.isCompleted,
              description: todo?.description,
              title: todo?.title,
            },
            clientMutationId: clientMutationId,
          },
        },
      }),
  };
};
