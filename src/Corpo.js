import SideBar from "./SideBar.js"
import Stories from "./Stories.js"
import Posts from "./Posts.js"


export default function Corpo(){
    return(
        <div class="corpo">
              <div class="esquerda">
                <Stories/>
        
                <Posts/>
              </div>
        
              <SideBar/>
            </div>
    )
}