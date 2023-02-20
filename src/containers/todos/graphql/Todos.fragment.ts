import { graphql } from "react-relay";

export const TodosFragment = graphql`
  fragment TodosFragment on Query
  @refetchable(queryName: "TodosPaginationFrgament") {
    todos(before: $before, after: $after, first: $first, last: $last)
      @stream_connection(key: "List__todos", initial_count: 2) {
      __id
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          title
          body
          id
          isCompleted
        }
      }
    }
  }
`;

// export const TodosBaseFragment = graphql`
//   fragment TodosBaseFragment on Todo {
//     title
//     description
//     id
//     isCompleted
//   }
// `;
