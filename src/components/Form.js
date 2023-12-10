import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive('Age must be positive'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

export default function Forms({ data, setData }) {
  const [emailError, setEmailError] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    let emails = data.map(item => item.email);
    if (emails.includes(values.email)) {
      setEmailError(true);
    }
    else {
      setData((prev) => [...prev, values])
      setEmailError(false);
      resetForm()
    }

  };

  return (
    <Formik
      initialValues={{ name: '', age: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <Field name="age" type="number" className="form-control" />
          <ErrorMessage name="age" component="div" className="text-danger" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="text-danger" />
          {emailError && <p style={{ color: "red" }}>*Email already exists</p>}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
}