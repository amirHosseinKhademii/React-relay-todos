import { graphql } from "react-relay";

export const UsersByIdsQuery = graphql`
  query UsersByIdsQuery($ids: [ID!]!) {
    usersByIds(ids: $ids) {
      id
      userName
      fullName
    }
  }
`;
