import React from "react"
import "../assets/Styles/index.css"

function EditProfile() {
    return (
        <div className="edit">
            <div className="edit-card">
                <h2>Edit Profile</h2>
                <div className="card-details">
                    <div className="avatar-div">
                        
                        
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/768px-User-avatar.svg.png" />
                            <button className="avatar-btn">Upload</button>
                            <button className="avatar-btn">Remove</button>
                        

                    </div>
                    <form>
                        <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Email address</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="" required="" />
                            <label>Reset password</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="" required="" />
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
                            <button className="editing-btn">
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default EditProfile