import React, {useContext} from 'react'

import { UserContext } from './UserContext'

const Component3 = () => {
    const {user, name} = useContext(UserContext);
    // console.log(data)
  return (
    <div>
        <h1>Hello</h1>
        <h2>{name}</h2>
        <h5>{user.id}</h5>
        <h5>{user.dept}</h5>
    </div>
  )
}

export default Component3