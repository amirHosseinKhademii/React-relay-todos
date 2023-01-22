import { graphql } from "react-relay";

export const TodosQuery = graphql`
  query TodosQuery($before: String, $after: String, $first: Int, $last: Int) {
    ...TodosFragment
  }
`;
