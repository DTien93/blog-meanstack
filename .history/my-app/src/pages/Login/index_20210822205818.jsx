import React from 'react'

import '../Login/login.css'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Login() {
    return (
        <BrowserRouter>
        <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h2>Đăng nhập</h2>
				<div class="social-container">
					<Link href="#" class="social"><i class="fab fa-facebook"></i></Link>
					<Link href="#" class="social"><i class="fab fa-google"></i></Link>
				</div>
				<input type="email" placeholder="Tên tài khoản" />
				<input type="password" placeholder="Mật khẩu" />
				<Link href="#">Đăng ký nếu chưa có tài khoản ?</Link>
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
            </BrowserRouter>
    )
}
