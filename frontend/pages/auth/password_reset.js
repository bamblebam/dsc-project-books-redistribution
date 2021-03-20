import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/donate.module.css'

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
                                    placeholder='Product Name'
                                    name='product_name'
                                />
                            </div>
                            <div className={styles.text_field}>
                                <textarea
                                    cols='30'
                                    rows='10'
                                    className={styles.text}
                                    placeholder='Enter a short description about your product.'
                                    name='product_description'
                                ></textarea>
                            </div>
                            <div className={styles.file_field}>
                                <label htmlFor='product_image'>Image (Optional)</label>
                                <input
                                    type='file'
                                    accept='image/*'
                                    className={styles.file}
                                    name='product_image'
                                    id='product_image'
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
                            <h3>Donate Now!!!</h3>
                            <p className={styles.desctext}>
                                Donate now and help provide a child education
							</p>
                            <p>Or</p>
                            <p className={styles.desctext}>
                                Browse products that others want to give you might find something useful
                                for yourself
							</p>
                            <button className={styles.btn + ' ' + styles.transparent}>Browse</button>
                        </div>
                        <img src='/images/image1.svg' alt='' className={styles.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}
