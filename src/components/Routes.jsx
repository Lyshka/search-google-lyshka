import {Route, Routes, Navigate} from "react-router-dom"
import Results from "./Results";

const Router = () => {
	return (
		<div className="p-4">
			<Routes>
				<Route path='/' element={<Navigate from='/' to='/search' />} />
				<Route path='/search' element={<Results />} />
				<Route path='/image' element={<Results />} />
				<Route path='/news' element={<Results />} />
				<Route path='/videos' element={<Results />} />
			</Routes>
		</div>
	);
};

export default Router;