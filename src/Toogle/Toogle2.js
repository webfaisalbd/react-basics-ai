import React, { useState } from 'react'

const Toogle2 = () => {
    const [toggle,setToggle] = useState(true);
  return (
    <>
        <div style={{margin: "1rem", padding: "1rem", background: "pink"}}>
            {
                toggle && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut cumque autem iure nulla? Quod accusamus magni perferendis sequi blanditiis alias, nesciunt quidem numquam, cumque, nam libero veritatis ab temporibus earum?</p>
            }
            <div>
                <button onClick={()=> {setToggle(!toggle)}}> {toggle ? "Hide" : "Show"} </button>
                
                {/* <button onClick={()=> {setToggle(false)}}>Hide</button> */}
            </div>
        </div>
    </>
  )
}

export default Toogle2