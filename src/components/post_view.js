import Logo from "../assets/download.png";
//import Camera from "../assets/cam2.jpg"
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
       
        <div className="containerback">
                <header>
                    <div className="nav">
                        <img id="insta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjej450FhKD_mXUI4Xn_1XKl-4da_t-Dq0Gg&usqp=CAU" alt="log"/>
                        <img src={Logo} alt="insta-logo" id="lable"></img>
                        <a href="./form"><img id="camera1" src="./images/camera1.gif" alt="camera"></img></a>
                        

                    </div>
                </header>
                <hr />
                <br/><br/>
                <br/>
                <div id="back">
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
                                            <img  id="heart-image" src="./images/heart.png" alt="user defined"></img>
                                            <img  id="share-image" src="./images/share.png" alt="user defined"></img>
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