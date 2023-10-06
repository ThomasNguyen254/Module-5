import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import './create.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import * as bookService from "../service/bookService"

export function Create() {
    const navigate = useNavigate();

    return (
        <>
            <Formik initialValues={{
                id: "",
                tittle: "",
                quantity: ""
            }} onSubmit={(values) => {
                const create = async () => {
                    await bookService.save(values)
                    navigate("/")
                }
                create();
            }
            }>
                <div className='container'>
                    <h1>Add a new Book</h1>
                    <Form>
                        <table className='table'>
                            <tr>
                                <td>ID</td>
                                <Field type='text' name='id'></Field>
                            </tr>
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
        </>
    )
}