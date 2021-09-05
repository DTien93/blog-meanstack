import React from 'react'
import SideBar from '../../components/SideBar'

import '../Settings/setting.css'

export default function Settings() {
    return (
        <div className='setting'>
            <div className='setting__wrapper'>
                <span className='settings__title-update'>Update account</span>
                <span className='settings__title-update'>Delete account</span>
            <form className='settings__form'>
                <label>Setting Account</label>
                <div className='settings__account'>
                    <img src="https://thehanoichamomile.files.wordpress.com/2021/06/dscf6894.jpg?w=1024" alt=""/>
                </div>
                <label htmlFor='file__input'>
                    <i className='settings__account-icon far fa-user-circle'></i>{" "}
                </label>
                <input
                    id='file__input'
                    type='file'
                    style={{ display: 'none' }}
                    className='settings__input'
                >    
                </input>
            </form>
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
            <SideBar/>
        </div>
    )
}
