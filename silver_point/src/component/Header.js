import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import  logo from '../image/logo1.png';


const Header = ()=>{

    const [isOpen,setIsOpen] = useState(false);

    const toggleDropdown = () =>{
        setIsOpen(!isOpen);
    }

    const closeMenu = ()=>{
        setIsOpen(false);
    }
    const handleTouchStart = (event)=>{
        event.target.classList.add('hover-effect');
    }
    const handleTouchEnd = (event) =>{
        event.target.classList.remove('hover-effect');
    }

    return(
        <header className='header'>
            <div className='logo-container'>
                <img src={logo} alt='logo' className='logo'/>
                <h1 className='logo-text'>Silver Point</h1>
            </div>
            <nav className='navbar'>
               
                <ul className={`nav-link ${isOpen ? 'open' : ''}`}>
                    <li><NavLink to='/' onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to='/plt' onClick={closeMenu}>Plot Availability</NavLink></li>
                    <li><NavLink to='/about' onClick={closeMenu}>About Us</NavLink></li>
                    <li><NavLink to='/contact' onClick={closeMenu}>Contact Us</NavLink></li>
                    <li><NavLink to='/login' onClick={closeMenu}>Login</NavLink></li>
                </ul>
                <div className='menu-icon' onClick={toggleDropdown} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    &#9776;
                </div>
            </nav>
        </header>
    )
};

export default Header;