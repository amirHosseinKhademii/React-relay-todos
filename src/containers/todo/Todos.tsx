import { useMemo } from "react";
import { useSubscription } from "react-relay";
import { GraphQLSubscriptionConfig } from "relay-runtime";
import { TodosSubscription } from "./graphql/Todos.subscriptions";
import { useTodos } from "./hooks";
import { Todo } from "./Todo";
import { TodosSubscription as TTodosSubscription } from "./graphql/__generated__/TodosSubscription.graphql";

export const Todos = () => {
  const { data, onLoadMore, isPending } = useTodos();
  const subscriptionConfig: GraphQLSubscriptionConfig<TTodosSubscription> =
    useMemo(
      () => ({
        subscription: TodosSubscription,
        variables: {},
      }),
      []
    );
  useSubscription(subscriptionConfig);
  return (
    <ul
      className="mx-auto max-w-xl my-20  border border-green-500 bg-green-200 rounded p-4 shadow-md flex flex-col space-y-2 "
      onClick={(e) => e.stopPropagation()}
    >
      {data.todos.edges?.map((todo) => (
        <Todo id={todo.node?.id!} key={todo.node?.id} />
      ))}
      {data.todos.pageInfo?.hasNextPage && (
        <button
          className="bg-indigo-200 border border-indigo-300 rounded p-2"
          onClick={onLoadMore}
          disabled={isPending}
        >
          Load Next Todos
        </button>
      )}
      {isPending && "Loading more ..."}
    </ul>
  );
};
