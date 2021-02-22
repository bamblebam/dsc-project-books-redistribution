import React from 'react'
import Head from 'next/head'
import styles from '../../styles/css/donate.module.css'

export default function Donate() {
    return (
        <div className={styles.body}>
            <div className={styles.main_container}>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <div className={styles.donate_form}>
                            <div className={styles.content}>
                                <div className={styles.title}>
                                    <h1>Donate</h1>
                                </div>
                            </div>
                            <div className={styles.input_field}>
                                <input type="text" className={styles.input} placeholder="Product Name" name="product_name" />
                            </div>
                            <div className={styles.input_field}>
                                <input type="text" className={styles.input} placeholder="Product Name" name="product_name" />
                            </div>
                            <div className={styles.input_field}>
                                <input type="text" className={styles.input} placeholder="Product Name" name="product_name" />
                            </div>
                            <button className={styles.btn}>Donate</button>
                        </div>
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
