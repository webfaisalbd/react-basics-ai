import React, { useState } from 'react'

const Faq = ({ id, title, desc }) => {
    // const { id, title, desc } = props.faq;

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <article style={{ border: "2px solid goldenrod", margin: "5px auto", padding: "5px", width: "500px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4>{title}</h4>
                    <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
                </div>
                {toggle && <p style={{background: "orange", padding: '15px'}}>{desc}</p>}
            </article>
        </>
    )
}

export default Faq