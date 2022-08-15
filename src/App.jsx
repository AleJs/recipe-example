
import Pages from "./page/Pages"
import Category from "./components/Category"
import {BrowserRouter} from "react-router-dom"

import './app.css'
import Search from "./components/Search"
import { useState } from "react"
import {Link} from "react-router-dom"

function App() { 
  const [recetas, setRecetas] = useState('')

  return (
    <div className="app">
       <BrowserRouter>
       
      <h1 to={"/"} >recetas</h1>
      <Search />
      <Category/>
      <Pages/>
       
       </BrowserRouter>
    </div>
  )
}

export default App
