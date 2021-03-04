import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/css/authentication.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const firebaseConfig = {
	apiKey: "AIzaSyDMjdPGj_MMlEa0Ub4mYe6gtm2m-dLAZw8",
	authDomain: "dscbooks-3a4c3.firebaseapp.com",
	databaseURL: "https://dscbooks-3a4c3.firebaseio.com",
	projectId: "dscbooks-3a4c3",
	storageBucket: "dscbooks-3a4c3.appspot.com",
	messagingSenderId: "401879675162",
	appId: "1:401879675162:web:0227715ffaee7fc0af7ca3"
}

import firebase from "firebase/app"
import "firebase/auth"
const db = firebase.initializeApp(firebaseConfig)

export default function authentication() {

	const change_to_signup_btn = useRef(null)
	const change_to_signin_btn = useRef(null)
	const main_container = useRef(null)

	const change_to_signup = () => {
		main_container.current.classList.add(styles.signup_mode)
	}

	const change_to_signin = () => {
		main_container.current.classList.remove(styles.signup_mode)
	}

	const googleSignIn = () => {
		console.log("google signup");
		var provider = new firebase.auth.GoogleAuthProvider();
		console.log("Provider done");
		db.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {db.auth.OAuthCredential} */
				console.log("Auth done");
				var credential = result.credential
				var token = credential.accessToken;
				var user = result.user;

				console.log(user);
			}).catch((error) => {

				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;

			});
	}


	return (
		<>
			<Head>
			</Head>
			<div className={styles.body}>
				<div className={styles.main_container} ref={main_container}>
					<div className={styles.form_container}>
						<div className={styles.signin_signup}>
							<form action="" method="POST" className={styles.form + " " + styles.signin_form}>
								<h2 className={styles.title}>Sign In</h2>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faUser}></FontAwesomeIcon>
									</div>
									<input type="text" name="signin_username" className={styles.input} placeholder="Username" />
								</div>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLock}></FontAwesomeIcon>
									</div>
									<input type="text" name="signin_password" className={styles.input} placeholder="Password" />
								</div>
								<button type="submit" className={styles.btn + " " + styles.solid}>Sign In</button>
								<p className={styles.social_text}>Or sign in with</p>
							</form>
							<div className={styles.social_media}>
								<a href="" className={styles.social_icon}>
									<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faFacebook}></FontAwesomeIcon>
								</a>
								<button onClick={googleSignIn} className={styles.social_icon}>
									<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faGoogle}></FontAwesomeIcon>
								</button>

								<a href="" className={styles.social_icon}>
									<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faTwitter}></FontAwesomeIcon>
								</a>
								<a href="" className={styles.social_icon}>
									<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLinkedin}></FontAwesomeIcon>
								</a>
							</div>


							<form action="" method="POST" className={styles.form + " " + styles.signup_form}>
								<h2 className={styles.title}>Sign Up</h2>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faUser}></FontAwesomeIcon>
									</div>
									<input type="text" name="signup_username" className={styles.input} placeholder="Username" />
								</div>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faEnvelope}></FontAwesomeIcon>
									</div>
									<input type="email" name="signup_email" className={styles.input} placeholder="Email" />
								</div>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLock}></FontAwesomeIcon>
									</div>
									<input type="text" name="signup_password1" className={styles.input} placeholder="Password" />
								</div>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLock}></FontAwesomeIcon>
									</div>
									<input type="text" name="signup_password2" className={styles.input} placeholder="Confirm Password" />
								</div>
								<button type="submit" className={styles.btn + " " + styles.solid}>Sign In</button>
								<p className={styles.social_text}>Or sign up with</p>
								<div className={styles.social_media}>
									<a href="" className={styles.social_icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faFacebook}></FontAwesomeIcon>
									</a>
									<button onClick={() => { console.log("Fucking clicked") }} >
										Google
                                    </button>
									<a href="" className={styles.social_icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faTwitter}></FontAwesomeIcon>
									</a>
									<a href="" className={styles.social_icon}>
										<FontAwesomeIcon className={styles.FontAwesomeIcon} icon={faLinkedin}></FontAwesomeIcon>
									</a>
								</div>
							</form>
						</div>
					</div>
					<div className={styles.panel_container}>
						<div className={styles.panel + " " + styles.left_panel}>
							<div className={styles.content}>
								<h3>New Here ?</h3>
								<p>Join Now to become a member of our community and contribute towards a change.</p>
								<button onClick={change_to_signup} className={styles.btn + " " + styles.transparent} id="signup_btn" ref={change_to_signup_btn}>Sign Up</button>
							</div>
							<img src="/images/image1.svg" alt="" className={styles.image} />
						</div>

						<div className={styles.panel + " " + styles.right_panel}>
							<div className={styles.content}>
								<h3>One of us ?</h3>
								<p>What are you waiting for? Take a look.</p>
								<button onClick={change_to_signin} className={styles.btn + " " + styles.transparent} id="signin_btn" ref={change_to_signin_btn}>Sign In</button>
							</div>
							<img src="/images/image2.svg" alt="" className={styles.image} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}