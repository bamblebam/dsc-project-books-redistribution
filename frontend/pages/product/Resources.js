import ModalCard from '../../components/ModalCard'
import SearchBar from '../../components/SearchBar'
import resourcesStyle from '../../styles/css/Resources.module.css'
import firebaseApp from '../../configurations/db'
import axios from 'axios'
import firebase from 'firebase/app'

const Resources = () => {
	let Items = []
	let body = {
		userId: '95GhG5U6Yi7aSInxZyPs',
	}
	axios
		.get('http://localhost:8080/books/getbooks/95GhG5U6Yi7aSInxZyPs')
		.then(res => {
			Items = res.data
			console.log(res.data)
			Items.map((data, key) => {
				console.log(data)
			})
			console.log('hwhehe')
		})
	return (
		<div className={resourcesStyle.container}>
			<div className={resourcesStyle.head}>
				<SearchBar searchText='Search Resources...' link='/' />
			</div>
			<div className={resourcesStyle.main}>
				{Items.map(data => {
					let bookDesc = data.description.slice(0, 75) + '...'
					console.log(bookDesc)
					return (
						<ModalCard
							key={data.id}
							author={data.author}
							bookName={data.booktitle}
							price={data.price}
							location={data.location}
							year={data.year}
							bookDesc={data.description.slice(0, 75) + '...'}
							text={data.description}
							imgSrc={data.bookImg}
							imgAlt={data.imgAlt}
							link={data.link}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Resources
