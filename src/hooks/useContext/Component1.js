import React from 'react'
import { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext';


const Component1 = () => {
    const [name, setName] = useState("Faisal");
    const [user, setUser] = useState({id: 1, dept: "CSE"});
    return (
        <>

            <UserContext.Provider value={{user, name}}>

                <Component2 />

            </UserContext.Provider>

        </>
    )
}

export default Component1