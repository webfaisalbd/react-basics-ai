import React, { useState } from 'react'

const booksData = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "Php" },
    { id: 3, name: "Python" }
]

function UseReducer() {

    const [books, setBooks] = useState(booksData);
    const [bookName, setBookName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        setBooks([...books, newBook]);
        // for reset input field 
        setBookName('');

        setIsModalOpen(true);
        setModalText("book is added.")
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

            {isModalOpen && <Modal modalText={modalText} />}

            {
                books.map((book) => {
                    const { id, name } = book;
                    return <li key={id}>{name}</li>
                })
            }
        </>
    )
}

export default UseReducer