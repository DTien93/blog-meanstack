import axios from 'axios'
import React, { useContext, useState }from 'react'
import { Context } from '../../context/Context'

import '../Write/write.css'

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = ((e) => {
        e.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
             axios.post("/upload", data)
                } catch (err) {   
            }
    }
        axios.post("/posts", newPost)
    })
    return (
        <div className="write">
            <img
                className="write__img"
                src="https://thehanoichamomile.files.wordpress.com/2021/06/thumb-400.jpg?w=1024"
                alt="" />
            <form className="write__form" onSubmit = {handleSubmit}>
                <div className="write__formGroup">
                    <label htmlFor="file__input">
                          <i class="write__icon fas fa-file-upload"></i>
                    </label>
                    <input type="file" id="file__input" style={{display: 'none'}}/>
                    <input type="text" placeholder="Tiêu đề bài viết" className="write__input" autoFocus={ true}/>
                </div>
                <div className="write__formGroup">
                    <textarea
                        placeholder="Nhập nội dụng bạn muốn viết...."
                        id=""
                        type="text"
                        className="write__input write__text"
                    >
                    </textarea>
                </div>
                <button className="write__submit" type="submit">
                    Đăng
                </button>
           </form>
        </div>
    )
}
