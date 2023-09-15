import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<div className="max-w-screen-lg mt-8 m-auto px-8">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default App;
