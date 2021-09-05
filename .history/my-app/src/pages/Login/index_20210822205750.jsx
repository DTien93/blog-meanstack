import React from 'react'

import '../Login/login.css'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Login() {
    return (
        <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h2>Đăng nhập</h2>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook"></i></a>
					<a href="#" class="social"><i class="fab fa-google"></i></a>
				</div>
				<input type="email" placeholder="Tên tài khoản" />
				<input type="password" placeholder="Mật khẩu" />
				<a href="#">Đăng ký nếu chưa có tài khoản ?</a>
				<button>Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>Blog của KiRa</h1>
					<p>Chào mừng đến với Blog của Kira</p>
				</div>
			</div>
		</div>
	</div>
    )
}
