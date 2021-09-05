import React from 'react'

import '../Post/post.css'

export default function Post() {
    return (
        <div className="post">
            <div className="post__image-info">
                <div className="post__carts">
                    <span className="post__cart">Life</span>
                    <span className="post__cart">Music</span>
                </div>
                <span className="post__title">
                THU ÂM LỜI NÓI (VOICEOVER) CHO VLOG LIỆU CÓ DỄ?
                </span>
                <hr />
                <span className="post__Date">1 hours ago</span>
                <img className="post__image"  src="https://thehanoichamomile.files.wordpress.com/2021/08/img_9461.jpg?w=1024" alt="" />
            </div>
        </div>
    )
}
