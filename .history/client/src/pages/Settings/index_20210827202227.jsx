import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.production.min'
import SideBar from '../../components/SideBar'
import { Context } from '../../context/Context'
import axios from 'axios'

import '../Settings/setting.css'

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
    return (
        <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update account</span>
          <span className="settings__title-delete">Delete account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Picture</label>
          <div className="settingsPP">
            <img
              src={user.profilePic}
              alt=""
                        />
            <hr/>
            <label htmlFor="fileInput">
                <i class="far fa-images">Click upload image</i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name"  onChange={e => setUsername(e.target.value)} />
          <label>Email</label>
            <input type="email" placeholder={ user.email }name="email" />
          <label>Password</label>
          <input type="password" placeholder="*******" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
            </div>
            <SideBar/>
    </div>
    )
}
