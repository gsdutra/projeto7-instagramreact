import React from "react";

export default function Post(props){

	const [likePost, setLike] = React.useState("heart-outline");
	const [likeColor, setColor] = React.useState("black");
	const [likeNum, setNum] = React.useState(props.likes);
	const [savePost, setSave] = React.useState("bookmark-outline");
	const [bigHeart, setHeart] = React.useState("likeHeart");

	const formattedLikes = likeNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	return(
		<div class="post" data-test="post">
			<div class="topo">
				<div class="usuario">
				<img src={props.userImg} alt=""/>
				{props.userName}
				</div>
				<div class="acoes">
				<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img src={props.imgSrc} alt="" onDoubleClick={doubleLike} onClick={doubleLike} data-test="post-image"/>
				<ion-icon name="heart" class={bigHeart}></ion-icon>
			</div>

			<div class="fundo">
				<div class="acoes">
				<div>
					<ion-icon name={likePost} style={{color: likeColor}} onClick={like} data-test="like-post"></ion-icon>
					<ion-icon name="chatbubble-outline"></ion-icon>
					<ion-icon name="paper-plane-outline"></ion-icon>
				</div>
				<div>
					<ion-icon name={savePost} onClick={save} data-test="save-post"></ion-icon>
				</div>
				</div>

				<div class="curtidas">
				<img src={props.lastLikedImg} alt=""/>
				<div class="texto">
					Curtido por <strong>{props.lastLikedName}</strong> e <strong>outras <span data-test="likes-number">{formattedLikes}</span> pessoas</strong>
				</div>
				</div>
			</div>
			</div>
		)
	function like(){
		likePost ==='heart'? toggleLike('dislike'):toggleLike('like');
	}

	function toggleLike(action){
		if (action === 'like'){
			setLike('heart');
			setColor('red');
			setNum(likeNum + 1);
		}else{
			setLike('heart-outline');
			setColor('black');
			setNum(likeNum - 1);
		}
	}

	function save(){
		savePost === "bookmark"? setSave('bookmark-outline') : setSave('bookmark');
	}

	function doubleLike(){

		setHeart("likeHeartAfter");
		setTimeout(backLike, 500);

		if (likePost === 'heart-outline'){
			toggleLike('like');
		}
	}

	function backLike(){
		setHeart("likeHeart");
	}
}