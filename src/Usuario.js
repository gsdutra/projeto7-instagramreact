import React, { useState } from "react"

const usuario = {
	user: "catanacomics",
	name: "Catana",
	img: "./assets/img/catanacomics.svg"		
}

export default function Usuario(){

	const [nome, setNome] = React.useState(usuario.name);
	const [profPic, setPfp] = React.useState(usuario.img);

	return(
		<div class="usuario" data-test="user">
		<img src={profPic} data-test="profile-img" onClick={changePfp}/>
		<div class="texto">
			<strong>{usuario.user}</strong>
			<span>
				<span data-test="name">{nome}</span>
				<ion-icon name="pencil" data-test="edit-name" onClick={changeName}></ion-icon>
			</span>
		</div>
	</div>
	)

	function changeName(){
		const newName = prompt("Insira um novo nome");
		newName? setNome(newName) : changeName();
	}
		
	function changePfp(){
		const newPfp = prompt("Insira o link da sua foto de perfil");
		if (newPfp){setPfp(newPfp)};
	}
}
