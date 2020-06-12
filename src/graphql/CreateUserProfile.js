import gql from 'graphql-tag'

export const CreateUserProfile = gql`
  mutation createUserProfile(
    $price: Float,
    $isDoctor: Boolean,
    $isOnline: Boolean,
    $image: Upload!
  ) {
    userProfileCreate(
      data: {
        price: $price
        isDoctor: $isDoctor
        isOnline: $isOnline
        image: $image
        specialization: "U3BlY2lhbGl6YXRpb25UeXBlOjY="
      }
    ) {
      userProfile {
        id
        price
        created
        isDoctor
        isOnline
        imageUrl
        specialization {
          title
        }
      }
    }
  }
`
