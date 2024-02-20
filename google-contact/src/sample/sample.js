import { useState } from "react";
import Fun from "./fun";

export default function Sample(){
const {h,handle}=Fun()
    return(
        <div>

        <form  onSubmit={h}>
            <input type="text"  name="name" onChange={handle}/>
            
            <input type="submit" />
            
            
        </form>


        </div>
    )
}