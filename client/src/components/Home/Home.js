import React, { useState } from 'react'
import Filtering from '../Filtering/Filtering'
import User from '../User/User'

const Home = ({ users }) => {
  const usersList = users.map((user) => (
    <User
      key={user.id}
      username={user.userName}
      firstname={user.name}
      familyname={user.familyName}
      techstack={user.techStack}
    />
  ))

  const [filter, setFilter] = useState(usersList)

  return (
    <div>
      <h1>Welcome to Elite</h1>
      <Filtering filter={filter} setFilter={setFilter} usersList={usersList} />
      {filter}
    </div>
  )
}

export default Home
