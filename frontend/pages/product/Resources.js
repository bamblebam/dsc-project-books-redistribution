import ModalCard from "../../components/ModalCard";
import SearchBar from "../../components/SearchBar";
import resourcesStyle from "../../styles/css/Resources.module.css";
import { test } from "../../data/testData";

const Resources = () => {
	const Items = test.slice(0, 3);
	return (
		<div>
			<div className={resourcesStyle.head}>
				<h3>Some text </h3>
				<SearchBar />
			</div>
			<div className={resourcesStyle.main}>
				{Items.map((data, key) => {
					return (
						<ModalCard
							key={key}
							author={data.author}
							bookName={data.bookName}
							price={data.price}
							location={data.location}
							year={data.year}
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
