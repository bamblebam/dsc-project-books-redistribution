import React, { useRef ,useState,useEffect} from 'react'
import Head from 'next/head'
import styles from '../../styles/css/description.module.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup'
var FormData = require('form-data');

const profile = ({ data }) => {
	const fileInput = useRef(null);
    const[image, setImage] = useState('');
    const[previewUrl, setPreviewUrl] = useState(""); 
	const [showImage, setShowImage] = useState('');
    const [driveLink,setdrive] = useState("");
   
    let items = data
	
	//console.log(data);
    let formData = new FormData();

	useEffect(() => {
		setShowImage(data.userImage);
	},[data.userImage]);

    const handleFile = file => {
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
        console.log(image);
        formData.append('profile',file);
          axios.post("http://localhost:8080/api/UploadImage",formData ).then(res => {
            setdrive(res.data.fileID);
            setShowImage(res.data.fileID);
        })
      
       
        console.log(showImage);
        //setShowImage(res.data.fileID);

        

    }

    const handledragOver = event => {
        event.preventDefault();
    
    }
    const handleOndrop = event => {
        
        event.preventDefault(); 
        event.stopPropagation(); 
        //let's grab the image file
        let imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);
    }

	const description_form = useFormik({
		initialValues: {
			user_Name: data.full_name,
			phone_number: data.phone,
            user_bio:data.bio,
            education :data.education,
			email:data.email,
            
		},
		validationSchema: Yup.object({
			user_Name: Yup.string().max(25, "Name must be less than 25").required('Required'),
            user_bio: Yup.string().max(100, "Bio must be less than 100").required('Required'),
			email: Yup.string().email("Not a valid email").required('Required'),
            //phone_number:Yup.string().phone().required()

		}),
		onSubmit:
         values => {
             console.log(showImage);
            let body = {
				bio: values.user_bio,
				full_name:values.user_Name,
                phone:values.phone_number,
                education :values.education,
                userImage : showImage,
                email:values.email
			}
			console.log(values.phone_number)
			axios.put("http://localhost:8080/api/user/1kY7ymskNraVdl5SmgYTPtr7Xgq1", body).then(res => {
				console.log(res)
			})
			
		}
	})

	return (
		<div className={styles.form_class}>
        <div className={styles.Incenter}>
        <form action='' method='POST' onSubmit={description_form.handleSubmit}>
             <div className={styles.drag_area} onDragOver = {handledragOver} onDrop = {handleOndrop}>
				 {showImage ?(<img src ={showImage} alt='Your current profile image'/>):(
					 previewUrl ? (
						<img src={previewUrl} alt='image' /> 
						) : (
							<>
							<div className={styles.icon}></div>
							<span>Drag and Drop to Upload Profile</span>
							</>
						)
				 )}
                

            </div>
            {previewUrl && <div className={styles.ShowImageName}> <span>{image.name}</span></div> }
            <div className ={styles.buttonClass}>
                
                <label htmlFor="product_image" className={styles.push_area} onClick = { () => fileInput.current.click()}>Update Profile</label>
                <input type="file" accept='image/*' ref={fileInput} hidden onChange={e => handleFile(e.target.files[0])}/>
                {/* <input type="file" accept="image/*" ref={fileInput} onChange={e => handleFile(e.target.files[0])} className={styles.file} name="product_image" id="product_image" hidden /> */}
            </div> 
            <div className={styles.formInput}>
                <div className ={styles.formChildren}>
                <h4>Name </h4>
                <input type="text" placeholder ="Enter your name"  name ='user_Name' value={data.full_name} onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.user_Name}></input>
                </div>

				<div className ={styles.formChildren}>
				<h4>Email  </h4>
                <input type="text" placeholder ="Enter your name"  name ='email'  onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.email}></input>
                </div>
				
                <div className ={styles.formChildren}>
                <h4>Phone </h4>
                <input type="text" placeholder ="Enter Your Phone No" name='phone_number' onChange={description_form.handleChange} onBlur={description_form.handleBlur}  value={description_form.values.phone_number}></input>
                </div>
                <div className ={styles.formChildren}>
                <h4>Education </h4>
                <input type="text" placeholder ="Enter Your Education" name='education'  onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.education}></input>
                </div>
                {/* <br/> */}
                <div className ={styles.formChildren}>
                <h4>Bio </h4>
                <textarea placeholder ="Enter your bio to help people know you" rows="20" cols="40" name='user_bio' onChange={description_form.handleChange} onBlur={description_form.handleBlur} value={description_form.values.user_bio}></textarea>
                </div>
                <div>
				<div className ={styles.MoveToLeft}>
					<button className ={styles.Continue}>Cancel</button>
				</div>
                <div className ={styles.MoveToRight} type="submit">
                    <button className={styles.Continue}>Update</button>
                </div>
                </div>
            </div>

            </form>
       </div>
        
       
    </div>
	);
};

export async function getStaticProps() {
	const res = await axios.get(
		'http://localhost:8080/api/user/1kY7ymskNraVdl5SmgYTPtr7Xgq1'
	)
	const data = await res.data

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { data }, // will be passed to the page component as props
	}
}

export default profile;
