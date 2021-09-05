import React from 'react'

import '../Login/login.css'

export default function Login() {
    return (
        <div class="container" id="container">
		<div class="form-container log-in-container">
			<form action="#">
				<h1>Login</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook"></i></a>
					<a href="#" class="social"><i class="fab fa-google"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button>Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>Blog của KiRa</h1>
					<p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
				</div>
			</div>
		</div>
	</div>
    )
}
