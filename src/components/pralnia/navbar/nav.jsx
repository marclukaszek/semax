import React from "react";
import './nav.css'
import logo from '../assets/semaxlogo.png'

const Menu = () => (
    <>
            <img src={logo}></img>
            <p><a href='#home'>HOME</a></p>
            <p><a href='#ofert'>OFERTA</a></p>
            <p><a href='#shoes'>SZEWC</a></p>
            <p><a href='#galeria'>GALERIA</a></p>
            <p><a href='#kontakt'>KONTAKT</a></p>
    </>
  )

const Nav = () => {
    return(

    <div className='links_container'>
        <Menu />
        </div>

    )
    }

    export default Nav