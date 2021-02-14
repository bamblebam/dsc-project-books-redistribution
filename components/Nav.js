import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<div>
				<Link href="/">Logo</Link>
			</div>
			<ul className={navStyles.ul}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact Us</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
