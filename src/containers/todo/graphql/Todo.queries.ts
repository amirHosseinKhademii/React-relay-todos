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
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
