import React from 'react';

function Todo1(){
    return (
        <div>
            <p>First Paragraph</p>
            <p>Second Paragraph</p>
        </div>
    )
}

function Todo2() {
    return React.createElement("div",{}, 
    React.createElement("p", {}, "One Paragraph"),
    React.createElement("p", {}, "Two Paragraph")
    );
}

function InsideReact(){
    return (
        <>
            <Todo1 />
            <Todo2 />
        </>
    )
}
export default InsideReact;