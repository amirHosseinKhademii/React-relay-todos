// import { graphql } from "react-relay";

// export const CardsFragment = graphql`
//   fragment CardsFragment on Todo
//   @refetchable(queryName: "CardsPaginationQuery") {
//     cards(before: $before, after: $after, first: $first, last: $last)
//       @connection(key: "List__cards") {
//       edges {
//         node {
//           id
//           title
//         }
//       }
//     }
//   }
// `;
export {};
