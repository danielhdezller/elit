import React, { useState, useEffect } from 'react';
import User from '../User/User'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <section className='d-flex justify-content-center align-items-center flex-column m-5 '>
        <small className='font-weight-bold text-light text-center'>Join our community</small>
        <h3
          style={{ lineHeight: '51px' }}
          className='text-danger text-center display-4'>
          connect <br />
            .collaborate()
            </h3>
        <h4 className='text-light text-center '>
          Our mission is to connect developers across the globe.
          </h4>
      </section>

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
      <div className="alert alert-danger m-5 text-center" role="alert">
        <h4
          style={{ fontFamily: 'Rubik Mono One, sans-serif' }}
        >
          ELIT
          </h4>
        <p>
          Was created to provide a platform for developers to connect.
          Here you can find people to collaborate on your project or join
          others to help them.
           {/* to develop something amazing. Just want to set
          up a party or join one? We have that covered too! */}
        </p>
      </div>

    </>
  )
}

export default Home;
