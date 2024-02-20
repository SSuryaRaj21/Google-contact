import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "./api"
import { useNavigate } from "react-router-dom"

export default function Edit(){
    const [id,setId]=useState(0)
    const [firstname,setname]=useState('')
    const [lastname,setlastname]=useState('')
    const [maile,setemail]=useState('')
    const [number,setnumber]=useState(+91)
    const [dob,setdob]=useState(0)
    const [webname,setweb]=useState('')
    const navi=useNavigate()

    const handleclik = (e)=>{
        e.preventDefault();
        axios.put(`${API}/${id}`,{fname:firstname,lname:lastname,Mail:maile,Phone:number,DOB:dob,WebAdd:webname})
        setname('');
        setlastname('');
        setemail('')
        setnumber('');
        setdob('')
        setweb('')
        navi('/view')
    }

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setname(localStorage.getItem('fname'));
        setlastname(localStorage.getItem('lname'));
        setemail(localStorage.getItem('Mail'))
        setnumber(localStorage.getItem('Phone'));
        setdob(localStorage.getItem('DOB'))
        setweb(localStorage.getItem('WebAdd'))

        
    },[])

    
    return(
        <div>
            <h3>craete conatact</h3>

            <form className="w-50" onSubmit={handleclik}>
            <table className=" table  ">

                <tr className=" " >               
                <td><input type="text"  placeholder="firstname" className="form-control  mb-3"    value={firstname} onChange={(e)=>setname(e.target.value)}/></td>
                               
                </tr>
                <tr>               
                <td><input type="text"  placeholder="lastname" className="form-control mb-3" value={lastname} onChange={(e)=>setlastname(e.target.value)}/></td>                
                </tr>
                <tr>               
                <td><input type="email"  placeholder="Sample@gmail.com" className="form-control mb-3" value={maile} onChange={(e)=>setemail(e.target.value)}/></td> 

                </tr>
                <tr>               
                <td><input type="number"  placeholder="PhoneNumber" className="form-control mb-3" value={number} onChange={(e)=>setnumber(e.target.value)} /></td>                
                </tr>
                <tr>               
                <td><input type="date"  placeholder="date" className="form-control mb-3" value={dob} onChange={(e)=>setdob(e.target.value)}/></td>                
                </tr>
                <tr>               
                <td><input type="text"  placeholder="website" className="form-control mb-3" value={webname} onChange={(e)=>setweb(e.target.value)}/></td>                
                </tr>

                <tr>               
                <td><input type="submit"  value={'save'} className="  btn btn-info"/></td>                
                </tr>

            </table>
            </form>
        </div>
    )
}