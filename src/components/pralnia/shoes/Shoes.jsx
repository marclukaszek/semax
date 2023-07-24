import React from "react";
import './shoes.css';
import buty from '../assets/buty.jpg';

const Shoes = () => {
    return(
        <div className="shoes__main" id='shoes'>
        <div className="shoes__title"><h1>Szewc</h1></div>
        <div className="shoes__wrap">
        <div className="shoes__image"><img src={buty}/></div>
        <div className="shoes__content"><p>
        Wykorzystujemy materiały najwyższej jakości, które w połączeniu z wysokim doświadczeniem naszych rzemieślników gwarantują niezawodne usługi.

Zakres naszej działalności obejmuje: naprawę obuwia, obuwie na miarę, konserwację obuwia.

Zajmujemy się profesjonalnie naprawą obuwia - jesteśmy w stanie przywrócić do życia nieomalże każdą parę. Mamy wieloletnie doświadczenie w branży szewskiej i zapewniamy Państwu obsługę na najwyższym poziomie.

Przyjmujemy do napraw różne typy obuwia i świadczymy kompleksowe usługi: wymienimy obcasy lub fleki, wszyjemy zamek, wkleimy nowe wkładki, zamontujemy nową podeszwę i dopasujemy cholewkę.

Wszystkie naprawy wykonujemy z użyciem sprawdzonych materiałów wysokiej jakości. Gdy potrzebna jest ekspresowa naprawa obuwia, także służymy pomocą.

Zniszczone fleki w ulubionych szpilkach? Dla nas to żaden problem - wymiana fleków to usługa, którą możemy wykonać w naszym zakładzie nawet od ręki. Posiadamy wiele modeli fleków do różnych typów obuwia, dlatego dobierzemy je tak, aby pasowały idealnie. Wymieniamy fleki zarówno w butach damskich, jak i męskie, także z wyrównaniem.

Wykonujemy także usługi wymiany obcasów i zelówek. W ten sposób nawet mocno podniszczone obuwie znów będzie mogło wyglądać świetnie i dodatkowo będzie optymalnie zabezpieczone.

W ofercie znajduje się także sprzedaż szerokiej gamy środków do pielęgnacji obuwia, oraz dodatków i akcesoriów z nim związanych.

Działamy z wykorzystaniem profesjonalnych urządzeń, unowocześniamy ciągle park maszynowy i korzystamy z najwyższej jakości materiałów do naprawy obuwia, dzięki czemu dajemy gwarancje na nasze usługi.</p></div>
        </div></div>
    )
}

export default Shoes