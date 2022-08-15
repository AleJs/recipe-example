import React,{useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import  styled  from 'styled-components'

const Cuisine = () => {


const [cuisine, setcuisine] = useState([])


    let params = useParams();

    useEffect(() => {
       getcusine(params.type)
    
    }, [params])
    


const getcusine = async (name) =>{
        console.log(name);
    const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=6093abd3a0564dfab728be6345760e72&number=12&cuisine=${name}`;
    const data = await fetch(api)
    const cuisineData =  await data.json()
    setcuisine(cuisineData.results)
  
}


  return (
    <Grid>
        {cuisine.map((recipes) =>{
          
        return (
            <Link to={"/recipe-example/" + recipes.id}>


            <Card key={recipes.id}>
                <img src={recipes.image} alt="food" />
                <h4>{recipes.title}</h4>
            </Card>
            </Link>
        )
        })}
    </Grid>
  )
};

const Grid = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    width: 100vw;
    max-width: 1440px;
`

const Card = styled.div`

    img{
        width: 100%;
        border-radius: 2em;
    }
    a{
        text-decoration: none;

    }
    h4{
        text-align: center;
        padding: 1em;
    }

`


export {Card, Grid}
export default Cuisine