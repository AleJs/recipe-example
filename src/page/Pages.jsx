import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import Recipes from "./Recipes"
const Pages = () => {
  return (
   
     
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>}/>
      <Route path="/search/:search" element={<Searched/>}/>
      <Route path="/recipes/:name" element={<Recipes/>}/>
      </Routes>

  
  )
}

export default Pages