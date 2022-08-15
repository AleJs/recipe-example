import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  const [active, setActive] = useState("Sumary");
  let params = useParams();

  useEffect(() => {
    console.clear()
  
    getRecipeInfo(params.name)
  }, [params.name]);

  const getRecipeInfo = async (name) => {
    const api = `https://api.spoonacular.com/recipes/${name}/information?apiKey=6093abd3a0564dfab728be6345760e72`;
    const data = await fetch(api);
    const recipeData = await data.json();
    setRecipe(recipeData);
    console.log(recipeData)
  };

 
  return (
    <Wrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
      </div>
      <Info>
        <Button
          className={active === "Sumary" ? "active" : ""}
          onClick={() => setActive("Sumary")}
        >Sumary</Button>
        <Button 
        className={ active === "Ingredients" ? "active" : "" } 
        onClick={()=> setActive("Ingredients") }
        >Ingredients</Button>

            <div>
               {
                active === "Sumary" ? 
                <h3 dangerouslySetInnerHTML={{__html: recipe.summary}}></h3> 

                :
                (
                    <div>
                        <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
                        <ul>
                           {
                             recipe.extendedIngredients?.map((ingredients)=>(

                                 <li > {ingredients.original}</li>
                             )
                                
                            )

                           
                            }
                                
                            
                        </ul>
                    </div>
                )
                   


               } 
            </div>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    max-width: 1440px;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color:white;

    }
    h2{
      text-align  : center;
      margin-bottom: 2rem;
    }

   

`
const Info = styled.div`
    margin-left: 4rem;
    margin-bottom: 2rem;

    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul{
        margin-top:2rem;
    }

`;
const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;
export default Recipes;
