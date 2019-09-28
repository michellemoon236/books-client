import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
   width: '100px',
   padding: '10px',
   margin: '0',
   background: '#9c988f',
   textDecoration: 'none',
   fontFamily: 'Arial',
   fontSize: 14,
   color: 'white'
} 

const Navigation = () => 
   <div>
      <NavLink
        to='/'
        exact
        style={link}
        activeStyle={{
          background: 'black'
        }}
      >Home</NavLink>

      <NavLink
         to='/books'
         exact
         style={link}
         activeStyle={{
            background: 'black'
        }}
     >Book List</NavLink>

      <NavLink
         to='/books/new'
         exact
         style={link}
         activeStyle={{
            background: 'black'
        }}
     >Add New Book</NavLink>
   </div>


export default Navigation;