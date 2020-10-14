import React, { useState } from 'react'
import Filtering from '../Filtering/Filtering'
import User from '../User/User'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


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
    <Container maxWidth='lg'>
      <Filtering filter={filter} setFilter={setFilter} usersList={usersList} />
      <Grid container spacing={2}>
        {filter}
      </Grid>
    </Container>
  )
}

export default Home
