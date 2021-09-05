import React, { useState } from 'react'

import '../Register/register.css'

import { BrowserRouter, Link } from 'react-router-dom'

import axios  from 'axios'

export default function Register() {
	const [username, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/auth/register", {
				username,
				email,
				password,
			})
			res.data && window.location.replace("/login")
		} catch (err) {
			setError(true)
		}
	}
    return (
        <BrowserRouter>
        <div className="container" id="container">
		<div className="form-container log-in-container">
			<form onSubmit={handleSubmit}>
				<h2>Đăng ký</h2>
				<div className="social-container">
					<Link href="#" className="social"><i className="fab fa-facebook"></i></Link>
					<Link href="#" className="social"><i className="fab fa-google"></i></Link>
                        </div>
						<input
							type="text"
							placeholder="Tên người dùng"
							onChange={e => setUserName(e.target.value)}
						/>
						<input
							type="email"
							placeholder="Email"
							onChange={e => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Mật khẩu"
							onChange={e => setPassword(e.target.value)}
						/>
				<button type="submit">Đăng ký</button>
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
            </BrowserRouter>
    )
}
