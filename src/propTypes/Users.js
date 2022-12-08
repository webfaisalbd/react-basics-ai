import React from 'react'
import { useState } from 'react'
import User from './User'

const Users = () => {
    const [user, setUser] = useState({
      id: 101,
      name: "Shajib"
    })
  return (
    <>
        <User user={user}  />
    </>
  )
}

export default Users