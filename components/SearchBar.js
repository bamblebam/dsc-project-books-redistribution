import searchBarStyles from "../styles/css/SearchBar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchText, link }) => {
	return (
		<div className={searchBarStyles.main}>
			<input className={searchBarStyles.input} placeholder={searchText}></input>
			<button className={searchBarStyles.button}>
				<a href={link}>
					<FontAwesomeIcon
						className={searchBarStyles.icon}
						icon={faSearch}
					></FontAwesomeIcon>
				</a>
			</button>
		</div>
	);
};
export default SearchBar;
