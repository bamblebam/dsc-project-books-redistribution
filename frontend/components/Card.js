import cardStyles from '../styles/css/Card.module.css'

const Card = ({ bookImg, imgAlt, bookName, text }) => {
	return (
		<div className={cardStyles.card}>
			<div className={cardStyles.left}>
				<img className={cardStyles.img} src={bookImg} alt={imgAlt} />
			</div>
			<div className={cardStyles.right}>
				<h1 className={cardStyles.title}>{bookName}</h1>
				<p className={cardStyles.description}>{text}</p>
			</div>
		</div>
	)
}
export default Card
