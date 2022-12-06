import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../assets/Styles/index.css";
import { toast } from "react-toastify";

const initialState = {username: "", email: "", password: "", password_confirmation: ""}

function EditProfile() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [state, setState] = useState(initialState)
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          }),
        });

    toast.success("Profile Updated Successfully");

    navigate("/dashboard");
    
  }
  const {username, email, password, password_confirmation} = state

  const handleChangeProfile = (e) => {
    let { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };


  return (
    <div className="edit">
      <div className="profile__edit__container">
        <NavLink className="profile__edit__dash" to="/dashboard">
          <BsArrowLeftCircle size={30} />
        </NavLink>
      </div>
      <div className="edit-card">
        <h2>Edit Profile</h2>
        <div className="card-details">
          <div className="avatar-div">
            <img src={file} alt="" />
            {/* <div className="avatar-buttons"> */}
            <input
              type="file"
              onChange={handleChange}
              placeholder="Upload"
              className="avatar-btn"
            />

            {/* </div> */}
          </div>
          <form onSubmit={handleSubmit} >
            <div class="user-box">
              <input type="text" name="username" value={username} onChange={handleChangeProfile} required="" />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="text" name="email" value={email} onChange={handleChangeProfile} required="" />
              <label>Email address</label>
            </div>
            <div class="user-box">
              <input type="password" name="password" value={password}  onChange={handleChangeProfile}
              required="" />
              <label>Reset password</label>
            </div>
            <div class="user-box">
              <input type="password" name="password_confirmation" value={password_confirmation}  onChange={handleChangeProfile} required="" />
              <label>Confirm password</label>
            </div>

            <div className="delete">
              <div className="delete-text">
                <h5>Delete account</h5>
                <p>By deleting your account you will lose all your data</p>
              </div>
              <button className="delete-btn">Delete</button>
            </div>
            <div className="edit-btn">
              <button className="editing-btn">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
