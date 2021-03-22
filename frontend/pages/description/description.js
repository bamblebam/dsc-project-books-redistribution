import React, { useRef ,useState} from 'react'
import Head from 'next/head'
import styles from '../../styles/css/description.module.css'

const description = () => {

    const fileInput = useRef(null);
    const[image, setImage] = useState(null);
    const[previewUrl, setPreviewUrl] = useState(""); 
    const handleFile = file => {
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
    }

    const handledragOver = event => {
        event.preventDefault();
    
    }
    const handleOndrop = event => {
        //prevent the browser from opening the image
        event.preventDefault(); 
        event.stopPropagation(); 
        //let's grab the image file
        let imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);
    }

return(
    <div className={styles.form_class}>
        <div className={styles.Incenter}>
             <div className={styles.drag_area} onDragOver = {handledragOver} onDrop = {handleOndrop}>
             {previewUrl ? (
                <img src={previewUrl} alt='image' /> 
                ) : (
                    <>
                    <div className={styles.icon}></div>
                    <span>Drag and Drop to Upload Profile</span>
                    </>
                )}

            </div>
            {previewUrl && <div className={styles.ShowImageName}> <span>{image.name}</span></div> }
            <div className ={styles.buttonClass}>
                {/* <button className ={styles.push_area} >Add Profile</button> */}
                {/* <input type="file" hidden  />  */}
                <label htmlFor="product_image" className={styles.push_area} onClick = { () => fileInput.current.click()}>Add Image</label>
                <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])}/>
                {/* <input type="file" accept="image/*" ref={fileInput} onChange={e => handleFile(e.target.files[0])} className={styles.file} name="product_image" id="product_image" hidden /> */}
            </div> 
            <div className={styles.formInput}>
                <div className ={styles.formChildren}>
                <h4>Name </h4>
                <input type="text" placeholder ="Enter your name"></input>
                </div>
                <div className ={styles.formChildren}>
                <h4>Phone </h4>
                <input type="text" placeholder ="Enter Your Phone No"></input>
                </div>
                <div className ={styles.formChildren}>
                <h4>Education </h4>
                <input type="text" placeholder ="Enter Your Education"></input>
                </div>
                {/* <br/> */}
                <div className ={styles.formChildren}>
                <h4>Bio </h4>
                <textarea placeholder ="Enter your bio to help people know you" rows="20" cols="40"></textarea>
                </div>

                {/*<div className ={styles.formChildren}>
                    <h2>Location </h2>
                
                </div>*/}
                <div className ={styles.MoveToRight}>
                    <label className={styles.Continue}>Continue</label>
                </div>
            </div>

       </div>
        
       
    </div>
  
   );
};

export default description;