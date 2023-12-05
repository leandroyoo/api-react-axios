
import React from 'react'
import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h2>
            <Link to={`/`}>Blog</Link>
        </h2>
        <ul>
            <li>
            <Link to={`/`}className='xtz'>Home</Link>
                </li>
            <li> 
            <Link to={`/new`} className="new-btn">Novo Post</Link>
            </li>
        </ul>
    
    </div>
    
    )
}

export default Navbar