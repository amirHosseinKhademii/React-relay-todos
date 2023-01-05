import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";
import { Cards } from "containers/cards/Cards";
interface TTodo {
  initialQueryRef: PreloadedQuery<TTodoQuery>;
}
export const Todo = ({ initialQueryRef }: TTodo) => {
  const { todo } = usePreloadedQuery<TTodoQuery>(TodoQuery, initialQueryRef);

  return (
    <div className="mx-auto max-w-lg rounded border border-gray-300 my-40 p-4 shadow-lg">
      <p className="text-lg pb-4 text-center"> {todo.title}</p>
      <Cards {...{ todo }} />
    </div>
  );
};
