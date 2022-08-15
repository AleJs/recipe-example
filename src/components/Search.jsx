import React from 'react'
import { useState } from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

const Search = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const inputSubmit = (e) =>{
        e.preventDefault()
        navigate("/search/" + input)
    }
  
    return (
      <FormStyle onSubmit={inputSubmit} action="">
        <FaSearch/>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        
    </FormStyle>
  )



}

const FormStyle = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 20rem;
    position: relative;
    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 4rem;
        border-radius: 1rem;
        outline: none;
        width: 40%;
        /* max-width: 1024px; */
    }
    svg{
        left: 31%;
        position: absolute;
        z-index: 100;
        font-size: 1.5rem;
        color: white;

    }
`


export default Search