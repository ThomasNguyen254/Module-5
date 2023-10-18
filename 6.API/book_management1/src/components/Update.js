import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom"
import * as bookService from "../service/BookService"
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

export function Update() {
    let navigate = useNavigate()
    const {id} = useParams();
    const [UpdateBook, setUpdateBook] = useState({
        id : '',
        title : '',
        quantity : '',
    })

    const findById = async () => {
        const result = await bookService.findById(id)
        setUpdateBook(result);
    }
    useEffect(() => {
        findById()
    },);
    return UpdateBook.title !== '' ?(
        <>
            <>
                <Formik
                    initialValues={{
                        title : UpdateBook.title,
                        quantity : UpdateBook.quantity
                    }}
                    onSubmit={(values) =>{
                        const update = async () =>{
                            await bookService.update(id,values);
                        }
                        update()
                        console.log(values)
                        toast("Update")
                        navigate('/')
                    }}

                >
                    <div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field name='title' type="text" className="form-control" id="title"
                                       placeholder="title"  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <Field name='quantity' type="text" className="form-control" id="quantity"
                                       placeholder="Quantity" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </>
        </>
    ) : ''
}