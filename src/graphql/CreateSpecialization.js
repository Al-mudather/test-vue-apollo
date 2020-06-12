import gql from "graphql-tag";

export const CreateSpecialization = gql`
  mutation createSpecialization($title: String!) {
    specializationCreate(data: { title: $title }) {
      specialization {
        id
        title
      }
    }
  }
`;
