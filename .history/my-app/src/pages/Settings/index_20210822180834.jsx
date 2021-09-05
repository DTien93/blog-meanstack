import React from 'react'
import SideBar from '../../components/SideBar'

import '../Settings/setting.css'

export default function Settings() {
    return (
        <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update Your Account</span>
          <span className="settings__title-delete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
         
        </form>
            </div>
            <SideBar/>
    </div>
    )
}
