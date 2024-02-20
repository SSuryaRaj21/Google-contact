import { useState } from "react";

export default function Fun(){
    const [value,setvale]=useState({
        name:'',
        
    })

    const [error,seterror]=useState({})
///onchange function

    const handle=(e)=>{
        const {name}=e.target;
        setvale((revelue)=>{
            return{
                ...revelue,
                [name]:value,
            }
        })
     }

     // onsubmit
     const h=(e)=>{
        e.preventDefault();
        console.log( );
     }
     return{handle,h}
}