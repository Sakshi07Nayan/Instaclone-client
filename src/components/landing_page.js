import './landing.css';
import { Link } from "react-router-dom"

const Landing_page=()=>{
    
    return (
        <>
        <div id="card">
        <div className="container1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuItt7S83bdgEwudnc3tPBb_EOtH1nVS9mbQ&usqp=CAU" alt="Banner-img"></img>
            <div className='container2'>
                <h2>
                    10x Team 04
                </h2>
                <Link to="/postview" id="landbutton"><button>Enter</button></Link>
            </div>
            
        </div>
        </div>
        </>
    
    );
}
export default Landing_page;