import React, { useState } from 'react'
import Modal from 'react-modal'
import Card from './Card'
import modalCardStyles from '../styles/css/ModalCard.module.css'
import firebase from '../configurations/db'
import 'firebase/auth'
import axios from 'axios'

const ModalCard = ({ bookName, bookDesc, text, imgSrc, imgAlt }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const addToWishlist = () => {
		const userid = '95GhG5U6Yi7aSInxZyPs'
		const bookid = 'NoKO2i0DY6VKmZZXzblq'

		let body = {
			userId: userid,
			id: bookid,
		}
		body = JSON.stringify(body)
		console.log(body)
		axios.post('http://localhost:8080/api/addWishListBook', body).then(res => {
			console.log('test')
			console.log(res)
		})
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
								<button className={modalCardStyles.btn_secondary}>
									<a className={modalCardStyles.btn_link_secondary} href='/'>
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
