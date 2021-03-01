import cardStyles from "../styles/css/Card.module.css";
import Image from "next/image";

const Card = ({ bookImg, imgAlt, bookName, author, bookDesc }) => {
	return (
		<div className={cardStyles.card}>
			<div className={cardStyles.left}>
				<Image src={bookImg} alt={imgAlt} width={200} height={200} />
			</div>
			<div className={cardStyles.right}>
				<h1 className={cardStyles.title}>{bookName}</h1>
				<h3 className={cardStyles.subtitle}>{author}</h3>
				<p className={cardStyles.description}>{bookDesc}</p>
			</div>
		</div>
	);
};
export default Card;
