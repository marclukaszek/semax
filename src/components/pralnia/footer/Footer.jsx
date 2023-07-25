import React from 'react'
import './footer.css';
import logo from '../assets/semaxlogo.png';

const Footer = () => {
  return (
    <div className='footer__main section__padding' id='kontakt'>
        <div className='footer__heading'>
            <h1>Skonktatuj się z nami. Chętnie pomożemy!</h1>
        </div>

        <div className='footer__map'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10188.714826976726!2d19.1181969!3d50.3259171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d09512206be3%3A0x3bc3b16381735e16!2sSemax!5e0!3m2!1spl!2spl!4v1686339278868!5m2!1spl!2spl" 
                    frameborder="0"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    ></iframe></div>
        <div className='footer__links'>
            <div className='footer__links_logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='footer__links_div'>
                <h4>Adres</h4>
                <p>ul. Mariana Kantora-Mirskiego 3</p>
                <p>42-500 Będzin</p>
            </div>
            <div className='footer__links_div'>
                <h4>Telefon</h4>
                <p>501 549 640</p>
                <p>504 032 492</p>
            </div>
            <div className='footer__links_div'>
                <h4>E-mail</h4>
                <p>firma@semax.pl</p>
            </div>
        </div>
        <div className='footer__copy'>
            <p>© 2023 YamaCode. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer