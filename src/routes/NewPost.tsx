import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const createPost = async (e) => {
		e.preventDefault();

		const post = { title, body, userId: 1 };

		await blogFetch.post("/posts", {
			body: post,
		})

		navigate("/")
	};
	
	return (
		<div>
			<h2 className="mb-4 text-clip">Inserir novo Post:</h2>
			<form
				className="w-full max-w-lg mx-auto my-0"
				onSubmit={(e) => createPost(e)}
			>
				<div className="flex flex-col mb-4">
					<label htmlFor="title" className="mb-2">
						Título:
					</label>
					<input
						type="text"
						name="title"
						placeholder="Digite o título"
						className="p-2 text-black border-none rounded-md"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="body" className="mb-2">
						Conteúdo:
					</label>
					<textarea
						name="body"
						id="body"
						placeholder="Digite o conteúdo"
						className="p-2 text-black border-none rounded-md"
						onChange={(e) => setBody(e.target.value)}
					></textarea>
				</div>
				<input
					type="submit"
					value="Criar Post"
					className="p-2 rounded-md btn"
				/>
			</form>
		</div>
	);
}
