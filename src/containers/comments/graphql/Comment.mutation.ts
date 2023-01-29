import { graphql } from "react-relay";

// export const CardAddMutation = graphql`
//   mutation CardAddMutation($input: AddCardInput!, $connections: [ID!]!) {
//     addCard(input: $input) {
//       clientMutationId
//       addCardEdge {
//         cursor
//         node @appendNode(connections: $connections, edgeTypeName: "CardEdge") {
//           ...CardsBaseFragment
//         }
//       }
//     }
//   }
// `;

export const CommentDeleteMutation = graphql`
  mutation CommentDeleteMutation(
    $input: DeleteCommentInput!
    $connections: [ID!]!
  ) {
    deleteComment(input: $input) {
      clientMutationId
      id @deleteEdge(connections: $connections)
    }
  }
`;

// export const CardUpdateMutation = graphql`
//   mutation CardUpdateMutation($input: UpdateCardInput!) {
//     updateCard(input: $input) {
//       clientMutationId
//       card {
//         ...CardsBaseFragment
//       }
//     }
//   }
// `;
