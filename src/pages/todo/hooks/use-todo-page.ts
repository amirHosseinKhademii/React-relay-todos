import { useId, useState } from "react";
import { useMutation } from "react-relay";
import { TodosPageMutation } from "pages/todo/graphql/TodosPage.mutation";
import { TodosPageMutation as TTodosPageMutation } from "pages/todo/graphql/__generated__/TodosPageMutation.graphql";

export const useTodoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TTodosPageMutation>(TodosPageMutation);
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
