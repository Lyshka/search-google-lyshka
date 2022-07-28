import Links from "./Links";
import {useDebounce} from "use-debounce";
import {useEffect, useState} from "react";
import { useResultContext } from "../contexts/ResultContextProvider";

const Search = () => {
	const [text, setText] = useState('')
	const {setSearchTerm} = useResultContext()
	const [debouncedValue] = useDebounce(text, 500)

	useEffect(() => {
		if(debouncedValue) setSearchTerm(debouncedValue)
	}, [debouncedValue])

	return (
		<div className="relative sm:-mt-10 mt-3">
			<input
				type="text"
				value={text}
				className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
				onChange={e => setText(e.target.value)}
				placeholder="Search Lyshka or type URL"
			/>
			{text && (
				<button
					type="button"
					className="absolute top-1.5 right-4 text-2xl text-gray-500"
					onClick={() => setText('')}
				>
					X
				</button>
			)}
			<Links />
		</div>
	);
};

export default Search;