import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { signupSchema } from "../schemas/login";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialValues = {
  username: "",
  password: "",
};

const Login = ({
  handleLoginClose,
  showLogin,
  handleShow,
  setUser,
  handleLogout,
}) => {
  const navigate = useNavigate();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        actions.resetForm();
        handleLoginClose();

        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });

        toast.success("login Successful");
        handleLogout();
        navigate("/dashboard");
      },
    });

  return (
    <>
      <Modal
        size="lg"
        show={showLogin}
        onHide={handleLoginClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmit} className="m-4">
          <Modal.Header closeButton>
            {/* <Modal.Title className="abril">Welcome Back! 👋</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div className="login__Title my-3">
              <h2>Welcome Back! 👋</h2>
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
          </Modal.Body>
          <Modal.Footer className="submit__btn">
            <Button type="submit">Login</Button>
            <div className="d-flex align-items-center justify-content-center m-auto mt-3">
              <span className="me-3">No account ?</span>
              <span onClick={handleLoginClose}>
                <Link className="registerLogin" onClick={handleShow}>
                  Register Here
                </Link>
              </span>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
