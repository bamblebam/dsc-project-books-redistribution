import Link from "next/link";
import navStyles from "../styles/css/Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<div className={navStyles.links}>
				<Link href="/" className={navStyles.links}>
					Logo
				</Link>
			</div>
			<ul className={navStyles.ul}>
				<li className={navStyles.links}>
					<Link href="/">Home</Link>
				</li>
				<li className={navStyles.links}>
					<Link href="/about/about">About</Link>
				</li>
				<li className={navStyles.links}>
					<Link href="/contact/contact">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
