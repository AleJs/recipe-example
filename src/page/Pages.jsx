import {Route, Routes} from "react-router-dom"
import Home from "./Home"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import Recipes from "./Recipes"
const Pages = () => {
  return (
   
     
      <Routes>
      <Route path="/recipe-example/" element={<Home/>}/>
      <Route path="/recipe-example/cuisine/:type" element={<Cuisine/>}/>
      <Route path="/recipe-example/search/:search" element={<Searched/>}/>
      <Route path="/recipe-example/:name" element={<Recipes/>}/>
      </Routes>

  
  )
}

export default Pages