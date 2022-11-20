import React, { useState } from "react"

const usuario = {
	user: "catanacomics",
	name: "Catana",
	img: "./assets/img/catanacomics.svg"		
}

export default function Usuario(){

	const [nome, setNome] = React.useState(usuario.name);

	return(
		<div class="usuario">
		<img src={usuario.img} />
		<div class="texto">
			<strong>{usuario.user}</strong>
			<span>
				{nome}
				<ion-icon name="pencil" onClick={changeName}></ion-icon>
			</span>
		</div>
	</div>
	)

	function changeName(){
		const newName = prompt("Insira um novo nome");
		newName? setNome(newName) : changeName();
	}
		
}

//onClick={()=>setNome(prompt("Insira um novo nome"))