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
import Fuse from 'fuse.js'
import React, { useState, useEffect } from 'react'

const Resources = ({ data }) => {
	let body = {
		userId: '95GhG5U6Yi7aSInxZyPs',
	}

	const [slideRows, setSlideRows] = useState([])
	const [searchTerm, setSearchTerm] = useState('')
	let items = data

	useEffect(() => {
		setSlideRows([items])
	}, [items])

	useEffect(() => {
		const fuse = new Fuse(slideRows, { keys: ['Title', 'Description'] })
		const results = fuse.search(searchTerm).map(({ item }) => item)

		console.log('results :', results)
		if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
			console.log(results)
			setSlideRows(results)
		} else {
			setSlideRows(items)
		}
	}, [searchTerm])

	return (
		<div className={resourcesStyle.container}>
			<div className={resourcesStyle.head}>
				<SearchBar searchText={searchTerm} setSearchTerm={setSearchTerm} link='/' />
			</div>
			<div className={resourcesStyle.main}>
				{slideRows.map((values, key) => {
					return (
						<ModalCard
							key={key}
							bookId={values.id}
							bookName={values.Title}
							// bookDesc={values.Description.slice(0, 75) + '...'}
							bookDesc={values.Description}
							text={values.Description}
							imgSrc={values.image}
							imgAlt={values.Title}
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
		// 'http://localhost:8080/books/getbooks/1kY7ymskNraVdl5SmgYTPtr7Xgq1'
		'http://localhost:8080/books/booksWithUser'
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
