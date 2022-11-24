import React from 'react';

const users = [
    {
        name: 'Faisal Ahmed',
        age: 26,
        phone: ["01685477114", "01512345678"]
    },
    {
        name: 'Abdul Matin',
        age: 27,
        phone: ["01785477114", "01312345678"]
    },
    {
        name: 'Mehedi Hasan',
        age: 25,
        phone: ["01687654321", "01587654321"]
    }
]


function Nested() {

    return <>
        {
            users.map((user, index) => <div key={index} style={{ background: "lightblue" }}>
                <h2>{user.name}</h2>
                <h3>{user.age}</h3>
                {
                    user.phone.map((phn, index) => (
                          <div key={index}>
                            <h4>{phn}</h4>
                        </div>
                    ))
                }
            </div>)
        }
    </>
}
export default Nested;