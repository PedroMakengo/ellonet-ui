
const createCandidate = `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
      id
      name
      email
      description
      createdAt
      updatedAt
    }
  }
`;


aws_amplify.Amplify.configure(awsmobile)
document.getElementById("btn-submit").addEventListener("click", () => {
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const description = document.getElementById("description");
  aws_amplify.API.graphql({
    query: createCandidate,
    variables: {
      input: {
        name: name.value,
        email: email.value,
        description: description.value
      },
    },
  })

  Swal.fire(
    'CONTACTO EFECTUADO COM SUCESSO',
    'A ELLONET, LDA Responderá em breve',
    'success'
  )
  email.value = ""
  description.value = ""
  name.value = ""
})
