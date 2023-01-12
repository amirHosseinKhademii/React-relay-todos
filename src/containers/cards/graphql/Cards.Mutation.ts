import { graphql } from "react-relay";

export const CardsMutation = graphql`
  mutation CardsMutation($input: AddCardInput!, $connections: [ID!]!) {
    addCard(input: $input) {
      clientMutationId
      addCardEdge {
        cursor
        node @appendNode(connections: $connections, edgeTypeName: "CardEdge") {
          ...CardsMutationFragment
        }
      }
    }
  }
`;

export const CardsMutationFragment = graphql`
  fragment CardsMutationFragment on Card {
    title
    description
    id
  }
`;
