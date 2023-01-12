import { graphql } from "react-relay";

export const TodosPageMutation = graphql`
  mutation TodosPageMutation($input: AddTodoInput!, $connections: [ID!]!) {
    addTodo(input: $input) {
      clientMutationId
      addTodoEdge {
        cursor
        node @appendNode(connections: $connections, edgeTypeName: "TodoEdge") {
          ...TodoMutationFragment
        }
      }
    }
  }
`;
