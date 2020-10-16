import React, { useState, useEffect } from 'react'
// import Filtering from '../Filtering/Filtering'
import User from '../User/User'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    items: 1
  }
};

const Home = ({ users }) => {

  const [filter, setFilter] = useState(users)

  useEffect(() => {
    setFilter(users)
  }, [users])

  return (
    <>
      {/* <Filtering setFilter={setFilter} /> */}
      <div className="card text-center mt-5">
        <div className="card-body">
          <h5 className="card-title display-4">connect.collaborate.create()</h5>
        </div>
      </div>
      <div>

        <Carousel ssr={false} responsive={responsive} infinite={true}>
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
    </>
  )
}

export default Home
