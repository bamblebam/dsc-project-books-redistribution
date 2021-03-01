import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import navStyles from "../styles/css/Nav.module.css";

const Nav = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [width, setWidth] = useState(0);
	const handleResize = () => setWidth(window.innerWidth);
	useEffect(() => {
		console.log(width);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	// when clicked changes the fa from bars to times and vice-versa
	const clickHandler = () => {
		setClick(!click);
	};

	// this is used to close hambuger menu when an option is selected or the hambuger is clicked
	const closeMobile = () => {
		setClick(false);
	};
	const showButton = () => {
		if (width <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	});

	return (
		<div className={navStyles.customNav}>
			<div className={navStyles.logo}>
				<Link href="/" onClick={closeMobile}>
					Logo
				</Link>
			</div>
			{/* hambuger */}
			<div className={navStyles.menu_icon} onClick={clickHandler}>
				<FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
			</div>
			{/* menu */}
			<div className={click ? navStyles.itemsActive : navStyles.navItems}>
			<ul className={click ? `${navStyles.ul} ${navStyles.active}` : navStyles.ul}>
				<li className={navStyles.links} onClick={closeMobile}>
					<Link className={navStyles.links} href="/" >
						Home
					</Link>
				</li>
				<li className={navStyles.links} onClick={closeMobile}>
					<Link className={navStyles.links} href="/about/about" >
						About
					</Link>
				</li>
				<li className={navStyles.links} onClick={closeMobile}>
					<Link className={navStyles.links} href="/product/Resources" >
						Books
					</Link>
				</li>
				<li className={navStyles.links} onClick={closeMobile}>
				<Link className={navStyles.links} href="/user/userId" >
						Account
					</Link>
				</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
