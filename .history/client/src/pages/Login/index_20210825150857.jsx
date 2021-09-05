import React from 'react'

import '../Login/login.css'
import { Link } from 'react-router-dom'

export default function Login() {

	const 	handleSubmit(() => {

	})
    return (
        <div className="container" id="container">
		<div className="form-container log-in-container">
				<form action="#" onSubmit={handleSubmit}>
					<h3 style={{marginLeft: '20px'}}>Giao Diện Đăng Nhập</h3>
				<div className="social-container">
					<Link href="#" className="social"><i className="fab fa-facebook"></i></Link>
					<Link href="#" className="social"><i className="fab fa-google"></i></Link>
				</div>
				<input type="email" placeholder="Tài khoản" />
				<input type="password" placeholder="Mật khẩu" />
				<Link path to="/register">Đăng ký nếu chưa có tài khoản ?</Link>
				<button className="btn-login" type="submit">Đăng nhập</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<h1>Blog của KiRa</h1>
					<p>Chào mừng đến với Blog của Kira</p>
				</div>
			</div>
		</div>
            </div>
       
    )
}
