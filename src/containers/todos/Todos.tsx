import { useLazyLoadQuery, useMutation } from "react-relay";

import { TodosQuery } from "./graphql";
import { DeleteTodoMutation } from "./graphql/DeleteTodo.mutation";
import type { TodosQuery as TTodosQuery } from "./graphql/__generated__/todosQuery.graphql";
import type { DeleteTodoMutation as TDeleteTodoMutation } from "./graphql/__generated__/DeleteTodoMutation.graphql";

// const preloadedQuery = loadQuery<AppTodosQueryType>(
//   environment,
//   AppTodosQuery,
//   {}
// );

export const Todos = () => {
  const data = useLazyLoadQuery<TTodosQuery>(TodosQuery, {});

  const [mutate] = useMutation<TDeleteTodoMutation>(DeleteTodoMutation);

  return (
    <ul>
      {data.todos.data.map(
        (todo) =>
          todo && (
            <li
              key={todo.id}
              onClick={() =>
                mutate({
                  variables: { id: todo.id },
                  updater: (res) => res.delete(todo.id),
                })
              }
            >
              {todo.title}
            </li>
          )
      )}
    </ul>
  );
};
