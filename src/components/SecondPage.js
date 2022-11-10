import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { Context } from "./Context";

const SecondPage = (props) => {
    const {data}=useContext(Context)
    // const[load,setload]=useState(false)
// console.log(data.abilities)

    //   if(data.abilities){
    //     setload(true)
    //   }
    //   else{
    //     setload(false)
    //   }
  return(
    <div style={{width:"90%",margin:'auto',height:400,justifyContent:"space-between"}}>  
        {data.map((el)=>(
            
            <div style={{display:"flex",border:"1px solid red",justifyContent:"space-around"}}>
            <div> <img src={el.images.large} alt="error"/></div>
            <div>
                <div style={{display:"flex",border:"1px solid red",justifyContent:"space-around",width:600,marginTop:40}}>
              <p><p>Name :</p>{el.name}</p>
                <p><p>Level :</p> {el.level}</p>
                <p> <p>hp :</p>  {el.hp}</p>
                </div>
                <p style={{fontStyle:"oblique"}}>ABILITES</p>
                <div style={{display:"flex",border:"1px solid red"}}>
                    
                        

                    {el.abilities!==undefined?<div>

                    {el.abilities.map((t)=>
                      
                (
                    
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        
                        <div><p><p>Name :</p> {t.name}</p></div>
                      
                       <div style={{width:"50%",textAlign:"center"}}> <p><p>Text :</p> {t.text}</p></div>
                       
                       <div><p> <p>Type :</p>  {t.type}</p></div>
                    </div>
                    )
                   )} 
                  </div> :<div>data not found</div> }

                  
                    
                </div>
                <p style={{fontStyle:"oblique"}}>ATTACKS</p>
                <p>{el.attacks.map((a)=>(
                    <div style={{display:"flex",border:"1px solid red",justifyContent:"space-around"}}>
                       <p>{a.cost.map((q)=>(
                        <div> <p>Cast : </p>  {q}</div>
                       ))}</p> 
                   
                    <p>  <p>Damage :</p> {a.damage}</p>
                    <p><p>Name :</p> {a.name}</p>
                    </div>
                ))}</p>
                <button style={{width:"80%",height:50,backgroundColor:"gray",color:"white",marginLeft:55}}><Link to="/">Go to home page</Link></button>
            </div>
             
        
        
            </div>
        ))}
    </div>
  )
    
  
};

export default SecondPage;
