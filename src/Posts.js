import React from "react";
import Post from "./Post.js";

const postsObj = [
  {userImg: "./assets/img/meowed.svg",
  userName: "meowed",
  imgSrc:"./assets/img/gato-telefone.svg",
  lastLikedName:"respondeai",
  lastLikedImg:"./assets/img/respondeai.svg",
  likes: 101523
  },
  {userImg: "./assets/img/barked.svg",
  userName: "barked",
  imgSrc:"./assets/img/dog.svg",
  lastLikedName:"adorable_animals",
  lastLikedImg:"./assets/img/adorable_animals.svg",
  likes: 99159
  }
];

export default function Posts(){
    return(
        <div class="posts">
			
			{postsObj.map((index)=>
				<Post
				userImg ={index.userImg}
				userName ={index.userName}
				imgSrc = {index.imgSrc}
				lastLikedName = {index.lastLikedName}
				lastLikedImg = {index.lastLikedImg}
				likes = {index.likes}
			
				/>)
			}
              
        </div>
    )
}