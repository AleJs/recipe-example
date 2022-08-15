import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styled from "styled-components";
import {Link} from "react-router-dom"
const Popular = () => {
  const [popular, setpopular] = useState([]);

  useEffect(() => {
    listPopular();
  }, []);

  const listPopular = async () => {

  
        
        const api = `https://api.spoonacular.com/recipes/random?apiKey=6093abd3a0564dfab728be6345760e72&number=9`;
        const data = await fetch(api);
        const recipesList = await data.json();
        setpopular(recipesList.recipes);
  
  };

  return (
 
      <Wrapper>
        <h3>Trendng Recipe</h3>
        <Splide 
            options={{
                perPage:4,
                arrow:false,
                pagination:false,
                drag:"free",
                gap:"5rem"
            }}
        >
          {popular.map((recipes,key) => {
            return (
              <SplideSlide>
                <Card>
                  <Link to={"/recipe/" + recipes.id}>
                  
                  <p>{recipes.title}</p>
                  <img src={recipes.image} alt="" />
                  <Gradient/>
                  
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    
  );
};
const Card = styled.div`
  min-height: 25rem;

  overflow: hidden;
 position: relative;


  img {
      border-radius: 2rem;
    position: absolute;
    left:0;
    height: 100%;

    object-fit: cover;
    width: 100%;
  }
  p{
    position: absolute;
    z-index: 11;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 1em;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Wrapper = styled.div`
  margin: 2rem 0rem;
  width: 100%;
`;

// oscureser fondo izi 
const Gradient = styled.div `
    z-index: 10;
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Popular;
