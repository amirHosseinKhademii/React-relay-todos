import { graphql } from "react-relay";

export const UsersBaseFragment = graphql`
  fragment UsersBaseFragment on User {
    id
    userName
    fullName
  }
`;
