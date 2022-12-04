import React from 'react'

const Fragment = () => {
    return (
        <div>
            <div id='withoutFragment'>
                <div>
                    <h2>I am h2</h2>
                    <p>I am paragraph</p>
                </div>
            </div>
            <div className='withFragment'>
                <>
                    <h2>I am h2</h2>
                    <p>I am paragraph</p>
                </>
            </div>
        </div>
    )
}

export default Fragment