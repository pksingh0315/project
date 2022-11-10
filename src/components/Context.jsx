import { useState } from "react";
import { createContext } from "react";

export const  Context=createContext()
export const Contextprovider=({children})=>{

    const [data,setdata]=useState([])
    const handleadd=(ele)=>{
        setdata([ele])
    }


    return <Context.Provider value={{handleadd,data}}>{children}</Context.Provider>
}