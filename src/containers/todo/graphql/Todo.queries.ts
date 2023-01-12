import { graphql } from "react-relay";

export const TodoQuery = graphql`
  query TodoQuery($id: ID!) {
    node(id: $id) {
      ... on Todo {
        id
        title
        description
        isCompleted
        ...TodoCardsFragment
      }
    }
  }
`;

export const TodoCardsFragment = graphql`
  fragment TodoCardsFragment on Todo
  @refetchable(queryName: "TodoCardsPaginationFrgament")
  @argumentDefinitions(
    before: { type: "String" }
    after: { type: "String" }
    first: { type: "Float", defaultValue: 2 }
    last: { type: "Float" }
  ) {
    cards(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__cards") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
