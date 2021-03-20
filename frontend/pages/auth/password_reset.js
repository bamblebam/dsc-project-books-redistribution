import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/password_reset.module.css'

export default function PasswordReset() {
    return (
        <div className={styles.body}>
            <div className={styles.main_container}>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <form
                            method='POST'
                            className={styles.donate_form}
                            encType='multipart/form-data'
                        >
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h1>Reset Password</h1>
                                </div>
                            </div>
                            <div className={styles.input_field}>
                                <input
                                    type='text'
                                    className={styles.input}
                                    placeholder='Email'
                                    name='password_email'
                                />
                            </div>
                            <button className={styles.btn}>Donate</button>
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
