import { graphql } from "react-relay";

export const TodoQuery = graphql`
  query TodoQuery($id: ID!) {
    todo(id: $id) {
      id
      title
      description
      ...TodoCardsFragment
    }
  }
`;

export const TodoCardsFragment = graphql`
  fragment TodoCardsFragment on Todo {
    cards(first: 2) @connection(key: "List__cards") {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
