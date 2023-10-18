
import {ErrorMessage, Field, Form, Formik} from "formik";
import {NavLink, useNavigate} from "react-router-dom"
import * as Yup from "yup";
import * as bookService from "../service/BookService"
import {toast} from "react-toastify";

export function Create() {
    let navigate = useNavigate();
    const initialValues = {
        title: '',
        quantity: ''
    }
    const validationSchema = Yup.object().shape({
        title : Yup.string().required('title is required '),
        quantity : Yup.number().required('quantity is required ').min(1,'Quantity must be at least 1')
    });

    const Submit = async (values) => {
        await bookService.save(values)
        console.log(values)
        navigate('/')
        toast('Created')
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={Submit}
            >
                <div>
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field name='title' type="text" className="form-control" id="title"
                                   placeholder="title"/>
                            <ErrorMessage name='title' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Quantity</label>
                            <Field name='quantity' type="text" className="form-control" id="quantity"
                                   placeholder="Quantity"/>
                            <ErrorMessage name='quantity' className='text-danger'></ErrorMessage>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <NavLink to='/' className='btn btn-info'>Back</NavLink>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    )
}