import React from 'react'
import './footer.css';
import logo from '../../assets/semaxlogo.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
        <div className='gpt3__footer-heading'>
            <h1 className='gradient__text__header'>Skonktatuj się z nami. Chętnie pomożemy!</h1>
        </div>

        <div className='gpt3__footer_map'><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10188.714826976726!2d19.1181969!3d50.3259171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d09512206be3%3A0x3bc3b16381735e16!2sSemax!5e0!3m2!1spl!2spl!4v1686339278868!5m2!1spl!2spl" 
                    frameborder="0"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    ></iframe></div>
        <div className='gpt3__footer-links'>
            <div className='gpt3__footer-links_logo'>
                <img src={logo} alt='logo'/>
                <p>YamaCode, 2022</p>
                <p>All Rights Reserved</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Adres</h4>
                <p>ul. Mariana Kantora-Mirskiego 3</p>
                <p>42-500 Będzin</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>Telefon</h4>
                <p>501 549 640</p>
                <p>504 032 492</p>
            </div>
            <div className='gpt3__footer-links_div'>
                <h4>E-mail</h4>
                <p>firma@semax.pl</p>
            </div>
        </div>
        <div className='gpt3__footer-copy'>
            <p>© 2022 YamaCode. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer