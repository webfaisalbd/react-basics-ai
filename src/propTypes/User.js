import React from 'react'
import PropTypes from 'prop-types'
import Users from './Users'

const User = (props) => {
    return (
        <div>
            <h3>{props.userId}</h3>
            <h2>{props.userName}</h2>
        </div>
    )
}

User.propTypes = {
    userName: PropTypes.string,
    userId: PropTypes.number
}

User.defaultProps = {
    userName: "Default Name",
    userId: 0
}

export default User