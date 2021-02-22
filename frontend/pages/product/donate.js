import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/donate.module.css'

export default function Donate() {
    return (
        <div className={styles.body}>
            <div className={styles.main_container}>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <form method="POST" className={styles.donate_form} encType="multipart/form-data">
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h1>Donate</h1>
                                </div>
                            </div>
                            <div className={styles.input_field}>
                                <input type="text" className={styles.input} placeholder="Product Name" name="product_name" />
                            </div>
                            <div className={styles.text_field}>
                                <textarea cols="30" rows="10" className={styles.text} placeholder="Enter a short description about your product." name="product_description"></textarea>
                            </div>
                            <div className={styles.file_field}>
                                <input type="file" accept="image/*" className={styles.file} name="product_image" />
                            </div>
                            <button className={styles.btn}>Donate</button>
                            <p className={styles.subtext}>
                                Read our <a href="">Terms of Service</a> before donating
                            </p>
                        </form>
                    </div>
                </div>
                <div className={styles.panel_container}>
                    <div className={styles.panel}>
                        <div className={styles.content}>
                            <h3>Donate here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur, voluptatem quod ex ipsum, cumque doloremque neque quam quo accusamus asperiores non, officiis corporis. Maxime tenetur dignissimos sit recusandae animi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
