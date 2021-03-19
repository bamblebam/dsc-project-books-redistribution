import ModalCard from "../../components/ModalCard";
import SearchBar from "../../components/SearchBar";
import resourcesStyle from "../../styles/css/Resources.module.css";
import { test } from "../../data/testData";

const Resources = () => {
	const Items = test.slice(0, 3);
	return (
		<div>
			<div className={resourcesStyle.head}>
				<SearchBar searchText="Search Resources..." link="/" />
			</div>
			<div className={resourcesStyle.main}>
				{Items.map((data, key) => {
					let bookDesc = data.text.slice(0, 75) + "...";
					console.log(bookDesc);
					return (
						<ModalCard
							key={key}
							author={data.author}
							bookName={data.bookName}
							price={data.price}
							location={data.location}
							year={data.year}
							bookDesc={data.text.slice(0, 75) + "..."}
							text={data.text}
							imgSrc={data.imgSrc}
							imgAlt={data.imgAlt}
							link={data.link}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Resources;
