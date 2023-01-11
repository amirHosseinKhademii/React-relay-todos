import { Modal } from "components";

import { Todos } from "containers/todo/Todos";
import { useId, useState } from "react";
import { useMutation } from "react-relay";
import { TodosPageMutation } from "./graphql/TodosPage.mutation";
import { TodosPageMutation as TTodosPageMutation } from "./graphql/__generated__/TodosPageMutation.graphql";

export const TodosPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const [mutate] = useMutation<TTodosPageMutation>(TodosPageMutation);
  const clientMutationId = useId();
  const todoId = useId();

  return (
    <>
      <div className="mx-auto max-w-xl my-20">
        <button
          className=" mb-4 p-4 rounded bg-gray-800 text-white text-center w-full"
          onClick={openModal}
        >
          Create
        </button>
        <Todos />
      </div>
      {isOpen && (
        <Modal {...{ onClose }}>
          <form
            className="w-full flex flex-col space-y-8 mt-12"
            onSubmit={(e: any) => {
              e.preventDefault();
              const title: string = e.target.title.value;
              const description: string = e.target.description.value;
              mutate({
                variables: {
                  input: {
                    title,
                    description,
                    clientMutationId,
                  },
                },
                optimisticResponse: {
                  addTodo: {
                    todo: {
                      id: todoId,
                      isCompleted: false,
                      description,
                      title,
                    },
                    clientMutationId,
                  },
                },
                optimisticUpdater: (proxyStore) => {
                  // read the todos from the store
                  const todos = proxyStore.getRoot().getLinkedRecords("todos");

                  // create a new todo with the input data
                  const newTodo = {
                    id: todoId,
                    isCompleted: false,
                    description,
                    title,
                  };
                  console.log(todos);

                  // append the new todo to the list of todos
                  //   proxyStore
                  //     .getRoot()
                  //     .setLinkedRecords([...todos, newTodo], "todos");
                },
                // updater: (proxyStore) => {
                //   // read the todos from the store
                //   const todos = proxyStore.getRoot().getLinkedRecords("todos");
                //   // update the todo with the actual id returned by the server
                //   const updatedTodos = todos.map((todo) => {
                //     if (todo.id === todoId) {
                //       return proxyStore.get(todo.id);
                //     }
                //     return todo;
                //   });
                //   // update the store with the updated todos
                //   proxyStore.getRoot().setLinkedRecords(updatedTodos, "todos");
                // },
              });
            }}
          >
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="w-full h-14 rounded border border-gray-300 px-4"
            />
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="w-full h-14 rounded border border-gray-300 px-4"
            />
            <button
              type="submit"
              className=" mb-4 p-4 rounded bg-gray-800 text-white text-center w-full"
            >
              Create
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};
