import ModalCard from '../../components/ModalCard'
import SearchBar from '../../components/SearchBar'
import resourcesStyle from '../../styles/css/Resources.module.css'
import firebaseApp from '../../configurations/db'
import axios from 'axios'
import firebase from 'firebase/app'
import ReactHtmlParser, {
	processNodes,
	convertNodeToElement,
	htmlparser2,
} from 'react-html-parser'

const Resources = ({ data }) => {
	let body = {
		userId: '95GhG5U6Yi7aSInxZyPs',
	}

	// let items = []
	// axios
	// 	.get('http://localhost:8080/books/getbooks/95GhG5U6Yi7aSInxZyPs')
	// 	.then(res => {
	// 		items = [...res.data]
	// 	})
	// let items = []
	// function axiosTest() {
	// 	// create a promise for the axios request
	// 	const promise = axios.get(
	// 		'http://localhost:8080/books/getbooks/95GhG5U6Yi7aSInxZyPs'
	// 	)
	// 	// using .then, create a new promise which extracts the data
	// 	const dataPromise = promise.then(response => response.data)
	// 	// return it
	// 	return dataPromise
	// }

	// // now we can use that data from the outside!
	// axiosTest()
	// 	.then(data => {
	// 		items = data
	// 		console.log('my data', items)
	// 	})
	// 	.catch(err => console.log(err))

	let items = data
	return (
		<div className={resourcesStyle.container}>
			<div className={resourcesStyle.head}>
				<SearchBar searchText='Search Resources...' link='/' />
			</div>
			<div className={resourcesStyle.main}>
				{items.map((values, key) => {
					return (
						<ModalCard
							key={key}
							bookName={values.booktitle}
							bookDesc={values.description.slice(0, 75) + '...'}
							text={values.description}
							imgSrc={values.bookImage}
							imgAlt={values.booktitle}
							link='/'
						/>
					)
				})}
			</div>
		</div>
	)
}
export async function getStaticProps() {
	const res = await axios.get(
		'http://localhost:8080/books/getbooks/95GhG5U6Yi7aSInxZyPs'
	)
	const data = await res.data

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { data }, // will be passed to the page component as props
	}
}

export default Resources
