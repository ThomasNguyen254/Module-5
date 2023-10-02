import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import './create.css';
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Create() {
    const navigate = useNavigate();

    return (
        <Formik initialValues=
                    {{
                        id: '',
                        title: '',
                        quantity: ''
                    }}

                validationSchema={Yup.object({
                    title: Yup.string().required("Title is not empty"),
                    quantity: Yup.number().required("Quantity is not empty"),
                })}


                onSubmit={(values => {
                    const save = async (book) => {
                        try {
                            const result = await axios.post('http://localhost:8080/books', book)
                            return result.data
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    save(values);
                    toast('🦄 Add book successfully!!!!');
                    navigate('/');
                })}>

            <Form>
                <h1>Add a new Book</h1>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <div className="form-input">
                        <Field type="text" className="form-control" id="title" placeholder="Xuất bản trong souen jum"
                               name="title"/>
                        <ErrorMessage name="title" className="text-danger" component="p"/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <div className="form-input">
                        <Field type="text" className="form-control" id="quantity" placeholder="15"
                               name="quantity"/>
                        <ErrorMessage name="quantity" className="text-danger" component="p"/>
                    </div>
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-success">Add</button>
                    <NavLink to="/" className="btn btn-primary">Back</NavLink>
                </div>

            </Form>

        </Formik>
    );
}