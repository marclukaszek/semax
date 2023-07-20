import React from "react";
import '../ofert/ofert.css';
import pranie from '../assets/pranie.jpg';
import dywany from '../assets/dywany.jpeg';

const Ofert = () => {
    return(
        <div className="main" id='ofert'>
  <div class="container">
  <div class="title"><h1>Oferta</h1></div>
  <div class="pranie"><h1>Pranie chemiczne</h1>
  <p>
Nasza pralnia oferuje usługi pralnicze dla firm i instytucji.
Każdorazowo przedstawiamy ofertę cenową na wykonanie usługi na pranie odzieży roboczej skażonej czynnikami biologicznymi lub chemicznymi zgodnie z przedłożoną specyfikacją.
Pranie chemiczne usuwa z czyszczonej odzieży wszelkie mikroorganizmy – nawet roztocze kurzowe.
Oferujemy Państwu pranie i czyszczenie chemiczne, maglowanie:</p>
</div>
  <div class="pranie-oferta1">
  <p>● odzieży fasonowej również pracowniczej, ochronnej i roboczej, sakralnej</p>
  <p>● kurtek puchowych, odzieży termoaktywnej,</p>
  <p>● bielizny płaskiej – pościelowej i gastronomicznej,</p>
  <p>● sukni ślubnych, komunijnych i wieczorowych,</p>
  <p>● kocy, narzut, firan i zasłon,</p>
</div>
  <div class="pranie-ofrta2">
  <p>● pokrowców na materace i kanapy, śpiworów,</p>
  <p>● kołder i poduszek wełnianych i puchowych,</p>
  <p>● skór, kożuchów i futer,</p>
  <p>● dywanów i chodników,</p>
  <p>● pranie żaluzji,</p>
  <p>● renowacja i farbowanie skór</p>
  </div>
  <div class="pranie-image"><img src={pranie}/></div>
  <div class="dywany"><h1>Dywany</h1>
  <p>Oferujemy Państwu pranie dywanów najlepszą dostępną metodą "na wskroś". Na wstępie dywan jest trzepany trzepaczką mechaniczną gwarantującą porządne wytrzepanie. Dywan jest odkurzany i płukany. Następnie prany automatem szorującym i znowu płukany. Kolejnym krokiem jest umieszczenie w specjalistycznej wirówce do dywanów. Wirówka ma długość ponad 3,8m bębna i wiruje z prędkością 1200 obrotów na minutę. Po odwirowaniu dywan jest niemalże suchy co skraca czas schnięcia i podnosi jakość procesu. Resztki brudu, chemii oraz około 95% wody zostaje usunięte z dywanu pozostawiając go czystym i pachnącym. W ostatnim etapie dywan trafia do suszarni, gdzie przez kilka godzin schnie, odkurzamy i poddajemy kontroli cały proces.</p></div>
  <div class="dywany-image"><img src={dywany}/></div>
</div>
  </div>

    )
}

export default Ofert