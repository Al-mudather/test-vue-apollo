import gql from "graphql-tag";

export const AllSpecialization = gql`
  query GetAllSpecializations {
    allSpecialization {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
