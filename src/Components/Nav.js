import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Nav(){
    return(
        <nav>
            <img className='nav-logo' src={logo} alt="not found" />
            <h3 className='nav-title' >React Facts</h3>
            <h4 className='nav-detail'>React Course-Example 1</h4>
        </nav>
    )
}
export default Nav;