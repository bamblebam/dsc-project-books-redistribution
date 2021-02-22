import Image from "next/image";
import heroStyles from "../styles/css/HeroSection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const HeroSection = () => {
	let username = "user";
	// update username from db
	//change spans from db

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const t1 = gsap.timeline();
		let tween1 = gsap.from("#left", {
			scrollTrigger: {
				trigger: "#left",
				start: "50px 50%",
				end: "bottom bottom",
				toggleActions: "play none none none",
				markers: true,
			},
			opacity: 0,
			x: "-=100px",
			duration: 0.5,
		});
		let tween2 = gsap.from("#right", {
			scrollTrigger: {
				trigger: "#right",
				start: "200px 50%",
				end: "bottom bottom",
				toggleActions: "play none none none",
				markers: true,
			},
			opacity: 0,
			x: "-=100px",
			duration: 0.5,
			delay: 1.5,
		});
	}, []);
	//}

	return (
		<>
			<div className={heroStyles.blob}>
				<svg
					xmlnsXlink="http://www.w3.org/1999/xlink"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 310 350"
				>
					<path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
				</svg>
			</div>

			<div className=".bo">
				<div className={heroStyles.heroContainer}>
					<div className={heroStyles.custom_shape_divider_top_1613659207}>
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
								className={heroStyles.shape_fill}
							></path>
						</svg>
					</div>
					<div className={heroStyles.left}>
						<div className={heroStyles.main}>
							<h1 className={heroStyles.title}>Hello {username}</h1>
							<p className={heroStyles.subtitle}> Some random quote/text from api</p>
							<div className={heroStyles.buttonDiv}>
								<button className={heroStyles.btn__primary}>Get Books</button>
								<button className={heroStyles.btn__secondary}>Donate Books</button>
							</div>
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
			</div>
			<div id={heroStyles.box} className="box">
				<div className={heroStyles.heroContainer2}>
					<div id="left" className={heroStyles.left}>
						<Image
							src="/images/testImage.jpg"
							alt="test image"
							width={500}
							height={500}
						/>
					</div>
					<div id="right" className={heroStyles.right}>
						<div className={heroStyles.main}>
							<h1 className={heroStyles.title}>
								Total books donated <span>1,000,000</span>
							</h1>
							<p className={heroStyles.subtitle}>Join Us and become a provider</p>
							<div className={heroStyles.buttonDiv}>
								<button className={heroStyles.btn__primary}>Join us</button>
								<button className={heroStyles.btn__secondary}>Donate Books</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
