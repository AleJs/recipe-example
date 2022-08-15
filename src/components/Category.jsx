
import {FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import {NavLink} from "react-router-dom"

import styled from "styled-components";

import React from 'react'

function Category() {
  return (
    <List>
        <Slink to={
            "/recipe-example/cuisine/italian"
        }>
            <FaPizzaSlice/>
            <h4>italian</h4>
        </Slink>
        <Slink    to={
            "/recipe-example/cuisine/american"
        }>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={
            "/recipe-example/cuisine/thai"
        }>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={
            "/recipe-example/cuisine/Korean"
        }>
            <GiChopsticks/>
            <h4>Korean</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    font-size: 5em;
    display:flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 0.5em;
    
   div{
    
        margin-left: 1em;
   }
`
const Slink = styled(NavLink)`

display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor:pointer;
transform: scale(0.9);


h4{
    color: white;
    font-size: 0.9rem;
}

svg{
    color: white;
    font-size: 3rem;
    margin-bottom: 5px;
}
&.active{
    background: linear-gradient(to right,#fc4a1a, #f7b733);
    svg{
        color: white;
    }
    h4{
        color: white;
    }
}
`





export default Category