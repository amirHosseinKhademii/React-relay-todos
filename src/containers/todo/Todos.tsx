import {
  PreloadedQuery,
  useLazyLoadQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { TodoQuery as TTodoQuery } from "containers/todo/graphql/__generated__/TodoQuery.graphql";
import { TodoQuery } from "containers/todo/graphql/Todo.queries";
interface TTodo {
  initialQueryRef: PreloadedQuery<TTodoQuery>;
}
export const Todo = ({ initialQueryRef }: TTodo) => {
  const data = usePreloadedQuery<TTodoQuery>(TodoQuery, initialQueryRef);
  console.log(data);

  return (
    <div>
      todo
      {/* {data.todos.edges?.map((todo) => (
        <div id={todo.node?.id}>
          {todo.node?.title}
          <Cards />
        </div>
      ))} */}
    </div>
  );
};
