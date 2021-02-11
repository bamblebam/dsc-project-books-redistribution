import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/authentication.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function authentication() {
    return (
        <>
            <Head>
            </Head>
            <div className={styles.body}>
                <div className={styles.main_container}>
                    <div className={styles.form_container}>
                        <div className={styles.signin_signup}>
                            <form action="" method="POST" className={styles.signin_form}>
                                <h2 className={styles.title}>Sign In</h2>
                                <div className={styles.input_field}>
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    <input type="text" name="signin_username" className={styles.input} placeholder="Username" />
                                </div>
                                <div className={styles.input_field}>
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                    <input type="text" name="signin_password" className={styles.input} placeholder="Password" />
                                </div>
                                <button type="submit" className={styles.btn, styles.solid}>Sign In</button>
                                <p className={styles.social_text}>Or sign in with</p>
                                <div className={styles.social_media}>
                                    <a href="" className={styles.social_icon}>
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </a>
                                    <a href="" className={styles.social_icon}>
                                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                                    </a>
                                    <a href="" className={styles.social_icon}>
                                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                                    </a>
                                    <a href="" className={styles.social_icon}>
                                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
