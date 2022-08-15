import React,{useState, useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import {Card, Grid} from './Cuisine';
import { Loader,Divloader } from '../components/Loader';

const Searched = () => {

    const  [search, setSearch] = useState('')
    
    let params = useParams();

    useEffect(() => {
       getSearch(params.search)
      console.log(params)
    
    }, [params.search])

    const getSearch = async (name) =>{
      
    const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=6093abd3a0564dfab728be6345760e72&number=12&query=${name}`;
    const data = await fetch(api)
    
    const searchData =  await data.json()
    setSearch(searchData.results)
  
  }
  
  
  
  return (
    <Grid>
        {search === '' ?   <Divloader><Loader/>  </Divloader>
      
      
      :
        search?.map((recipes) =>{          
         return (
           <Link to={"/recipe-example/" + recipes.id}>
 
 
             <Card key={recipes.id}>
                 <img src={recipes.image} alt="food" />
                 <h4>{recipes.title}</h4>
             </Card>
           </Link>
         )
         })

       
      }
   
    </Grid>
  )
}

export default Searched