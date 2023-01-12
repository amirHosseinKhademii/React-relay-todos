import { useId, useState } from "react";
import { useMutation } from "react-relay";
import { TodoAddMutation } from "containers/todo/graphql/Todo.mutations";
import { TodoAddMutation as TTodoAddMutation } from "containers/todo/graphql/__generated__/TodoAddMutation.graphql";

export const useTodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TTodoAddMutation>(TodoAddMutation);
  const clientMutationId = useId();
  return {
    isOpen,
    onOpen,
    onClose,
    onSubmit: (e: any) => {
      e.preventDefault();
      const title: string = e.target.title.value;
      const description: string = e.target.description.value;
      mutate({
        variables: {
          connections: ["client:root:__List__todos_connection"],
          input: {
            title,
            description,
            clientMutationId,
          },
        },
        optimisticResponse: {
          addTodo: {
            addTodoEdge: {
              node: {
                id: clientMutationId,
                title,
                description,
                isCompleted: false,
              },
              cursor: clientMutationId,
            },
            clientMutationId,
          },
        },
        optimisticUpdater: onClose,
      });
    },
  };
};
