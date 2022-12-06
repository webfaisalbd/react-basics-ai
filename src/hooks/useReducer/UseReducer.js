import React, { useReducer, useState } from 'react'

const booksData = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "Php" },
    { id: 3, name: "Python" }
]

const reducer = (state, action) => {
    // action.type     action.payload 
    if(action.type === "ADD"){
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "Book is added"
        }
    }
    if(action.type === "REMOVE"){
        
    }
    return state;
}

function UseReducer() {

    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ''
    })

 

    const [bookName, setBookName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = { id: new Date().getTime().toString(), name: bookName };

        dispatch({type: "ADD", payload: newBook})


    }

    const Modal = ({ modalText }) => {
        return <p>{modalText}</p>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={(e) => setBookName(e.target.value)} value={bookName} />
                <button>Add Book</button>
            </form>

            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

            {
                bookState.books.map((book) => {
                    const { id, name } = book;
                    return <li key={id}>{name}</li>
                })
            }
        </>
    )
}

export default UseReducer