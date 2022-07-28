import {NavLink} from "react-router-dom";

const links = [
	{url: '/search', text: '🔎 All'},
	{url: '/news', text: '📰 News'},
	{url: '/image', text: '📸 Images'},
	{url: '/videos', text: '📺 Videos'},
];

const Links = () => {
	return (
		<div className="flex sm:justify-around justify-between items-center mt-4">
			{links.map(({url, text}, idx) => (
				<NavLink
					key={idx}
					to={url}
					className="m-2 hover:scale-110 hover:text-blue-700 border-b-2 hover:dark:text-blue-300 hover:border-blue-700 pb-2"
				>
					{text}
				</NavLink>
			))}
		</div>
	);
};

export default Links;