import React from 'react'
import { useContext } from 'react/cjs/react.production.min'
import SideBar from '../../components/SideBar'
import { Context } from '../../context/Context'

import '../Settings/setting.css'

export default function Settings() {
  const { user }  = useContext(Context)
    return (
        <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update account</span>
          <span className="settings__title-delete">Delete account</span>
        </div>
        <form className="settingsForm">
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
          <input type="text" placeholder="Enter your name......." name="name" />
          <label>Email</label>
          <input type="email" placeholder="abc@gmail.com" name="email" />
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
