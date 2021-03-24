import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/css/description.module.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const description = () => {

return(
    <div className={styles.form_class}>
        <div className={styles.Incenter}>
            
            <div className={styles.drag_area}>
                <div className={styles.icon}></div>
                <span>Drag and Drop to Upload Profile</span> 
                    
            </div>
            <div className ={styles.buttonClass}>
                <button className ={styles.push_area}>Add Profile</button>
                <input type="file" hidden /> 
            </div> 
            <div className={styles.formInput}>
                <div className ={styles.formChildren}>
                <h2>Name :</h2>
                <input type="text" placeholder ="Enter your name"></input>
                </div>
                <br/>
                <div className ={styles.formChildren}>
                <h2>Bio :</h2>
                <textarea placeholder ="Enter your bio to help people know you" rows="20" cols="40"></textarea>
                </div>

                <div>
                    <h2>Location :</h2>
                
                </div>
            </div>
       </div>
        
    </div>
  
   );
};

export default description;