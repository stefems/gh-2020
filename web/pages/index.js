// index.js
import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import styles from './index.module.css'
import Layout from '../components/structure/Layout/Layout'

const Index = (props) => {
	// const { posts = [] } = props
	
	return (
		<React.Fragment>
			<Layout>
				<div>test</div>
				{/* <div className={styles.postsContainer}>
					{posts.map( ({ _id, title = '', slug = '', _updatedAt = '' }) =>
						slug && (
						<li key={_id}>
							<Link href="/post/[slug]" as={`/post/${slug.current}`}>
								<a>{title}</a>
							</Link>{' '}
							({new Date(_updatedAt).toDateString()})
						</li>
						)
					)}
				</div> */}
			</Layout>
		</React.Fragment>
	)
}

// Index.getInitialProps = async () => ({
// 	posts: await client.fetch(groq`
// 	  *[_type == "post"]|order(publishedAt desc)
// 	`)
// })

export default Index;