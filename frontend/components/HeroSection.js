import Image from "next/image";
import heroStyles from "../styles/HeroSection.module.css";

const HeroSection = () => {
	let username = "user";
	// update username from db

	return (
		<>
			<div className={heroStyles.heroContainer}>
				<div className={heroStyles.left}>
					<div className={heroStyles.main}>
						<h1 className={heroStyles.title}>Hello {username}</h1>
						<p className={heroStyles.subtitle}> Some random quote/text from api</p>
						<button className={heroStyles.btn__primary}>Get Books</button>
						<button className={heroStyles.btn__secondary}>Donate Books</button>
					</div>
				</div>
				<div className={heroStyles.right}>
					<Image
						src="/images/testImage.jpg"
						alt="test image"
						width={500}
						height={500}
					/>
				</div>
			</div>
			<div className={heroStyles.heroContainer}>Second page</div>
		</>
	);
};

export default HeroSection;
