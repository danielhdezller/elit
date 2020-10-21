import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// import Filtering from '../Filtering/Filtering'
import TopDescription from '../TopDescription/TopDescription'
=======
>>>>>>> 833ee15a58c7fc81ed93d8e6144a3bacaa221585
import User from '../User/User'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BottomDescription from '../BottomDescription/BottomDescription'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Home = ({ users }) => {
  const [filter, setFilter] = useState(users);

  useEffect(() => {
    setFilter(users);
  }, [users]);

  return (
    <>
<<<<<<< HEAD
    <div>
      <TopDescription></TopDescription>
    </div>
      {/* <Filtering setFilter={setFilter} /> */}

      {/* <div className="card text-center mt-5">
        <div className="card-body">
          <h5 className="card-title display-4">
            connect.collaborate.create()
            </h5>
        </div>
      </div> */}
      <div>
=======
      <section className='d-flex justify-content-center align-items-center flex-column m-5 '>
        <h1 className='text-light'>CONNECT</h1>
        <div>
          <span className='h2' role='img' aria-label='programming'>👩‍💻</span>
          <span className='h4 mx-3' role='img' aria-label='programming'>🔗</span>
          <span className='h2' role='img' aria-label='programming'>👨‍💻</span>
        </div>
      </section>
>>>>>>> 833ee15a58c7fc81ed93d8e6144a3bacaa221585

      <div>
        <Carousel
          ssr={false}
          responsive={responsive}
          infinite={true}

        >
          {(filter || [])?.map((user) => (

            <User
              key={user.id}
              username={user.githubLogin}
              firstname={user.name}
              avatar={user.avatar}
            />

          ))}
        </Carousel>

      </div>
      <BottomDescription></BottomDescription>

    </>
  )
}

export default Home;
