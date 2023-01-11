import { graphql } from "react-relay";

export const TodosPageMutation = graphql`
  mutation TodosPageMutation($input: AddTodoInput!) {
    addTodo(input: $input) {
      clientMutationId
      todo {
        ...TodoMutationFragment
      }
    }
  }
`;
