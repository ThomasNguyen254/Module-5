import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';


const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function App() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    };

    const handleValidate = () => {
        const newErrors = {};

        if (!form.name) {
            newErrors.name = 'Required';
        }

        if (!form.email) {
            newErrors.email = 'Required';
        } else if (!REGEX.email.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!form.phone) {
            newErrors.phone = 'Required';
        }

        setErrors(newErrors);
    };

    const handleSubmit = () => {
        handleValidate();

        if (Object.keys(errors).length === 0) {
            alert('Add contact successfully!!!');
        }
    };

    return (
        <div className="App">
            <h1>Contact Form</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={form.name || ''}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={form.email || ''}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        value={form.phone || ''}
                    />
                    {errors.phone && <div className="error">{errors.phone}</div>}
                </div>

                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default App;