import React from 'react'

import '../SinglePost/singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost__Wrapper">
                 <h1 className="singlePost__title">NHẬT KÝ MỘT TUẦN LÀM CONTENT</h1>
            </div>
            <img className="singlePost__images" src="https://thehanoichamomile.files.wordpress.com/2021/08/img_9461.jpg?w=1024" alt="" />
            <div className="singlePost__edit">
                <i className="fas fa-edit"></i>
                <i className="fas fa-trash"></i>
            </div>
        </div>
    )
}
