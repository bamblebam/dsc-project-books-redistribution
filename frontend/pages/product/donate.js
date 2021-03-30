import React, { useRef ,useState} from 'react'
import Head from 'next/head'
import styles from '../../styles/css/donate.module.css'
import { useFormik } from 'formik'
import axios from 'axios'
var FormData = require('form-data');
export default function Donate() {
	const fileInput = useRef(null);
    const[image, setImage] = useState('');
    const[previewUrl, setPreviewUrl] = useState(""); 
    const [driveLink,setdrive] = useState("");
    let formData = new FormData();

	const handleFile = file => {
        setImage(file);
        // setPreviewUrl(URL.createObjectURL(file));
        
        formData.append('bookImage',image);
    }

	const donate= useFormik({
		initialValues: {
			product_name: "",
			product_description: "",
            
            
		},
		onSubmit:
		values =>{
			formData.append('bookImage',image);
			console.log(image)
			console.log(formData)
			console.log(values.product_name)
			console.log(values.product_description)
			axios.post("http://localhost:8080/books/UploadImage",formData ).then(res => {
            setdrive(res.data.fileID);
           
            let body = {
				product_name: values.product_name,
				product_description: values.product_description,
				bookImage: res.data.fileID
			}
			console.log(body)
			axios.post("http://localhost:8080/books/addbook/1kY7ymskNraVdl5SmgYTPtr7Xgq1", body).then(res => {
				console.log(res)
			})
          })
		}
	})
	return (
		<div className={styles.body}>
			<div className={styles.main_container}>
				<div className={styles.form_container}>
					<div className={styles.form}>
						<form
							method='POST'
							className={styles.donate_form}
							encType='multipart/form-data'
							onSubmit={donate.handleSubmit}
						>
							<div className={styles.content}>
								<div className={styles.title}>
									<h1>Donate</h1>
								</div>
							</div>
							<div className={styles.input_field}>
								<input
									type='text'
									className={styles.input}
									placeholder='Product Name'
									name='product_name'
									onChange={donate.handleChange}
									onBlur={donate.handleBlur}  value={donate.values.product_name}
								/>
							</div>
							<div className={styles.text_field}>
								<textarea
									cols='30'
									rows='10'
									className={styles.text}
									placeholder='Enter a short description about your product.'
									name='product_description'
									onChange={donate.handleChange}
									onBlur={donate.handleBlur}  value={donate.values.product_description}
								></textarea>
							</div>
							<div className={styles.file_field}>
								<label htmlFor='product_image' >Image (Optional)</label>
								<input
									type='file'
									accept='image/*'
									className={styles.file}
									ref={fileInput}
									name='product_image'
									id='product_image'
									hidden
									onChange={e => handleFile(e.target.files[0])}
								/>
							</div>
							<button type="submit" className={styles.btn}>Donate</button>
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
