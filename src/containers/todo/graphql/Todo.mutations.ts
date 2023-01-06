import { graphql } from "react-relay";

export const TodoMutation = graphql`
  mutation TodoMutation(
    $id: ID!
    $title: String
    $description: String
    $isCompleted: Boolean
  ) {
    updateTodo(
      input: {
        id: $id
        isCompleted: $isCompleted
        title: $title
        description: $description
      }
    ) {
      ...TodoMutationFragment
    }
  }
`;

export const TodoMutationFragment = graphql`
  fragment TodoMutationFragment on UpdateTodoPayload {
    clientMutationId
    title
    description
    id
    isCompleted
    created_at
    updated_at
  }
`;
