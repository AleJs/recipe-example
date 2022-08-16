
import Pages from "./page/Pages"
import Category from "./components/Category"
import {BrowserRouter} from "react-router-dom"

import './app.css'
import Search from "./components/Search"
import { useState } from "react"
import {Link} from "react-router-dom"
import styled from "styled-components";
import {FaHamburger} from "react-icons/fa";
import {Nav} from "./components/Loader"
function App() { 


  return (
    <div className="app">
       <BrowserRouter>
       
      <Nav  >

        <Logo to={"/recipe-example"}> <FaHamburger/></Logo>
       <FontLogo to={"/recipe-example"}>
        After Cooking
       </FontLogo> 
      </Nav>
      <Search />
      <Category/>
      <Pages/>
       
       </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`

    text-decoration: none;
    font-size: 3.5rem;
    font-weight: 400;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`
const FontLogo = styled(Link)`
 text-decoration: none;
 font-family: cursive;
    font-size: 3em;
`

export default App
