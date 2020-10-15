import React, { useState, useEffect } from 'react'
// import Filtering from '../Filtering/Filtering'
import User from '../User/User'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const Home = ({ users }) => {

  const [filter, setFilter] = useState(users)

  useEffect(() => {
    setFilter(users)
  }, [users])

  return (
    <Container maxWidth='lg'>
      {/* <Filtering setFilter={setFilter} /> */}
      <Grid container spacing={2}>
        {filter?.map((user) => (
          <User
            key={user.id}
            username={user.githubLogin}
            firstname={user.name}
            avatar={user.avatar}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default Home
