import React from 'react'

import '../Write/write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="write__form">
                <div className="write__formGroup">
                    <input type="file" id="file__input"/>
                </div>
           </form>
        </div>
    )
}
