import {
  PreloadedQuery,
  useFragment,
  useMutation,
  usePreloadedQuery,
} from "react-relay";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";
import { Cards } from "containers/cards/Cards";
import { TodoMutation, TodoMutationFragment } from "./graphql/Todo.mutations";
import { TodoMutation as TTodoMutation } from "./graphql/__generated__/TodoMutation.graphql";
import { TodoMutationFragment$key } from "./graphql/__generated__/TodoMutationFragment.graphql";
interface TTodo {
  initialQueryRef: PreloadedQuery<TTodoQuery>;
}
export const Todo = ({ initialQueryRef }: TTodo) => {
  const { todo } = usePreloadedQuery<TTodoQuery>(TodoQuery, initialQueryRef);
  const [mutate] = useMutation<TTodoMutation>(TodoMutation);
  //const data = useFragment(TodoMutationFragment, todo);

  return (
    <div
      className={`mx-auto max-w-lg rounded border border-gray-300 my-40 p-4 shadow-lg ${
        todo.isCompleted && "bg-slate-400"
      }`}
      onClick={() =>
        mutate({
          variables: {
            id: todo.id,
            isCompleted: !todo.isCompleted,
          },
          // optimisticUpdater: (store) => {
          //   const { updatableData } =
          //     store.readUpdatableFragment_EXPERIMENTAL<TodoMutationFragment$key>(
          //       TodoMutationFragment
          //     );
          //   //updatableData.isCompleted = !todo.isCompleted;
          // },
        })
      }
    >
      <p className="text-lg pb-4 text-center"> {todo.title}</p>
      <Cards {...{ todo }} />
    </div>
  );
};
