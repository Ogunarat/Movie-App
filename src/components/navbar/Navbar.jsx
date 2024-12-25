import React from 'react'
import "./Navbar.css"
import { PiFilmReelFill } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='left'>
            <Link to={"/"}>Movie-App</Link>
        </div>
        <div className='center'>
            <PiFilmReelFill />
        </div>
        <div className='right'>
            <ul>
                <li>
                    <Link to={"/my-list"}><FaHeart /></Link>
                </li>
                <li>
                    <Link to={"/"}><TiHome /></Link>
                    <div className='favorite-count'></div>    
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar