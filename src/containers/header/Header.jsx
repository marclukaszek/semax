import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import broszura from '../../assets/broszura.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
            <h1 className='gradient__text__header'>Firma remontowa Semax</h1>
            <p>Od 5 lat oferujemy najwyższej jakości usługi remontowe. Dołącz do grona zadowolonych klientów.</p>
            <div className='gpt3__header-content__input'>
                <input type='email' placeholder='Twój adres email'></input>
                <button type='button'>Zapisz się</button>
            </div>
            <div className='gpt3__header-content__people'>
                <img src={people} alt="people"/>
                <p>1600 osób już do nas dolączyło</p>
            </div>
        </div>
        <div className='gpt3__header-image'>
        <img src={broszura}></img>
        </div>
    </div>
  )
}

export default Header