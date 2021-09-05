import React, { useContext, useRef } from 'react'

import '../Login/login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Login() {
	const userRef = useRef()
	const passwordRef = useRef()
	const {user, dispatch, isFecthing} = useContext(Context)

	const handleSubmit =  async (e) => {
		e.preventDefault()
		dispatch({ type: "LOGIN_START" })
		try {
			const res = await axios.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			dispatch({ type: "LOGIN__SUCCESS" , payload: res.data})
		} catch (err) {
			dispatch({ type: "LOGIN__FAILURE"})
		}
	}
	console.log(user)

    return (
        <div className="container" id="container">
		<div className="form-container log-in-container">
				<form action="#" onSubmit={handleSubmit}>
					<h3 style={{marginLeft: '20px'}}>Giao Diện Đăng Nhập</h3>
				<div className="social-container">
					<Link href="#" className="social"><i className="fab fa-facebook"></i></Link>
					<Link href="#" className="social"><i className="fab fa-google"></i></Link>
				</div>
					<input
						type="text"
						placeholder="Tài khoản"
						ref={userRef}
						/>
					<input
						type="password"
						placeholder="Mật khẩu"
						ref={passwordRef}
						/>
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
