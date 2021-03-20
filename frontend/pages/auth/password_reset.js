import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/password_reset.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import firebase from "firebase/app"
import "firebase/auth"
import firebaseApp from '../../configurations/db';
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'

export default function PasswordReset() {
    const password_reset = useFormik({
        initialValues: {
            password_email: ""
        },
        validationSchema: Yup.object({
            password_email: Yup.string().email("Not a valid email").required('Required'),
        }),
        onSubmit: values => {
            let body = {
                email: values.password_email
            }
            axios.post('http://localhost:8080/passwordReset', body).then(res => {
                console.log("bam")
                console.log(res)
            })
        }
    })
    return (
        <div className={styles.body}>
            <div className={styles.main_container}>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <form
                            method='POST'
                            className={styles.donate_form}
                            onSubmit={password_reset.onSubmit}
                        >
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h1>Reset Password</h1>
                                </div>
                            </div>
                            <div className={styles.input_field}>
                                <div className={styles.icon}>
                                    <FontAwesomeIcon
                                        className={styles.FontAwesomeIcon}
                                        icon={faEnvelope}
                                    ></FontAwesomeIcon>
                                </div>
                                <input
                                    type='email'
                                    className={styles.input}
                                    placeholder='Email'
                                    name='password_email'
                                    onChange={password_reset.handleChange}
                                    onBlur={password_reset.handleBlur}
                                    value={password_reset.values.password_email}
                                />
                            </div>
                            {password_reset.touched.password_email && password_reset.errors.password_email ? (
                                <div className={styles.form_error}>{password_reset.errors.password_email}</div>
                            ) : null}
                            <button className={styles.btn} type="submit">Reset Password</button>
                            <p className={styles.subtext}>
                                Read our <a href=''>Terms of Service</a> before donating
							</p>
                        </form>
                    </div>
                </div>
                <div className={styles.panel_container}>
                    <div className={styles.panel}>
                        <div className={styles.content}>
                            <h3>Changed Your Mind</h3>
                            <p className={styles.desctext}>
                                Login Again
							</p>
                            <button className={styles.btn + ' ' + styles.transparent}>Login</button>
                        </div>
                        <img src='/images/image1.svg' alt='' className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}
