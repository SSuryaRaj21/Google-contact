import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "./api"
import { Link } from "react-router-dom"
import './view.css'
export default function View(){
    const [name,setname]=useState([])
    
    const  getdata=async ()=>{
    await  axios.get(API).then((getvalue)=>{
                setname(getvalue.data);
        })
    }
useEffect(()=>{
    getdata()
},[])

const del = (a)=>{
    axios.delete(`${API}/${a}`).then(()=>{
        axios.get(API).then((getvalue)=>{
            setname(getvalue.data);
    })
    })
}

const edit= (a,b,c,d,e,f,g)=>{
    localStorage.setItem('id',a)
    localStorage.setItem('fname',b)
    localStorage.setItem('lname',c)
    localStorage.setItem('Mail',d)
    localStorage.setItem('Phone',e)
    localStorage.setItem('DOB',f)
    localStorage.setItem('WebAdd',g)



}

    return(
        <div className="border border-2 border-primary container mt-5">
            <table className="table table-hover table-bordered">
               {name.map((mapValue)=>(
                 <tr  >
                 <td >{mapValue.fname}</td>
                 <td  >{mapValue.Phone}</td>
                 <td><br/></td>
                 <td> <div class="dropdown">
                         <button class="dropbtn  ">:</button>
                         <div class="dropdown-content">
                         <span  ><Link to={'/edit'}> <button className="button" onClick={()=>edit(mapValue.id,mapValue.fname,mapValue.lname,mapValue.Mail,mapValue.Phone,mapValue.DOB,mapValue.WebAdd)}>edit</button></Link></span>
                         <span  > <button className="button" onClick={()=>del(mapValue.id)}>delete</button></span>
                        
  </div>
</div>
</td>

             </tr>
               ))}
            </table>


                    </div>
    )
}