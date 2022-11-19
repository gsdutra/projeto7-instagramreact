const storiesObj = [
	{imgSrc: "./assets/img/9gag.svg",
	name: "9gag"
	},
	{imgSrc: "./assets/img/meowed.svg",
	name: "meowed"
	},
	{imgSrc: "./assets/img/barked.svg",
	name: "barked"
	},
	{imgSrc: "./assets/img/nathanwpylestrangeplanet.svg",
	name: "nathanwpylestrangeplanet"
	},
	{imgSrc: "./assets/img/wawawicomics.svg",
	name: "wawawicomics"
	},
	{imgSrc: "./assets/img/respondeai.svg",
	name: "respondeai"
	},
	{imgSrc: "./assets/img/filomoderna.svg",
	name: "filomoderna"
	},
	{imgSrc: "./assets/img/memeriagourmet.svg",
	name: "memeriagourmet"
	}
];

export default function Stories(){
		return(
				<div class="stories">        
				
									<RenderStories/>

									<div class="setinha">
										<ion-icon name="chevron-forward-circle"></ion-icon>
									</div>
								</div>
		)
}

function RenderStories(){
	return(
		storiesObj.map((u) =>
			<div class="story">
			<div class="imagem">
				<img src={u.imgSrc} />
			</div>
			<div class="usuario">
				{u.name}
			</div>
		</div>
		)
	)
}