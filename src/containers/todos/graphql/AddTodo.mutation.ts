import { graphql } from "react-relay";

export const AddTodoMutation = graphql`
  mutation AddTodoMutation($title: String!, $description: String) {
    addTodo(title: $title, description: $description) {
      id
      title
      description
      created_at
      updated_at
      isCompleted
    }
  }
`;
