import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/css/authentication.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import firebase from "firebase/app"
import "firebase/auth"

import { firebaseApp } from '../../configurations/db';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'

export default function authentication() {

	const history = useHistory();
	const auth = useAuth()
	const router = useRouter()

	

	const change_to_signup_btn = useRef(null)
	const change_to_signin_btn = useRef(null)
	const main_container = useRef(null)

	const signup = useFormik({
		initialValues: {
			signup_username: "",
			signup_email: "",
			signup_password1: "",
			signup_password2: ""
		},
		validationSchema: Yup.object({
			signup_username: Yup.string().max(25, "Username must be less than 25 characters").min(8, "Username must be longer than 8 characters").required('Required'),
			signup_email: Yup.string().email("Not a valid email").required('Required'),
			signup_password1: Yup.string().max(25, "Password must be less than 25 characters").min(8, "Password must be longer than 8 characters").required('Required'),
			signup_password2: Yup.string().max(25, "Password must be less than 25 characters").min(8, "Password must be longer than 8 characters").oneOf([Yup.ref("signup_password1"), null], "The passwords must match").required('Required')
		}),
		onSubmit: values => {
			auth.signup(values.signup_email, values.signup_password1, values.signup_username).then(() => {
				router.push('/description/description')
			})
		}
	})

	const signin = useFormik({
		initialValues: {
			signin_email: "",
			signin_password: ""
		},
		validationSchema: Yup.object({
			signin_email: Yup.string().email("Not a valid Email").required('Required'),
			signin_password: Yup.string().max(25, "Password must be less than 25 characters").required('Required')
		}),
		onSubmit: values => {
			auth.signin(values.signin_email, values.signin_password).then(() => {
				router.push("/")
			})
		}
	})

	const change_to_signup = () => {
		main_container.current.classList.add(styles.signup_mode)
	}

	const change_to_signin = () => {
		main_container.current.classList.remove(styles.signup_mode)
	}

	const googleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider()
		firebaseApp
			.auth()
			.signInWithPopup(provider)
			.then(result => {
				/** @type {database.auth.OAuthCredential} */
				console.log('Auth done')
				var credential = result.credential
				var token = credential.accessToken
				var user = result.user

				console.log(user)
			})
			.catch(error => {
				var errorCode = error.code
				var errorMessage = error.message
				var email = error.email
				var credential = error.credential
			})
	}

	return (
		<>
			<Head></Head>
			<div className={styles.body}>
				<div className={styles.main_container} ref={main_container}>
					<div className={styles.form_container}>
						<div className={styles.signin_signup}>
							<form
								action=''
								method='POST'
								className={styles.form + ' ' + styles.signin_form}
								onSubmit={signin.handleSubmit}
							>
								<h2 className={styles.title}>Sign In</h2>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faUser}
										></FontAwesomeIcon>
									</div>
									<input
										type='text'
										name='signin_email'
										className={styles.input}
										placeholder='Email'
										onChange={signin.handleChange}
										onBlur={signin.handleBlur}
										value={signin.values.signin_email}
									/>
								</div>
								{signin.touched.signin_email && signin.errors.signin_email ? (
									<div className={styles.form_error}>{signin.errors.signin_email}</div>
								) : null}
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faLock}
										></FontAwesomeIcon>
									</div>
									<input
										type='password'
										name='signin_password'
										className={styles.input}
										placeholder='Password'
										onChange={signin.handleChange}
										onBlur={signin.handleBlur}
										value={signin.values.signin_password}
									/>
								</div>
								{signin.touched.signin_password && signin.errors.signin_password ? (
									<div className={styles.form_error}>{signin.errors.signin_password}</div>
								) : null}

								<button type="submit" className={styles.btn + " " + styles.solid} >Sign In</button>
								<p className={styles.social_text}>Or sign in with</p>
							</form>


							<div className={styles.social_media}>
								<a href='' className={styles.social_icon}>
									<FontAwesomeIcon
										className={styles.FontAwesomeIcon}
										icon={faFacebook}
									></FontAwesomeIcon>
								</a>
								<a onClick={googleSignIn} className={styles.social_icon}>
									<FontAwesomeIcon
										className={styles.FontAwesomeIcon}
										icon={faGoogle}
									></FontAwesomeIcon>
								</a>

								<a href='' className={styles.social_icon}>
									<FontAwesomeIcon
										className={styles.FontAwesomeIcon}
										icon={faTwitter}
									></FontAwesomeIcon>
								</a>
								<a href='' className={styles.social_icon}>
									<FontAwesomeIcon
										className={styles.FontAwesomeIcon}
										icon={faLinkedin}
									></FontAwesomeIcon>
								</a>
							</div>

							<form
								action=''
								method='POST'
								className={styles.form + ' ' + styles.signup_form}
								onSubmit={signup.handleSubmit}
							>
								<h2 className={styles.title}>Sign Up</h2>
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faUser}
										></FontAwesomeIcon>
									</div>
									<input
										type='text'
										name='signup_username'
										className={styles.input}
										placeholder='Username'
										onChange={signup.handleChange}
										onBlur={signup.handleBlur}
										value={signup.values.signup_username}
									/>
								</div>
								{signup.touched.signup_username && signup.errors.signup_username ? (
									<div className={styles.form_error}>{signup.errors.signup_username}</div>
								) : null}
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faEnvelope}
										></FontAwesomeIcon>
									</div>
									<input
										type='email'
										name='signup_email'
										className={styles.input}
										placeholder='Email'
										onChange={signup.handleChange}
										onBlur={signup.handleBlur}
										value={signup.values.signup_email}
									/>
								</div>
								{signup.touched.signup_email && signup.errors.signup_email ? (
									<div className={styles.form_error}>{signup.errors.signup_email}</div>
								) : null}
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faLock}
										></FontAwesomeIcon>
									</div>
									<input
										type='password'
										name='signup_password1'
										className={styles.input}
										placeholder='Password'
										onChange={signup.handleChange}
										onBlur={signup.handleBlur}
										value={signup.values.signup_password1}
									/>
								</div>
								{signup.touched.signup_password1 && signup.errors.signup_password1 ? (
									<div className={styles.form_error}>{signup.errors.signup_password1}</div>
								) : null}
								<div className={styles.input_field}>
									<div className={styles.icon}>
										<FontAwesomeIcon
											className={styles.FontAwesomeIcon}
											icon={faLock}
										></FontAwesomeIcon>
									</div>
									<input
										type='password'
										name='signup_password2'
										className={styles.input}
										placeholder='Confirm Password'
										onChange={signup.handleChange}
										onBlur={signup.handleBlur}
										value={signup.values.signup_password2}
									/>
								</div>
								{signup.touched.signup_password2 && signup.errors.signup_password2 ? (
									<div className={styles.form_error}>{signup.errors.signup_password2}</div>
								) : null}
								<button type='submit' className={styles.btn + ' ' + styles.solid}>
									Sign Up
								</button>
							</form>
						</div>
					</div>
					<div className={styles.panel_container}>
						<div className={styles.panel + ' ' + styles.left_panel}>
							<div className={styles.content}>
								<h3>New Here ?</h3>
								<p>
									Join Now to become a member of our community and contribute towards a
									change.
								</p>
								<button
									onClick={change_to_signup}
									className={styles.btn + ' ' + styles.transparent}
									id='signup_btn'
									ref={change_to_signup_btn}
								>
									Sign Up
								</button>
							</div>
							<img src='/images/image1.svg' alt='' className={styles.image} />
						</div>

						<div className={styles.panel + ' ' + styles.right_panel}>
							<div className={styles.content}>
								<h3>One of us ?</h3>
								<p>What are you waiting for? Take a look.</p>
								<button
									onClick={change_to_signin}
									className={styles.btn + ' ' + styles.transparent}
									id='signin_btn'
									ref={change_to_signin_btn}
								>
									Sign In
								</button>
							</div>
							<img src='/images/image2.svg' alt='' className={styles.image} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

