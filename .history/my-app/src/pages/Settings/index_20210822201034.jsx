import React from 'react'
import SideBar from '../../components/SideBar'

import '../Settings/setting.css'

export default function Settings() {
    return (
        <div className="settings">
      <div className="settings__wrapper">
        <div className="settings__title">
          <span className="settings__title-update">Update account</span>
          <span className="settings__title-delete">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>Image</label>
          <div className="settingsPP">
            <img
              src="https://thehanoichamomile.files.wordpress.com/2021/06/dscf6894.jpg?w=1024"
              alt=""
            />
            <label htmlFor="fileInput">
                
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
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
            </div>
            <SideBar/>
    </div>
    )
}
