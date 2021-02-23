import React, { useState } from "react";
import Modal from "react-modal";
import Card from "./Card";
import modalCardStyles from "../styles/css/ModalCard.module.css";

const ModalCard = ({
	author,
	bookName,
	price,
	location,
	year,
	text,
	imgSrc,
	imgAlt,
	link,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className={modalCardStyles.store}>
			<div
				onClick={() => {
					setModalIsOpen(true);
					console.log("Click registered");
				}}
			>
				<Card
					bookImg={imgSrc}
					bookName={bookName}
					author={author}
					imgAlt={imgAlt}
					text={text}
				/>
			</div>
			<Modal
				className="Modal"
				isOpen={modalIsOpen}
				ariaHideApp={false}
				onRequestClose={() => {
					setModalIsOpen(false);
				}}
			>
				<div className={modalCardStyles.modal}>
					<img className={modalCardStyles.store_left} src={imgSrc} alt="" />
					<div className={modalCardStyles.store_right}>
						<div className={modalCardStyles.modal_header}>
							<h1 className={modalCardStyles.modal_title}>{bookName}</h1>
							<button
								className={modalCardStyles.close_button}
								onClick={() => {
									console.log("x clicked");
									setModalIsOpen(false);
								}}
							>
								&times;
							</button>
						</div>
						<div className={modalCardStyles.modal_body}>
							<div className={modalCardStyles.modal_details}>
								<div>
									<h2>Author: {author}</h2>
									<h2>Price: {price}</h2>
								</div>
								<div>
									<h2>Year: {year}</h2>
									<h2>Location: {location}</h2>
								</div>
							</div>
							<p>Description:</p>
							<p>{text}</p>
							<button className={modalCardStyles.btn_card}>
								<a className={modalCardStyles.btn_link} href={link}>
									Add to wishlist
								</a>
							</button>
							<button className={modalCardStyles.btn_card}>
								<a className={modalCardStyles.btn_link} href="/sign-up">
									Contact User
								</a>
							</button>
						</div>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default ModalCard;
