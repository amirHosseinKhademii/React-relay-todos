import { graphql } from "react-relay";

export const UsersBaseFragment = graphql`
  fragment UsersBaseFragment on User {
    id
    userName
    fullName
  }
`;

export const UsersFragment = graphql`
  fragment UsersFragment on Query
  @refetchable(queryName: "UsersPaginationFrgament") {
    usersByIds(
      before: $before
      after: $after
      first: $first
      last: $last
      ids: $ids
    ) @connection(key: "List__usersByIds") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          userName
          fullName
        }
      }
    }
  }
`;
