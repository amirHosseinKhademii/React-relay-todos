import { graphql } from "react-relay";

export const TodoMutation = graphql`
  mutation TodoMutation($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      clientMutationId
      todo {
        ...TodoMutationFragment
      }
    }
  }
`;

export const TodoMutationFragment = graphql`
  fragment TodoMutationFragment on Todo {
    title
    description
    id
    isCompleted
  }
`;
