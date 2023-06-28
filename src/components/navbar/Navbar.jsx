import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/semaxlogo.png';
import wine_glass from '../../assets/wine_glass.png';
import wine_bottle from '../../assets/wine_bottle.png';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>Oferta</a></p>
          <p><a href='#possibility'>Galeria</a></p>
          <p><a href='#features'>Rekomendacje</a></p>
          <p><a href='#footer'>Kontakt</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo'/>
          
          {/*<p><img src={wine_glass} alt='logo'></img>Kobiece szyje<img src={wine_bottle} alt='logo'></img></p>*/}
          
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
              </div>
            </div>
          </div>  
        )}
    </div>
  </div>
  )
}

export default Navbar