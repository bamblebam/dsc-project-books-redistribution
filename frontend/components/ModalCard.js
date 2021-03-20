import React, { useState } from 'react'
import Modal from 'react-modal'
import Card from './Card'
import modalCardStyles from '../styles/css/ModalCard.module.css'

const ModalCard = ({
	author,
	bookName,
	price,
	location,
	year,
	bookDesc,
	text,
	imgSrc,
	imgAlt,
	link,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

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
					author={author}
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
						<img className={modalCardStyles.image} src={imgSrc} alt='' />
					</div>
					<div className={modalCardStyles.store_right}>
						<div className={modalCardStyles.modal_header}>
							<div>
								<h1 className={modalCardStyles.modal_title}>{bookName}</h1>
								<h2 className={modalCardStyles.modal_subtitle}>
									{author}, {year}
								</h2>
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
								<div>
									<div className={modalCardStyles.modal_details}>
										<h3>Price: {price}</h3>
										<h3>Location: {location}</h3>
									</div>
								</div>
								<div className={modalCardStyles.modal_product_description}>
									<p>Description:</p>
									<p>{text}</p>
								</div>
							</div>

							<div className={modalCardStyles.modal_btns}>
								<button className={modalCardStyles.btn_primary}>
									<a className={modalCardStyles.btn_link_primary} href={link}>
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
