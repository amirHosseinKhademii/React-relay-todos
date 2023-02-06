import { graphql } from "react-relay";

export const UsersByIdsQuery = graphql`
  query UsersByIdsQuery(
    $ids: [ID!]!
    $before: String
    $after: String
    $first: Float
    $last: Float
  ) {
    ...UsersFragment
  }
`;
