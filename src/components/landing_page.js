import './landing.css';
import { Link } from "react-router-dom"

const Landing_page=()=>{
    
    return (
        <>
        <img src="./images/download.jpg" alt="" id="coverImg"/>
        <div id="card">
        <div className="container1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuItt7S83bdgEwudnc3tPBb_EOtH1nVS9mbQ&usqp=CAU" alt="Banner-img"></img>
            <div className='container2'>
                <h2>
                    PHOTO SHARE <br/> APP
                </h2>
                <Link to="/postview" ><button id="landbutton">Enter</button></Link>
            </div>
            
        </div>
        </div>
        </>
    
    );
}
export default Landing_page;