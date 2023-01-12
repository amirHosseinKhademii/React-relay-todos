import { graphql } from "react-relay";

export const TodoUpdateMutation = graphql`
  mutation TodoUpdateMutation($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      clientMutationId
      todo {
        ...TodoMutationFragment
      }
    }
  }
`;
export const TodoAddMutation = graphql`
  mutation TodoAddMutation($input: AddTodoInput!, $connections: [ID!]!) {
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

export const TodoMutationFragment = graphql`
  fragment TodoMutationFragment on Todo {
    title
    description
    id
    isCompleted
  }
`;
