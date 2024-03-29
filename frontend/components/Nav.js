import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import navStyles from '../styles/css/Nav.module.css'

import { firebaseApp } from '../configurations/db'
import 'firebase/auth'
import axios from 'axios'
import firebase from "firebase/app"
import { useAuth } from '../hooks/useAuth.js'

const Nav = () => {
	const auth = useAuth()
	//const { uid } = firebase.auth().currentUser.uid || 'abc'
	const [click, setClick] = useState(false)
	const [button, setButton] = useState(true)
	const [width, setWidth] = useState(0)
	const handleResize = () => setWidth(window.innerWidth)
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [width])

	// when clicked changes the fa from bars to times and vice-versa
	const clickHandler = () => {
		setClick(!click)
	}

	// this is used to close hambuger menu when an option is selected or the hambuger is clicked
	const closeMobile = () => {
		setClick(false)
	}
	const showButton = () => {
		if (width <= 960) {
			setButton(false)
		} else {
			setButton(true)
		}
	}

	useEffect(() => {
		showButton()
	})

	const signout = () => {
		console.log("3")
		axios.post("http://localhost:8080/api/signOut").then(res => {
			console.log(res)
		})
	}

	return (
		<div className={navStyles.customNav}>
			<div className={navStyles.logo}>
				<Link href='/' onClick={closeMobile}>
				
							Distribooks
				</Link>
			</div>
			{/* hambuger */}
			<div className={navStyles.menu_icon} onClick={clickHandler}>
				<FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
			</div>
			{/* menu */}
			<div className={click ? navStyles.itemsActive : navStyles.navItems}>
				<ul
					className={click ? `${navStyles.ul} ${navStyles.active}` : navStyles.ul}
				>
					<li className={navStyles.links} onClick={closeMobile}>
						<Link className={navStyles.links} href='/'>
							Home
						</Link>
					</li>
					<li className={navStyles.links} onClick={closeMobile}>
						<Link className={navStyles.links} href='/about/about'>
							About
						</Link>
					</li>
					<li className={navStyles.links} onClick={closeMobile}>
						<Link className={navStyles.links} href='/product/Resources'>
							Books
						</Link>
					</li>
					<li className={navStyles.links} onClick={closeMobile}>
						<Link className={navStyles.links} href='/profile/profile'>
							Account
						</Link>
					</li>
					<li className={navStyles.links} onClick={closeMobile}>
						<Link  onClick={auth.signout} className={navStyles.links} href='/auth/authentication'>Logout</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Nav
