import React, { useState } from 'react'
import Modal from 'react-modal'
import Card from './Card'
import modalCardStyles from '../styles/css/ModalCard.module.css'
import {firebase} from '../configurations/db'
import 'firebase/auth'
import axios from 'axios'
import { useAuth } from '../hooks/useAuth.js'

const ModalCard = ({ bookName, bookDesc, text, imgSrc, imgAlt, bookId }) => {
	const auth = useAuth()
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const addToWishlist = () => {
		// const userid = firebase.auth().currentUser.uid || null
		const userid = "1kY7ymskNraVdl5SmgYTPtr7Xgq1"
		// const bookid = bookId
		const bookid ="QmAxoSgQWYlFiuDji6Ed"

		if (userid == null) {
			console.log('user not found')
		} else {
			let body = {
				userId: userid,
				id: bookid,
			}
			console.log(body)
			axios.post('http://localhost:8080/api/addWishListBook', body).then(res => {
				console.log('test')
				console.log(res)
				alert("Book Added To Wishlist Successfully!")
			})
		}
	}

	return (
		<div className={modalCardStyles.store}>
			<div
				onClick={() => {
					setModalIsOpen(true)
				}}
			>
				<Card
					bookImg={imgSrc}
					bookName={bookName}
					imgAlt={imgAlt}
					text={bookDesc}
				/>
			</div>
			<Modal
				className='Modal'
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => {
					setModalIsOpen(false)
				}}
			>
				<div className={modalCardStyles.modal}>
					<div className={modalCardStyles.store_left}>
						<img className={modalCardStyles.card_img} src={imgSrc} alt='' />
					</div>
					<div className={modalCardStyles.store_right}>
						<div className={modalCardStyles.modal_header}>
							<div>
								<h1 className={modalCardStyles.modal_title}>{bookName}</h1>
							</div>
							<button
								className={modalCardStyles.close_button}
								onClick={() => {
									setModalIsOpen(false)
								}}
							>
								&times;
							</button>
						</div>
						<div className={modalCardStyles.modal_body}>
							<div className={modalCardStyles.box}>
								<div className={modalCardStyles.modal_product_description}>
									<p>Description:</p>
									<p>{text}</p>
								</div>
							</div>

							<div className={modalCardStyles.modal_btns}>
								<button className={modalCardStyles.btn_primary}>
									<a
										className={modalCardStyles.btn_link_primary}
										onClick={addToWishlist}
									>
										Add to wishlist
									</a>
								</button>
								<button className={modalCardStyles.btn_secondary} >
									<a className={modalCardStyles.btn_link_secondary} href='/Chat/Chat'>
										Contact User
									</a>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default ModalCard
