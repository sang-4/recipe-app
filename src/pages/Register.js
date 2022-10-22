import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = ({ handleClose, show }) => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        handleClose();
        console.log(values);
      },
    });

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6">
                <input
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="First Name:"
                />
                <div className="error_container">
                  {errors.firstname && touched.firstname && (
                    <p className="form_error">{errors.firstname}</p>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Last Name:"
                />
                <div className="error_container">
                  {errors.lastname && touched.lastname && (
                    <p className="form_error">{errors.lastname}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <input
                type="text"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Email:"
              />
              <div className="error_container">
                {errors.email && touched.email && (
                  <p className="form_error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="row">
              <input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Password:"
              />
              <div className="error_container">
                {errors.password && touched.password && (
                  <p className="form_error">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="row">
              <input
                type="password"
                name="cpassword"
                value={values.cpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Confirm Password:"
              />
              <div className="error_container">
                {errors.cpassword && touched.cpassword && (
                  <p className="form_error">{errors.cpassword}</p>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
