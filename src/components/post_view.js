//import Logo from "../assets/download.png";
//import Camera from "../assets/cam2.jpg"
import { useEffect, useState } from "react";

import axios from "axios"
import "./post_view.css";
//import DelectConfirm from "./Popup/Confirmation";
//import 'bootstrap/dist/css/bootstrap.min.css';

const PostView = () => {
    const [count, setcount] = useState(0)
    const [data,setpost]=useState([])
    //const [show, setShow] = useState(false);
    //const [likdata,setlikData] = useState([])
    useEffect(()=>{
        // https://instaclone-pg-server.herokuapp.com/images
        axios.get("http://localhost:3002/images").then((imagedata)=>{
            let datas = imagedata.data.images.reverse();
            //console.log(data[0])
            setpost(datas)
            
        })
        .catch((err)=>{console.log(err)})
    },[])

    const handleConfirm =(_id)=>{
        axios.delete(`http://localhost:3002/remove/${_id}`).then((res)=>{
            const newList = data.filter((item) => item._id !== _id);
            setpost(newList);
            console.log(res);
            window.alert("post Deleted !")
        }).catch((err)=>{
            console.log(err)
        })
          
    }

    const handleIncrement =(e)=>{ 
        setcount(count + 1);
    }
    // const likePost = (id)=>{
    //     fetch('/like/:_id',{
    //         method:"put",
    //         headers:{
    //             "Content-Type":"application/json"
    //             // "Authorization":"Bearer "+localStorage.getItem("jwt")
    //         },
    //         body:JSON.stringify({
    //             postId:id
    //         })
    //     }).then(res=>res.json())
    //     .then(result=>{
    //              //   console.log(result)
    //         const newData = likdata.map(item=>{
    //           if(item._id ===result._id){
    //               return result
    //           }else{
    //               return item
    //           }
    //       })
    //       setlikData(newData)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    
    return (
        <>
       
        <div className="containerback">
                <header>
                    <div className="nav">
                        <img id="insta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjej450FhKD_mXUI4Xn_1XKl-4da_t-Dq0Gg&usqp=CAU" alt="log"/>
                        <img src="/images/download.png" alt="insta-logo" id="lable"></img>
                        <a href="./form"><img id="camera1" src="./images/camera1.gif" alt="camera"></img></a>
                        

                    </div>
                </header>
                <hr />
                <br/><br/>
                <br/>
                <div id="back">
                    {data.map((item,i)=>{
                         return (
                                <div className="body">
                                    <div className="card">
                                        <div className="user-info" key={i}>
                                            <h3>{item.author}</h3> 
                                            <span className="location">{item.location}</span>
                                            <span className="dot"><button onClick={()=>handleConfirm(item._id)}>DELETE</button></span>
                                        </div>
                                        <div className="user-image">
                                            <img className="post" src={item.image} alt="user defined "></img>
                                        </div>
                                        <div className="cont1">
                                        <div className="heart">
                                            <img  id="heart-image" src='/images/heart-fill.svg' alt="user defined" onClick={handleIncrement}></img> 
                                            {/* onClick={()=>{likePost(item._id)}} */}
                                            <img  id="com-image" src="./images/chat.svg" alt="user defined"></img>
                                            <img  id="share-image" src="./images/share.png" alt="user defined"></img>
                                            {/* <span className="grid" id="date" >{user.date}</span> */}
                                        </div>
                                        <div className="user-meta">
                                            <span>{item.date}</span>
                                        </div>
                                        </div>
                                        <div className="user-likes">
                                            {count} likes
                                        </div>
                                        <div className="user-description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
            {/* {
                show === true ? <DelectConfirm  show={show} setShow={setShow} /> : ""
            } */}
        </>
    )
}
export default PostView;