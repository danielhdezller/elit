import React, { useState, useEffect } from 'react';
// import Filtering from '../Filtering/Filtering'
import User from '../User/User';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import bg from '../../assets/images/bg.jpg';

const Home = ({ users }) => {
  const [filter, setFilter] = useState(users);

  useEffect(() => {
    setFilter(users);
  }, [users]);

  return (
    <Container maxWidth='lg'>
      {/* <Filtering setFilter={setFilter} /> */}
      <div className='card text-center mt-5'>
        {/* <div className="card-header">
          Welcome to ELIT
        </div> */}
        <div
          className='card-body'
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        >
          <h5 className='card-title display-4 text-light'>
            connect.collaborate.create()
          </h5>
          {/* <p className="card-text text-light">Find your a pair based on your .</p> */}
          {/* <button className="btn btn-primary">JOIN</button> */}
        </div>
      </div>

      <Grid className='p-5' container spacing={2}>
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
  );
};

export default Home;
