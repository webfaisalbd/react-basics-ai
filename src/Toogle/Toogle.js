import React, { useState } from 'react'

const Toogle = () => {
    const [toggle, setToggle] = useState(true);
    console.log(toggle);
    return (
        <div style={{ margin: "1rem", padding: "1rem", backgroundColor: "pink" }}>
            {
                toggle && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ea, voluptate omnis veniam laudantium alias sapiente excepturi numquam beatae adipisci harum quo consequatur ut eveniet nisi amet. Reprehenderit, in! Ratione.</p>
            }

            <div style={{ textAlign: "center" }}>
                <button onClick={() => { setToggle(!toggle) }}> {toggle ? "Hide" : "Show"} </button>
            </div>
        </div>
    )
}

export default Toogle