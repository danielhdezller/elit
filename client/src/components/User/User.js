import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ username, firstname, avatar }) => {

  return (
    <div>
      <div className="card" >
        <Link to={`/members/${username}`}>
          <img src={avatar} className="card-img-top" alt="user img" />
          <div className="card-body h-100 border-0 bg-dark">
            <h5
              className="
              card-title 
              font-weight-bold 
              primary
              ">
              {firstname}
            </h5>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default User
