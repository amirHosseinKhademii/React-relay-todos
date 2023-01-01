import { graphql } from "react-relay";

export const TodosQuery = graphql`
  query TodosQuery {
    todos(page: 1, limit: 10) {
      data {
        id
        title
        description
        created_at
        updated_at
        isCompleted
      }
      count
      nextPage
      prevPage
    }
  }
`;
