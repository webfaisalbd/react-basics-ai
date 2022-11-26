import React, { useEffect, useState } from "react";

function Style(){
    const [name, setName] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(()=> {
        if(name.length < 2){
            setValidInput(false)
        }
        else {
            setValidInput(true)
        } 
    },[name])

    const handleChange = (e) => {
        setName(e.target.value);
    } 
    return (
        <>
            {/* <input type="text" value={name} onChange={handleChange} 
            style={{ background :  validInput ? "green" : "red"}} /> */}
            <input type="text" value={name} onChange={handleChange} 
            className={`${validInput ? "valid" : "invalid"}`} />
        </>
    )
    
}
export default Style;