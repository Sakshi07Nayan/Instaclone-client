// import axios from 'axios';
// import React from 'react'
// import Modal from "react-bootstrap/Modal";

// function DelectConfirm({show, setShow}) {
//     const handleClose = ()=>{setShow(false)}
//     const handleDelete =(id)=>{
//         axios.delete(`http://localhost:3002/remove/${id}`).then((res)=>{
//              setShow(false)
//             console.log(res);
//             window.alert("post Deleted !")
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
//   return (
//     <>
//         <Modal show={show} onHide={handleClose} animation={false} >
//             <Modal.Header  closeButton>
//                 <img src="/images/google-question.gif" alt="ques"  style={{width:"350px" , textAlign:"center" , marginLeft:"60px"}}/>
//             </Modal.Header>
//             <Modal.Body>
//                 <div>
//                   <div>
//                      <h1>Do You Really<br></br> Want to Delete Post</h1>
//                   </div>
//                   <div className="buttom">
//                     <button onClick={()=>handleDelete(id)} >CONFIRM</button>
//                     {/* <button  style={{marginLeft:"50px"}}>NO</button> onClick={(e)=>handleDelete(e)} */}
//                   </div>
//                 </div>
//             </Modal.Body>
//         </Modal>
//     </>
//   )
// }

// export default DelectConfirm