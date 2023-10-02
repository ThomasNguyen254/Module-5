import React, {useEffect, useState} from "react";
import axios from "axios";
import './list.css';
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

function List() {
    const [books,setBooks] = useState('');

    const findAll = async () => {
        try {
            const result = await axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books')
            setBooks(result.data)
        } catch (e) {
            console.log(e);
        }
    }

    const handleDelete = (id) => {
        try {
            axios.delete('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/%7Bid%7D' + id)
            setBooks((prevState) => prevState.filter((book) => book.id != id))
            toast('Delete book successfully!!!!')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>List book</h1>
            
        </div>
    )
}