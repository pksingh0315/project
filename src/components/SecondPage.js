import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import style from "./Data.module.css"

const SecondPage = (props) => {
    const {data}=useContext(Context)
    
  return(
    <div className={style.second}>  
        {data.map((el)=>(
        
            <div  className={style.name}>
            <div className={style.imagediv} > <img  className={style.image} src={el.images.large} alt="error"/></div>
            <div className={style.uplavel} >
                <div className={style.level} >
              <p><p>Name :</p>{el.name}</p>
                <p><p>Level :</p> {el.level}</p>
                <p> <p>hp :</p>  {el.hp}</p>
                </div>
                <p  className={style.abilities1}>ABILITES</p>
                <div className={style.abilities2} >
                    
                        

                    {el.abilities!==undefined?<div>

                    {el.abilities.map((t)=>
                      
                (
                    
                    <div className={style.abilities3} >
                        
                        <div><p><p>Name :</p> {t.name}</p></div>
                      
                       <div className={style.abilities4} > <p><p>Text :</p> {t.text}</p></div>
                       
                       <div><p> <p>Type :</p>  {t.type}</p></div>
                    </div>
                    )
                   )} 
                  </div> :<div>data not found</div> }

                  
                    
                </div>
                <p  className={style.attacks1}>ATTACKS</p>
                <p>{el.attacks.map((a)=>(
                    <div className={style.attacks2} >
                       <p>{a.cost.map((q)=>(
                        <div> <p>Cast : </p>  {q}</div>
                       ))}</p> 
                   
                    <p>  <p>Damage :</p> {a.damage}</p>
                    <p><p>Name :</p> {a.name}</p>
                    </div>
                ))}</p>
                <Link to="/">
                <button className={style.homepagebutton} >Go to home page</button>
                </Link>
            </div>
             
        
        
            </div>
        ))}
    </div>
  )
    
  
};

export default SecondPage;
