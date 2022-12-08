import React from 'react'
import PropTypes from 'prop-types'

// console.log(PropTypes);

const User = (props) => {
    console.log(props.user);
    return (
        <div>
            <h1>{props.user.id}</h1>
            <h1>{props.user.name}</h1>
        </div>
    )
}

// User.propTypes = {
//     user: PropTypes.object.isRequired,
// }

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
}


export default User