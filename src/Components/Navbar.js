import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='light'?'n':'c'}`}>
   <div className="container-fluid">
     <a className="navbar-brand" href="#">{props.T}</a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
         
         
       </ul>
       {/* <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <button className="btn btn-outline-success" type="submit">Search</button>
 </form> */}
         <div className="form-check form-switch">
  <input type="checkbox" onClick={props.Toggle} className="form-check-input" id="customSwitch1"/>
  <label className= {`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1">Change Theme</label>
</div>
       
     </div>
   </div>
 </nav>
 
 </>
  )
}
