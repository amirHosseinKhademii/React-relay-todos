import { graphql } from "react-relay";

export const TodoMutation = graphql`
  mutation TodoMutation(
    $id: ID!
    $title: String
    $description: String
    $isCompleted: Boolean
    $clientMutationId: String
  ) {
    updateTodo(
      input: {
        id: $id
        isCompleted: $isCompleted
        title: $title
        description: $description
        clientMutationId: $clientMutationId
      }
    ) {
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
    updated_at
  }
`;
