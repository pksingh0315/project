import React, { useCallback, useContext, useEffect, useState } from 'react'
import classes from './Data.module.css'
import { Link } from 'react-router-dom'
import SecondPage from './SecondPage'
import { Context } from './Context'
const Data = (props) => {
    console.log(props)
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const {handleadd}=useContext(Context)
  
   let url='https://api.pokemontcg.io/v2/cards?page=1&pageSize=100'
    const fetchData= useCallback(async()=>{
      setIsLoading(true)
      setError(null)
      try{
        let response=await fetch(url)
        if(!response.ok){
          throw new Error('Something Went Wrong!')
        }
        let pokmonData=await response.json()
      
        const pokemonList=pokmonData.data
      
        
        setMovies(pokemonList)
        
         //console.log(movieList)
      }catch(Error){
        setError(Error.message)
      }
      setIsLoading(false)
    }, [url])
  
    useEffect(()=>{fetchData()},[fetchData])

    const addSecondPage=(item)=>{
        console.log(item)
        props.x(item)
    }
  //****************** */
    let content=<p>No Data Found</p>
  
    if(error){
      content=<p>{error}</p>
    }
    if(isLoading){
      content=<p>Loading...</p>
    }
    if(movies.length>0){
    
   
    
  }
  return (
    <>
       
        <div className={classes.itemList}>
            {movies.map((ele,index)=>{
                // console.log(ele)
                return(
                    <div key={index} style={{width:"80%",marginTop:20}} >
                        <img style={{width:"100%"}} src={ele.images.small} alt="error"/>

                        <div>

                        <button style={{width:"90%",margin:5}} onClick={()=>handleadd(ele)}> <Link to="/second">
                        {ele.name}
                           
                        </Link></button>
                        </div>
                       
                        
                    </div>
                )
        })}
        </div>
        {/* <SecondPage lll={data}/> */}
    </>
  )
}

export default Data