export default function NewPost() {
	return (
		<div>
			<h2>Inserir novo Post:</h2>
			<form>
				<div>
					<label htmlFor="title">Título:</label>
					<input type="text" name="title" placeholder="Digite o título" />
				</div>
        <div>
          <label htmlFor="body">Conteúdo</label>
        </div>
			</form>
		</div>
	);
}
