import React from 'react'

const UserProfile = ({ match, users }) => {
  const name = match.params.name
  const firstName = users.map((user) =>
    user.userName === name ? user.name : null
  )
  const lastName = users.map((lastname) =>
    lastname.userName === name ? lastname.familyName : null
  )
  const stacks = users.map((username) =>
    username.userName === name ? username.techStack : null
  )

  return (
    <>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{stacks}</h1>
    </>
  )
}
export default UserProfile
