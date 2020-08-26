import dynamic from 'next/dynamic'
import Header from '../Header/Header'
import classNames from 'classnames'

// import { Media } from 'react-breakpoints'
const Media = dynamic(() =>
  import('react-breakpoints').then((mod) => mod.Media)
)
import ReactBreakpoints from 'react-breakpoints'
import styles from './Layout.module.css'
import { useRef, useEffect, useState } from 'react'

const Layout = (props) => {
	const [scrollAdded, setScrollAdded] = useState(false)
	const [ticking, setTicking] = useState(false)
	const [sticky, setSticky] = useState(false)
	const [lastScrollY, setLastScrollY] = useState(0)

	const body = useRef()
	const breakpoints = {
		mobile: 320,
		mobileLandscape: 480,
		tablet: 768,
		tabletLandscape: 1024,
		desktop: 1200,
		desktopLarge: 1500,
		desktopWide: 1920,
	}
	// useEffect( () => {
	// 	// console.log(headerRef);
	// 	if (!scrollAdded && body.current) {
	// 		//when to remove??
	// 		window.addEventListener('scroll', handleScroll, true);
	// 		setScrollAdded(true)
	// 	}
	// }, [])

	// const handleScroll = () => {
	// 	// setLastScrollY(window.scrollY)
	// 	if (window.pageYOffset > 0) {
	// 		setSticky(true)
	// 	} else {
	// 		setSticky(false)
	// 	}
	// 	// if (!ticking) {
	// 	// 	window.requestAnimationFrame(() => {
	// 	// 		console.log(lastScrollY)
	// 	// 		body.current.style.top = `${lastScrollY}px`
	// 	// 		setTicking(false)
	// 	// 	});
	// 	// 	setTicking(true)
	// 	// }
	// }
	return (
		<div className={styles.main}>
			<ReactBreakpoints breakpoints={breakpoints}>
				<Media>
					{({ breakpoints, currentBreakpoint }) => 
					breakpoints[currentBreakpoint] >= breakpoints.tablet ?
						<div>
							<img className={styles.glass} src="/glass.png"></img>
							<div className={styles.whiteSpace}></div>
						</div>
						: ""
					}
				</Media>
				<Header/>
				<Media>
					{({ breakpoints, currentBreakpoint }) => 
					breakpoints[currentBreakpoint] >= breakpoints.tablet ?
						<div className={styles.content}>
							{props.children}
						</div>
						:
						<div className={classNames(styles.content, styles.mContent)}>
							{props.children}
						</div>
					}
				</Media>
			</ReactBreakpoints>
		</div>
	);
}

export default Layout