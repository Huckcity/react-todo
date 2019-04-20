import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav style={headerStyle}>
        <h1>TODOLIST</h1>
        <Link style={linkStyle} to="/">Home</Link>&nbsp;|&nbsp; 
        <Link style={linkStyle} to="/about">About</Link>
    </nav>
  )
}
 const headerStyle = {
     background: '#333',
     color: '#fff',
     textAlign: 'center',
     padding: ' 5px 10px',
     fontWeight: 'bold'
 }

 const linkStyle = {
   color: "#fff",
   textDecoration: 'none'
 }