import Logo from "../assets/logo1.png";
import Camera from "../assets/cam2.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Filebase64 from "react-file-base64"
import axios from "axios";
import './form.css'

const Form_page=() =>{
    const navigate = useNavigate()
    const [data,setdata] = useState({author: "", location:"", image:"", description:""})
    const [image,setimage]=useState('')
    
    const inputhadler = (id)=> {
        setdata({...data,image:id})
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios({
            url:"https://instaclone-pg-server.herokuapp.com/uploads",
            method:"POST",
            headers :{
            },
            data : data
           }).then((post)=>{
                navigate("/postview")
           }).catch((err)=>{
            console.log(err)
           })
           console.log(data)
           setdata({author:"",location:"",description:"",image : ""})
    }
    
    
    return(
        <>
         <header>
            <div className="nav">
                <img src={Logo} alt="insta-logo"></img>
                <img id="camera" src={Camera} alt="camera"></img>

            </div>
        </header>
        <hr />
        
        <form onSubmit={handlesubmit}>
            <div className='form-box'>
            <h2>ADD POST</h2>
            <hr/>
           
            <Filebase64
                     type="file"
                     multiple={false}
                     onDone = {({base64})=> inputhadler(base64)}
                     id="file"/>
            
           
            <div className="part-2">
                <div>
                <input type="text"   placeholder="Author" onChange={(e)=>{setdata({...data, author: e.target.value})}} />
                <input type="text"  class="inline"  placeholder="Location" onChange={(e)=>{setdata({...data, location: e.target.value})}}/>
                </div>
                
            </div>
            <div className='part-3'>
                <input id="descrip" type="text"  placeholder="Description" onChange={(e)=> {setdata({...data, description: e.target.value})}}/>
            </div>
            <div className='part-4'>
                <button type="submit" id="b2"> Post</button>
          
            </div>
                
            </div>
            
        </form>
        </>
    )
}
export default Form_page;

