import Logo from "../assets/logo1.png";
import Camera from "../assets/cam2.jpg"
import { useEffect, useState } from "react";

import axios from "axios"
import "./post_view.css";


const PostView = () => {
    const [data,setpost]=useState([])
    useEffect(()=>{
        axios.get("https://instaclone-pg-server.herokuapp.com/images").then((imagedata)=>{
            let data = imagedata.data.images.reverse();
            //console.log(data[0])
            setpost(data)
            
        })
        .catch((err)=>{console.log(err)})
    },[])
    
    return (
        <>
       
        <div className="container">
                <header>
                    <div className="nav">
                        <img src={Logo} alt="insta-logo"></img>
                        <a href="./form"><img id="camera" src={Camera} alt="camera"></img></a>
                        

                    </div>
                </header>
                <hr />
                <div>
                    {data.map((user,i)=>{
                         return (
                                <div className="body">
                                    <div className="card">
                                        <div className="user-info" key={i}>
                                            <h3>{user.author}</h3>
                                            <span className="location">{user.location}</span>
                                            <span className="dot"><h1>...</h1></span>
                                        </div>
                                        <div className="user-image">
                                            <img className="post" src={user.image} alt="user defined "></img>
                                        </div>
                                        <div className="cont1">
                                        <div className="heart">
                                            <img  id="heart-image" src="/heart.png" alt="user defined"></img>
                                            <img  id="share-image" src="/share.png" alt="user defined"></img>
                                            {/* <span className="grid" id="date" >{user.date}</span> */}
                                        </div>
                                        <div className="user-meta">
                                            <span>{user.date}</span>
                                        </div>
                                        </div>
                                        <div className="user-likes">
                                            {user.likes} likes
                                        </div>
                                        <div className="user-description">
                                            {user.description}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default PostView;