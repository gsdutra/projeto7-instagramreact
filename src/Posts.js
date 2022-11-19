const postsObj = [
  {userImg: "./assets/img/meowed.svg",
  userName: "meowed",
  imgSrc:"./assets/img/gato-telefone.svg",
  lastLikedName:"respondeai",
  lastLikedImg:"./assets/img/respondeai.svg",
  likes: 101.523
  },
  {userImg: "./assets/img/barked.svg",
  userName: "barked",
  imgSrc:"./assets/img/dog.svg",
  lastLikedName:"adorable_animals",
  lastLikedImg:"./assets/img/adorable_animals.svg",
  likes: 99.159
  }
];

export default function Posts(){
    return(
        <div class="posts">
        
              <RenderPosts/>    
              
        </div>
    )
}

function RenderPosts(){
	return(
		postsObj.map((u)=>
		<div class="post">
			<div class="topo">
				<div class="usuario">
				<img src={u.userImg} />
				{u.userName}
				</div>
				<div class="acoes">
				<ion-icon name="ellipsis-horizontal"></ion-icon>
				</div>
			</div>

			<div class="conteudo">
				<img src={u.imgSrc} />
			</div>

			<div class="fundo">
				<div class="acoes">
				<div>
					<ion-icon name="heart-outline"></ion-icon>
					<ion-icon name="chatbubble-outline"></ion-icon>
					<ion-icon name="paper-plane-outline"></ion-icon>
				</div>
				<div>
					<ion-icon name="bookmark-outline"></ion-icon>
				</div>
				</div>

				<div class="curtidas">
				<img src={u.lastLikedImg} />
				<div class="texto">
					Curtido por <strong>{u.lastLikedName}</strong> e <strong>outras {u.likes} pessoas</strong>
				</div>
				</div>
			</div>
			</div>
		)
	)
}