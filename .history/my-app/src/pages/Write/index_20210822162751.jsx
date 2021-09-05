import React from 'react'

import '../Write/write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="write__form">
                <div className="write__formGroup">
                    <label></label>
                    <input type="file" id="file__input" />
                    <input type="text" placeholder="title"/>
                </div>
           </form>
        </div>
    )
}
