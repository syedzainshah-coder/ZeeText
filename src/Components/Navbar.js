import React from 'react'
// import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Navbar(prop) {
     const mystyle={
        color:"black"
     }
     function manage(){
        prop.toggle()
       if(prop.mode==="Light"){
 
        prop.showAlert("Dark Mode is enabled","success")
       }
       else{
        prop.showAlert("Light Mode is enabled","success")
      
     }
    }
  return (
    
    <>
    <header className='shadow headerClass'>
        <nav className='navbar '>
            <label htmlFor="" className=' ms-3'  >{prop.label}</label>
            <ul className='nav'>
                <li className='nav-item'><a href="/"className='nav-link 'style={mystyle} >Home</a></li>
                <li className='nav-item'><a href="/textApp"className='nav-link ' style={mystyle}>{prop.list}</a></li>
                <li className='nav-item'><a href="/about"className='nav-link ' style={mystyle}>About</a></li>
                <li className='nav-item'  onClick={manage}><a href="" className='nav-link' style={mystyle}><div     class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{prop.mode}</label>
</div></a></li>
                 
            </ul>
        </nav>
    </header>
    </>
    
  )
}
Navbar.propTypes={label:PropTypes.string.isRequired,
    list: PropTypes.string.isRequired
}
Navbar.defaultProps={
    label:"Set Label Here",
    list:"Set List here"
}