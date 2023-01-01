import { useLazyLoadQuery } from "react-relay";

import { TodosQuery } from "./graphql";
import { TodosQuery as TTodosQuery } from "./graphql/__generated__/todosQuery.graphql";

// const preloadedQuery = loadQuery<AppTodosQueryType>(
//   environment,
//   AppTodosQuery,
//   {}
// );

export const Todos = () => {
  const data = useLazyLoadQuery<TTodosQuery>(TodosQuery, {});
  return (
    <ul>
      {data.todos.data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
