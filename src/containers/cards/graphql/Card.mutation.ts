import { graphql } from "react-relay";

export const CardAddMutation = graphql`
  mutation CardAddMutation($input: AddCardInput!, $connections: [ID!]!) {
    addCard(input: $input) {
      clientMutationId
      addCardEdge {
        cursor
        node @appendNode(connections: $connections, edgeTypeName: "CardEdge") {
          ...CardMutationFragment
        }
      }
    }
  }
`;

export const CardMutationFragment = graphql`
  fragment CardMutationFragment on Card {
    title
    description
    id
  }
`;

export const CardDeleteMutation = graphql`
  mutation CardDeleteMutation($input: DeleteCardInput!, $connections: [ID!]!) {
    deleteCard(input: $input) {
      clientMutationId
      id @deleteEdge(connections: $connections)
    }
  }
`;
