import { graphql } from "react-relay";

export const DeleteTodoMutation = graphql`
  mutation DeleteTodoMutation($id: String!) {
    deleteTodo(id: $id)
  }
`;
