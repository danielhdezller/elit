import React from 'react'
import User from '../User/User'
import { motion } from 'framer-motion'

const Community = ({ users }) => {

  const [input, setInput] = React.useState('')

  const searchCommunity =
    users?.filter(user => input ? user.name.includes(input) : user)
      .map(user =>
        (
          <motion.div whileHover={{ opacity: 1 }} key={user.id} className='col-6 col-lg-3'>
            <User
              key={user.id}
              username={user.githubLogin}
              firstname={user.name}
              avatar={user.avatar}
            />
          </motion.div>
        )
      )

  return (
    <>
      <div className='row justify-content-center my-5'>
        <div className="input-group input-group-lg col-lg-5">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Type here..."
          />
          <div className="input-group-append">
            <span className="input-group-text bg-danger text-light">Search users</span>
          </div>
        </div>
      </div>

      <motion.div layout className='row'>
        {searchCommunity}
      </motion.div>
    </>
  )
}

export default Community
