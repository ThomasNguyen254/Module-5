import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from "react-router";
import * as bookService from "../service/bookService"

export function Update() {
    const navigate = useNavigate();
    const {id} = useParams;

    const [book, setBook] = useState({
        id: '',
        title: '',
        quantity: '',
    })
    return (
        <Formik initialValues={{
            id: book.id,
            title: book.title,
            quantity: book.quantity
        }}
                onSubmit={(values) => {
                    const update = async (book) => {
                        const result = await bookService.update(id, book);
                        navigate("/")
                    }
                    update(values);
                }
                }>
            <div className='container'>
                <h1>Update Book</h1>
                <Form>
                    <table className='table'>
                        <tr>
                            <td>Title</td>
                            <Field type='text' name='title'></Field>
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            <Field type='text' name='quantity'></Field>
                        </tr>
                    </table>
                    <button type='submit' className='btn btn-primary'>Add</button>
                </Form>
            </div>

        </Formik>
    )

}