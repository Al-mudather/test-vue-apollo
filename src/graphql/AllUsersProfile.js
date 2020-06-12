import gql from "graphql-tag";

export const GetAllUsersProfile = gql`
  query GetAllUsersProfile {
    allUserprofile {
      edges {
        node {
          imageUrl
          price
          isDoctor
          isOnline
          created
          updated
          specialization {
            id
            title
          }
        }
      }
    }
  }
`;
