import {Link} from "react-router-dom";
import Search from "./Search"

const Navbar = ({setDarkTheme, darkTheme}) => {
	return (
		<div className="p-5 pb-0 flex flex-wrap justify-center items-center border-b dark:border-gray-700 border-gray-200">
			<div className="flex justify-between items-center space-x-5 w-screen">
				<Link to={'/'}>
					<p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded-2xl dark:bg-gray-500 dark:text-gray-900">
						Search Lyshka 🔎
					</p>
				</Link>
				<button
					type="button"
					onClick={() => setDarkTheme(!darkTheme)}
					className="text-xl dark:bg-gray-200 dark:text-gray-900 bg-gray-500 border rounded-full px-2 py-1 hover:shadow-lg"
				>
					{darkTheme ? 'Light 💡' : 'Dark 🌙'}
				</button>
			</div>
			<Search />
		</div>
	);
};

export default Navbar;