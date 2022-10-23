import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/register";
import { Link } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

const Register = ({ handleClose, show, handleLoginShow }) => {
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
        <Form onSubmit={handleSubmit} className="m-3">
          <Modal.Header closeButton>
            <Modal.Title className="abril">Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="margin__end">
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
                name="username"
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Username:"
              />
              <div className="error_container">
                {errors.username && touched.username && (
                  <p className="form_error">{errors.username}</p>
                )}
              </div>
            </div>
            <div className="row">
              <input
                type="email"
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
            <div className="row">
              <div className="col-lg-1">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  required
                ></input>
              </div>
              <p className="col-lg-11">
                By checking the box, you agree to our Terms and Privacy
                Policy.You may receive SMS notifications from us and can opt out
                at any time.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="submit__btn">
            <Button type="submit">Create an account</Button>
            <div className="d-flex align-items-center justify-content-center m-auto mt-3">
              <span className="me-3">Already have an account ?</span>
              <span onClick={handleClose}>
                <Link className="registerLogin" onClick={handleLoginShow}>
                  Log In
                </Link>
              </span>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Register;
