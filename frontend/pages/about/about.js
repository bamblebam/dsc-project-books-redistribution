import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect } from 'react'
import aboutStyles from '../../styles/css/about.module.css'
import Footer from '../../components/Footer'

const about = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const t1 = gsap.timeline()
		let tween1 = gsap.from('#left', {
			scrollTrigger: {
				trigger: '#left',
				start: '50px 50%',
				end: 'bottom bottom',
				toggleActions: 'play none none none',
				markers: true,
			},
			opacity: 0,
			x: '-=100px',
			duration: 0.5,
		})
		let tween2 = gsap.from('#right', {
			scrollTrigger: {
				trigger: '#right',
				start: '50px 50%',
				end: 'bottom bottom',
				toggleActions: 'play none none none',
				markers: true,
			},
			opacity: 0,
			x: '-=100px',
			duration: 0.5,
			delay: 1.5,
		})
	}, [])
	return (
		<div>
			<div className={aboutStyles.container}>
				<div className={aboutStyles.details}>
					<h1 className={aboutStyles.title}>How?</h1>
					<p>
						People who have book they are willing to donate, add their books in the
						item list
					</p>
					<p>People who want the books can take them from item list</p>
				</div>
				<div className={aboutStyles.image}>
					<Image
						src='/images/bookshelf.jpg'
						alt='test image'
						width={500}
						height={500}
					/>
				</div>
			</div>
			<div className={aboutStyles.container}>
				<div id='left' className={aboutStyles.image}>
					<Image
						src='/images/bookshelf.jpg'
						alt='test image'
						width={500}
						height={500}
					/>
				</div>
				<div id='right' className={aboutStyles.details}>
					<h1 className={aboutStyles.title}>How?</h1>
					<p>
						People who have book they are willing to donate, add their books in the
						item list
					</p>
					<p>People who want the books can take them from item list</p>
				</div>
			</div>
			<div className={aboutStyles.container}>
				<div id='left' className={aboutStyles.details}>
					<h1 className={aboutStyles.title}>How?</h1>
					<p>
						People who have book they are willing to donate, add their books in the
						item list
					</p>
					<p>People who want the books can take them from item list</p>
				</div>
				<div id='right' className={aboutStyles.image}>
					<Image
						src='/images/bookshelf.jpg'
						alt='test image'
						width={500}
						height={500}
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default about
