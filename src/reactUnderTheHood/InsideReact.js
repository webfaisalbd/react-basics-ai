import React from 'react';

function Todo1(){
    return (
        <div>
            <p>First Paragraph</p>
            <p>Second Paragraph</p>
            <div>
                <p>Inside div1</p>
                <p>Inside div2</p>
            </div>
        </div>
    )
}

function Todo2() {
    return React.createElement("div",{}, 
    React.createElement("p", {}, "One Paragraph"),
    React.createElement("p", {}, "Two Paragraph"),
    React.createElement("div",{}, 
    React.createElement("p", {}, "Inside div1"),
    React.createElement("p", {}, "Inside div2"))
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