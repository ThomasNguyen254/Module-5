import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as bookService from "../service/BookService"
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"

export function showList() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [bookList, setBookList] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await bookService.getAll();
            setBookList(result);
        }
        fetchAPI();
    },[bookList])

    const del = async (id) => {
        const result = await bookService.del(id);
        navigate("/");
    }

    return (
        <>
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
                    bookList.map((book) => (
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
        </>
    )
}