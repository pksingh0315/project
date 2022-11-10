import React, { useCallback, useContext, useEffect, useState } from 'react'
import style from './Data.module.css'
import { Link } from 'react-router-dom'
import { Context } from './Context'
const Data = (props) => {
    console.log(props)
    const [movies,setMovies]=useState([])
    const [loading,setloading]=useState(false)
    const [error,seterror]=useState(false)
    const {handleadd}=useContext(Context)
  
   let url='https://api.pokemontcg.io/v2/cards?page=1&pageSize=100'
    const fetchData= useCallback(async()=>{
      setloading(true)
      seterror(false)
      try{
        let response=await fetch(url)
        if(!response.ok){
          throw new Error('Something Went Wrong!')
        }
        let pokmonData=await response.json()
      
        const pokemonList=pokmonData.data
      
        setloading(false)
        seterror(false)
        setMovies(pokemonList)
        
      }catch(Error){
        seterror(true)
        setloading(false)
      }
      setloading(false)
    }, [url])
  
    useEffect(()=>{fetchData()},[fetchData])

    
    

  return (
    <>
       
        <div className={style.itemList}>

            {loading && <div>...loading</div>}
            {error && <div>...error</div>}
            {movies.map((ele,index)=>{
                return(
                    <div key={index} className={style.main} >
                        <img className={style.width} src={ele.images.small} alt="error"/>

                        <div>
                       
                        <Link to="/second">
                        <button className={style.button}  onClick={()=>handleadd(ele)}> 
                        {ele.name}
                           
                        </button>
                        </Link>
                        </div>
                       
                        
                    </div>
                )
        })}
        </div>
    </>
  )
}

export default Data