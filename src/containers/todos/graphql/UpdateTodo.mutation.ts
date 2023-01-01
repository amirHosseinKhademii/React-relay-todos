import { graphql } from "react-relay";

export const UpdateTodoMutation = graphql`
  mutation UpdateTodoMutation(
    $title: String
    $description: String
    $id: String!
    $isCompleted: Boolean
  ) {
    updateTodo(
      title: $title
      description: $description
      id: $id
      isCompleted: $isCompleted
    )
  }
`;
