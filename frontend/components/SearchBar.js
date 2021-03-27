import searchBarStyles from '../styles/css/SearchBar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ searchText,setSearchTerm, link }) => {
	
	const focusInput = () => {
		if (process.browser) {
			document.getElementById('input').focus()
		}
	}
	return (
		<div className={searchBarStyles.main} onClick={focusInput}>
			<input
				id='input'
				className={searchBarStyles.input}
				placeholder={searchText}
				autoFocus
				value={searchText}
                onChange={({ target }) => setSearchTerm(target.value)}
			></input>
			<button className={searchBarStyles.button}>
				<a href={link}>
					<FontAwesomeIcon
						className={searchBarStyles.icon}
						icon={faSearch}
					></FontAwesomeIcon>
				</a>
			</button>
		</div>
	)
}
export default SearchBar
