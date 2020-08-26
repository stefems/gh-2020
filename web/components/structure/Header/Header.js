import dynamic from 'next/dynamic'
import styles from './Header.module.css';
import Link from 'next/link'
// import { Media } from 'react-breakpoints'
const Media = dynamic(() =>
  import('react-breakpoints').then((mod) => mod.Media)
)
const Header = (props) => {
	const mobileLayout = (
		<div>
			<div className={styles.mContainer}>
				<div className={styles.top}>
					<Link href="/" as={`/`}>
						<img src={'/gh.png'} className={styles.gh}></img>
					</Link>
					<div>
						<h1 className={styles.title}>Glass</h1>
						<h1 className={styles.title}>House</h1>
					</div>
				</div>
				<div className={styles.bottom}>
					<Link href="/About" as={`/About`}>
						<a className={styles.navLink}>About</a>
					</Link>
					<Link href="/Contact" as={`/Contact`}>
						<a className={styles.navLink}>Contact</a>
					</Link>
					<span className={styles.navLink}>
						Search
					</span>
					<span className={styles.navLink}>
						Filter
					</span>
				</div>
			</div>
		</div>
	)
	const desktopLayout = (
		<div className={props.sticky ? styles.sticky : ''}>
			<div className={styles.container}>
				<h1 className={styles.title}>GLASS HOUSE</h1>
				<div className={styles.navLeft}>
					<Link href="/About" as={`/About`}>
						<a className={styles.navLink}>About</a>
					</Link>
					<Link href="/Contact" as={`/Contact`}>
						<a className={styles.navLink}>Contact</a>
					</Link>
				</div>
				<Link href="/" as={`/`}>
					<img src={'/gh.png'} className={styles.gh}></img>
				</Link>
				<div className={styles.navRight}>
					<span className={styles.navLink}>
						Search
					</span>
					<span className={styles.navLink}>
						Filter
					</span>
				</div>
			</div>
		</div>
	)
	const fixedLayout = (
		<div>
			<div className={styles.sContainer}>
				<div className={styles.top}>
					<Link href="/" as={`/`}>
						<img src={'/gh.png'} className={styles.gh}></img>
					</Link>
					<h1 className={styles.title}>Glass House</h1>
				</div>
				<div className={styles.bottom}>
					<Link href="/About" as={`/About`}>
						<a className={styles.navLink}>About</a>
					</Link>
					<Link href="/Contact" as={`/Contact`}>
						<a className={styles.navLink}>Contact</a>
					</Link>
					<span className={styles.navLink}>
						Search
					</span>
					<span className={styles.navLink}>
						Filter
					</span>
				</div>
			</div>
		</div>
	)
	if (props.sticky) {
		return (
			fixedLayout
		)
	}
	return (
		<div>
			<Media>
				{({ breakpoints, currentBreakpoint }) =>
					breakpoints[currentBreakpoint] >= breakpoints.tablet ? (
						desktopLayout
					) : (
						mobileLayout
					)
				}
			</Media>
		</div>
		
	)
}

export default Header;