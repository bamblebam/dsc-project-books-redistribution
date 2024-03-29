import React, { useRef, useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/css/description.module.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'
var FormData = require('form-data');
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import firebase from "firebase/app"
import "firebase/auth"
import { firebaseApp } from '../../configurations/db';

const description = () => {

    const history = useHistory();
	const auth = useAuth()
	const router = useRouter()

    const clientID = "918606077379-f6ekp752jkmtrmnu0u6ng6ufpkg996pk.apps.googleusercontent.com";
    const clientSecret = "5Y26f39iNlEwsnaAuzrPmFNd";
    const fileInput = useRef(null);
    const [image, setImage] = useState('');
    const [previewUrl, setPreviewUrl] = useState("");
    const [driveLink, setdrive] = useState("");
    let formData = new FormData();

    // const userid = firebase.auth().currentUser.uid || null
    const userid = "1kY7ymskNraVdl5SmgYTPtr7Xgq1"
    // console.log(firebase.auth().currentUser.uid);
    console.log(userid);
    const handleFile = file => {
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));

        formData.append('profile', image);
    }

    const handledragOver = event => {
        event.preventDefault();

    }
    const handleOndrop = event => {

        event.preventDefault();
        event.stopPropagation();
        //let's grab the image file
        console.log(event)
        let imageFile = event.dataTransfer.files[0];
        console.log(imageFile.path)
        handleFile(imageFile);
    }

    const description_form = useFormik({
        initialValues: {
            user_Name: "",
            phone_number: "",
            user_bio: "",
            education: "",

        },
        validationSchema: Yup.object({
            user_Name: Yup.string().max(25, "Name must be less than 25").required('Required'),
            user_bio: Yup.string().max(100, "Bio must be less than 100").required('Required'),
            //phone_number:Yup.string().phone().required()

        }),
        onSubmit:
            values => {
                const file = {
                    body: image
                };
                formData.append('profile', image);
                axios.post("http://localhost:8080/api/UploadImage", formData).then(res => {
                    setdrive(res.data.fileID);

                    let body = {
                        bio: values.user_bio,
                        full_name: values.user_Name,
                        phone: values.phone_number,
                        education: values.education,
                        userImage: res.data.fileID
                    }
                    console.log(values.phone_number)
                    axios.put("http://localhost:8080/api/user/"+userid , body).then(res => {
                        console.log(res)
                        router.push('/description/Map')
                    })
                })

            }
    })

    return (
        <div className={styles.form_class}>
            <div className={styles.Incenter}>
                <form
                    action=''
                    method='POST'
                    onSubmit={description_form.handleSubmit}>
                    <div className={styles.drag_area} onDragOver={handledragOver} onDrop={handleOndrop}>
                        {previewUrl ? (
                            <img src={previewUrl} alt='image' />
                        ) : (
                            <>
                                <div className={styles.icon}></div>
                                <span>Drag and Drop to Upload Profile</span>
                            </>
                        )}

                    </div>
                    {previewUrl && <div className={styles.ShowImageName}> <span>{image.name}</span></div>}
                    <div className={styles.buttonClass}>
                        {/* <button className ={styles.push_area} >Add Profile</button> */}
                        {/* <input type="file" hidden  />  */}
                        <label htmlFor="product_image" className={styles.push_area} onClick={() => fileInput.current.click()}>Add Image</label>
                        <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])} />
                        {/* <input type="file" accept="image/*" ref={fileInput} onChange={e => handleFile(e.target.files[0])} className={styles.file} name="product_image" id="product_image" hidden /> */}
                    </div>
                    <div className={styles.formInput}>
                        <div className={styles.formChildren}>
                            <h4>Name </h4>
                            <input type="text" placeholder="Enter your name" name='user_Name' onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.user_Name}></input>
                        </div>
                        <div className={styles.formChildren}>
                            <h4>Phone </h4>
                            <input type="text" placeholder="Enter Your Phone No" name='phone_number' onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.phone_number} ></input>
                        </div>
                        <div className={styles.formChildren}>
                            <h4>Education </h4>
                            <input type="text" placeholder="Enter Your Education" name='education' onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.education}></input>
                        </div>
                        {/* <br/> */}
                        <div className={styles.formChildren}>
                            <h4>Bio </h4>
                            <textarea placeholder="Enter your bio to help people know you" rows="20" cols="40" name='user_bio' onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.user_bio}></textarea>
                        </div>

                        {/*<div className ={styles.formChildren}>
                    <h2>Location </h2>
                
                </div>*/}
                        <div className={styles.MoveToRight}>
                            <button type="submit" className={styles.Continue}>Continue</button>
                        </div>
                    </div>

                </form>
            </div>


        </div>

    );
};

export default description;