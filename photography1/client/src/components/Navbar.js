import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const NavBar = ()=>{
  useEffect(()=>{
    M.Modal.init(searchModal.current)
  })
  const searchModal =useRef(null)
     const {state,dispatch} = useContext(UserContext)
     const [user,setUser]=useState("")
     const history = useHistory()
     
     const renderList = ()=>{
       if(state){
           return [
            // <li className="large material-icons">insert_chart</li>
            <li key="1"><i data-target="modal1" className="large material-icons modal-trigger" style={{color:"black"}}>search</i> </li>,
            <li key="2"><Link to="/profile">Profile</Link></li>,
            <li key="3"><Link to="/create">Create Post</Link></li>,
            <li  key="4">
             <button className="btn #c62828 red darken-3"
            onClick={()=>{
              localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/login')
            }}
            >
                Logout
            </button>
            </li>
         
            
           ]
       }else{
         return [
          <li  key="5"><Link to="/login">Login</Link></li>,
          <li  key="6"><Link to="/signup">Signup</Link></li>
         
         ]
       }
     }

    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/login"} className="brand-logo left">PhotoGraphyContest</Link>
          <ul id="nav-mobile" className="right">
             {renderList()}
  
          </ul>
        </div>

        <div id="modal1" className="modal" ref={searchModal} >
    <div className="modal-content">
    <input
            type="text"
            placeholder="search users"
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            />
            <ul className="collection">
      <li className="collection-item">Alvin</li>
      <li className="collection-item">Alvin</li>
      <li className="collection-item">Alvin</li>
    </ul>
    </div>
    <div className="modal-footer">
    
      <button  className="modal-close waves-effect waves-green btn-flat">Agree</button>
    </div>
  </div>
      </nav>
    )
}

export default NavBar
