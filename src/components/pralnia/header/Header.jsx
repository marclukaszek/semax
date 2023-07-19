import React from "react";
import './header.css';

const Header = () => {
    return(
        <div className='header section__padding' id='home'>
        <div className='header-content'>
            <h1 className='gradient__text__header2'>Semax - Pralnia chemiczna oraz szewc</h1>
            <p>Od ponad 30 lat oferujemy najwyższej jakości usługi pralnicze i szewskie. Dołącz do grona zadowolonych klientów.</p>
            <div className="directions">
                <p>Znajdujemy się na ulicy Kantora-Mirskiego 3 w Będzinie</p>
                <p>Jesteśmy otwarci od Poniedziałku do Piątku w godzinach od 8 do 16</p>
                <p>Telefon kontaktowy: 501 549 640</p>
            </div>
            </div>
            </div>
    )
}

export default Header