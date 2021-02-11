import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/authentication.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function authentication() {
    return (
        <>
            <Head>
                <script src="https://use.fontawesome.com/ffe70d5ceb.js"></script>
            </Head>
            <div className={styles.body}>
                <div className={styles.main_container}>
                    <div className={styles.form_container}>
                        <div className={styles.signin_signup}>
                            <form action="" method="POST" className={styles.signin_form}>
                                <h2 className={styles.title}>
                                    <div className={styles.input_field}>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    </div>
                                </h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
