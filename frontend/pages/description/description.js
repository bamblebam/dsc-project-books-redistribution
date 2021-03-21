import React, { useRef } from 'react'
import Head from 'next/head'
import styles from '../../styles/css/description.module.css'

const description = () => {
return(
    <div className={styles.form_class}>
        <div className={styles.Incenter}>
            <div className={styles.drag_area}>
                <div className={styles.icon}></div>
                <span>Drag and Drop to Upload Profile</span> 
                    
            </div>
            <div className ={styles.buttonClass}>
                {/* <button className ={styles.push_area} >Add Profile</button> */}
                {/* <input type="file" hidden  />  */}
                <label htmlFor="product_image" className={styles.push_area}>Add Image</label>
                <input type="file" accept="image/*" className={styles.file} name="product_image" id="product_image" hidden />
            </div> 
            <div className={styles.formInput}>
                <div className ={styles.formChildren}>
                <h4>Name :</h4>
                <input type="text" placeholder ="Enter your name"></input>
                </div>
                <div className ={styles.formChildren}>
                <h4>Phone :</h4>
                <input type="text" placeholder ="Enter Your Phone No"></input>
                </div>
                <div className ={styles.formChildren}>
                <h4>Education :</h4>
                <input type="text" placeholder ="Enter Your Education"></input>
                </div>
                {/* <br/> */}
                <div className ={styles.formChildren}>
                <h4>Bio :</h4>
                <textarea placeholder ="Enter your bio to help people know you" rows="20" cols="40"></textarea>
                </div>

                <div className ={styles.formChildren}>
                    <h2>Location :</h2>
                
                </div>
            </div>

       </div>
        
       
    </div>
  
   );
};

export default description;