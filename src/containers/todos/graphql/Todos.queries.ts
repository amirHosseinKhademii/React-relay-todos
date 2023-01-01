import { graphql } from "react-relay";

export const TodosQuery = graphql`
  query TodosQuery($page: Float, $limit: Float) {
    todos(page: $page, limit: $limit) {
      data {
        id
        title
        description
        created_at
        updated_at
        isCompleted
        ...TodosUserFragment
      }
      count
      nextPage
      prevPage
    }
  }
`;

export const TodosUserFragment = graphql`
  fragment TodosUserFragment on Todo {
    user {
      fullName
    }
  }
`;
