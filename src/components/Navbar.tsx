import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="bg-[#17191F] flex items-center justify-between py-4 px-8">
			<h2 className="text-4xl opacity-100 font-bold">
				<Link to={"/"}>Blog</Link>
			</h2>
			<ul className="flex gap-4 items-center">
				<li className="text-zinc-400 hover:text-purple-800 transition">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="text-zinc-400 font-bold border border-white py-2 px-4 rounded-2xl hover:text-purple-800 transition">
					<Link to={"/new"}>New Post</Link>
				</li>
			</ul>
		</nav>
	);
}
