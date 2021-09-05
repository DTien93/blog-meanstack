import React from 'react'

import '../Write/write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="write__form">
                <div className="write__formGroup">
                    <label htmlFor="file__input">
                          <i class="fas fa-plus"></i>
                    </label>
                    <input type="file" id="file__input" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={ true}/>
                </div>
                <div className="writeGroup">
                    
                </div>
           </form>
        </div>
    )
}
