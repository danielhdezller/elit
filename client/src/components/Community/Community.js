import React from 'react'
import User from '../User/User'

const Community = ({ users }) => {

  const [input, setInput] = React.useState('')

  const searchCommunity = 
  users?.filter(user => input ? user.name.includes(input) : user)
    .map(user =>
      (
        <div key={user.id} className='col-lg-3'>
          <User
            key={user.id}
            username={user.githubLogin}
            firstname={user.name}
            avatar={user.avatar}
          />
        </div>
      )
    )

  return (
    <>
      <div className='row justify-content-center my-5'>
        <div className="input-group input-group-lg col-lg-5">
          <div className="input-group-prepend">
            <span className="input-group-text bg-success text-light">
              Search users
              </span>
          </div>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
      </div>

      <div className='row'>
        {searchCommunity}
      </div>
    </>
  )
}

export default Community
