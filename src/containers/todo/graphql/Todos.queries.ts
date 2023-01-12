import { graphql } from "react-relay";

export const TodosQuery = graphql`
  query TodosQuery(
    $before: String
    $after: String
    $first: Float
    $last: Float
  ) {
    ...TodosFragment
  }
`;

export const TodosFragment = graphql`
  fragment TodosFragment on Query
  @refetchable(queryName: "TodosPaginationFrgament") {
    todos(before: $before, after: $after, first: $first, last: $last)
      @connection(key: "List__todos") {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
        }
      }
    }
  }
`;
