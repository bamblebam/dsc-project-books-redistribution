import ModalCard from '../../components/ModalCard'
import SearchBar from '../../components/SearchBar'
import resourcesStyle from '../../styles/css/Resources.module.css'
import firebaseApp from '../../configurations/db'
import axios from 'axios'
import firebase from 'firebase/app'

const Resources = () => {
	let body = {
		userId: '95GhG5U6Yi7aSInxZyPs',
	}

	let items = []
	axios
		.get('http://localhost:8080/books/getbooks/95GhG5U6Yi7aSInxZyPs')
		.then(res => {
			items = res.data
		})
	// let items = temp

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
	// 		items.push(data)
	// 	})
	// 	.catch(err => console.log(err))

	console.log(items)
	items = Array(items)
	return (
		<div className={resourcesStyle.container}>
			<div className={resourcesStyle.head}>
				<SearchBar searchText='Search Resources...' link='/' />
			</div>
			<div className={resourcesStyle.main}>
				{items.map((data, index) => {
					console.log('THis is my data', data)
					return (
						<ModalCard
							key={index}
							imgSrc={data.bookImg}
							imgAlt={data.booktitle}
							bookName={data.booktitle}
							bookDesc={data.description}
							text={data.description}
							link='/'
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Resources
