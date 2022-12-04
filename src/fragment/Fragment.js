// import React, {Fragment} from 'react'
import React from 'react'

// notun kono element create korte na caile, fragment use kora jete pare

const FragmentExample = () => {
    return (
        <div>
            <div id='withoutFragment'>
                <div>
                    <h2>I am h2</h2>
                    <p>I am paragraph.</p>
                </div>
            </div>
            <div className='withFragment'>
                <React.Fragment>
                    <h2>I am h2</h2>
                    <p>I am paragraph.</p>
                </React.Fragment>
            </div>
        </div>
    )
}

export default FragmentExample