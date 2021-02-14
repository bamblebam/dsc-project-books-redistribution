import heroStyles from "../styles/HeroSection.module.css";

const HeroSection = () => {
	let username = "user";
	// update username from db

	return (
		<>
			<div className={heroStyles.heroContainer}>
				<h1>Hello {username}</h1>
			</div>
			<div className={heroStyles.heroContainer}>Second page</div>
		</>
	);
};

export default HeroSection;
