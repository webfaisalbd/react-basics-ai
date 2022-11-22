import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
  {
    id: uuidv4(),
    taskName: "electricity bill",
    cost: "1200"
  },
  {
    id: uuidv4(),
    taskName: "water bill",
    cost: "200"
  },
  {
    id: uuidv4(),
    taskName: "gas bill",
    cost: "1100"
  },
  {
    id: uuidv4(),
    taskName: "ac bill",
    cost: "400"
  }
];
// console.log(todos);

const Lists = () => {
  return (
    <div>
      {
        todos.map((todo) => {
          const { taskName, cost, id } = todo;

          return <div key={id}>
            <h2>{taskName}</h2>
            <h5>{cost}</h5>
          </div>

        })
      }
    </div>
  )
}

export default Lists