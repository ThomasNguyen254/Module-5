import React, {useEffect, useState} from "react";
import axios from "axios";
import './list.css';
import {NavLink, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as bookService from "../service/bookService"

function List() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bookService.findAll();
            setBooks(result);
        }
        fetchApi();
    },[books])

   const deleteBook = async (id) => {
        const result = await bookService.del(id)
       navigate("/");
   }

    return (
        <div>
            <h1>Library</h1>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <table className='table'>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <NavLink to={`/update/${book.id}`} className="btn btn-primary">Edit</NavLink>
                                <button onClick={fn => deleteBook(book.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default List;