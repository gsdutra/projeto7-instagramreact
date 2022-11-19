const sugestaoObj = [
	{nome: "bad.vibes.memes", razao: "Segue você", img: "./assets/img/bad.vibes.memes.svg"},
	{nome: "chibirdart", razao: "Segue você", img: "./assets/img/chibirdart.svg"},
	{nome: "razoesparaacreditar", razao: "Novo no Instagram", img: "./assets/img/razoesparaacreditar.svg"},
	{nome: "adorable_animals", razao: "Segue você", img: "./assets/img/adorable_animals.svg"},
	{nome: "smallcutecats", razao: "Segue você", img: "./assets/img/smallcutecats.svg"}
];

export default function Sugestoes(){
	return(
		<div class="sugestoes">
			<div class="titulo">
			Sugestões para você
			<div>Ver tudo</div>
			</div>

			<RenderizarSugestoes/>
		</div>
	)
}

function RenderizarSugestoes(){
	return(sugestaoObj.map((u) =>
		<div class="sugestao">
			<div class="usuario">
				<img src={u.img} />
				<div class="texto">
				<div class="nome">{u.nome}</div>
				<div class="razao">{u.razao}</div>
				</div>
			</div>
			<div class="seguir">Seguir</div>
		</div>)
	)
}