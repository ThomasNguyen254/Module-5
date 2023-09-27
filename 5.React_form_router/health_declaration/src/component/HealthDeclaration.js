import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SEX_LIST = [{ label: 'Nam', value: 'male' }, { label: 'Nữ', value: 'female' }];

function App() {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setForm({
            ...form,
            [name]: newValue,
        });
    };

    const handleValidate = (values) => {
        const errors = {};

        if (!values.fullName) {
            errors.fullName = 'Required';
        }

        if (!values.idNumber) {
            errors.idNumber = 'Required';
        }

        if (!values.birthYear || values.birthYear < 1900) {
            errors.birthYear = 'Year must be greater than 1900';
        }

        if (!values.nationality) {
            errors.nationality = 'Required';
        }

        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        alert('Khai báo thành công!');
        resetForm();
    };

    return (
        <div>
            <h1>Khai báo thông tin y tế</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="fullName">Họ và tên</label>
                            <Field
                                type="text"
                                id="fullName"
                                name="fullName"
                                onChange={handleChange}
                            />
                            <ErrorMessage name="fullName" component="div" className="error" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default App;