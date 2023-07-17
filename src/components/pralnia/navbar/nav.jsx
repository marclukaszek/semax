import React from "react";
import './nav.css'

const Menu = () => (
    <>
            <p><a href='#home'>Home</a></p>
            <p><a href='#wgpt3'>Oferta</a></p>
            <p><a href='#possibility'>Szewc</a></p>
            <p>test</p>
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