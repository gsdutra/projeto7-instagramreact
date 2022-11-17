import gag from './assets/img/9gag.svg'
import adorable from './assets/img/9gag.svg'
import bad from './assets/img/9gag.svg'
import barked from './assets/img/9gag.svg'
import cat from './assets/img/9gag.svg'
import chi from './assets/img/9gag.svg'
import dog from './assets/img/9gag.svg'
import filomoderna from './assets/img/9gag.svg'
import gato from './assets/img/9gag.svg'

import Navbar from "./Navbar.js"
import Corpo from "./Corpo.js"
import FundoMobile from "./FundoMobile.js"

export default function App() {
    return (
        <div>
          <div class="root">
            <Navbar/>
        
            <Corpo/>
        
            <FundoMobile/>
          </div>
        
          <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>
    )
}