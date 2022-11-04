import React, {useState} from "react"
import "../assets/Styles/index.css"

function EditProfile() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className="edit">
            <div className="edit-card">
                <h2>Edit Profile</h2>
                <div className="card-details">
                    <div className="avatar-div">


                        <img src={file} />
                        {/* <div className="avatar-buttons"> */}
                        <input type="file" onChange={handleChange} placeholder="Upload" className="avatar-btn"/>
                        
                        

                        {/* </div> */}
                       

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
                            <input type="password" name="" required="" />
                            <label>Reset password</label>
                        </div>
                        <div class="user-box">
                            <input type="password" name="" required="" />
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