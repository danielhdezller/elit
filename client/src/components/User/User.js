import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ username, firstname, avatar }) => {

  return (
    <div className="card" >
      <Link to={`/members/${username}`}>
        <img src={avatar} className="card-img-top" alt="user img" />
        <div className="card-body">
          <h5 className="card-title">{firstname}</h5>
        </div>
      </Link>
    </div>
  )
}

export default User
