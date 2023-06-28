import React,{useState, useEffect, useRef}from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/core";
import "swiper/swiper.css";
import "swiper/css/navigation"
import "./possibility.css"

import Img1 from "../../img/img1.jpg";
import Img2 from "../../img/img2.jpeg";
import Img3 from "../../img/img3.jpeg";
import Img4 from "../../img/img4.jpeg";
import Img5 from "../../img/img5.jpg";
import Img6 from "../../img/img6.jpg";
import Img7 from '../../img/img7.jpeg';
import Img8 from '../../img/img8.jpeg';
import Img9 from '../../img/img9.jpeg';
import Img10 from '../../img/img10.jpeg';
import Img11 from '../../img/img11.jpeg';
import Img12 from '../../img/img12.jpeg';
import Img13 from '../../img/img13.jpeg';
import Img14 from '../../img/img14.jpeg';
import Img15 from '../../img/img15.jpeg';
import Img16 from '../../img/img16.jpeg';
import Img17 from '../../img/img17.jpeg';

const imageUrls = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17];


  const Possibility = () => {
    const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [style, setStyle] = useState({maxWidth: '1678px', margin: '0 auto', padding: '0 0 0 13px', marginBottom: '2rem' });
  const [spaceBetween, setSpaceBetween] = useState(0);

  const openZoom = (index) => {
    setIsZoomed(true);
    setZoomedImage(imageUrls[index]);
    document.body.style.overflow = "hidden"; // Prevent scrolling when zoomed
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImage(null);
    document.body.style.overflow = ""; // Restore scrolling when closed
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480){
        setSlidesPerView(1);
        setStyle({maxWidth: '320px', margin: '0 0 2rem 0px', marginBottom:'2rem'});
        setSpaceBetween(0);
      }else if (screenWidth <= 770){
        setSlidesPerView(2);
        setStyle({maxWidth: '650px', margin: '0 0 2rem 20px', marginBottom:'2rem'});
        setSpaceBetween(10);
      } else if (screenWidth <= 1050){
        setSlidesPerView(3);
        setStyle({maxWidth: '965px', margin: '0 0 2rem 0px', marginBottom:'2rem'});
        setSpaceBetween(10);
      }
      else {
        setSlidesPerView(5);
        setStyle({maxWidth: '1678px', margin: '0.5rem 0 2rem 0', padding: '0 0 0 13px', marginBottom: '2rem' });
        setSpaceBetween(0);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  
    return (
      <div className="gallery-container">
        <h1 className="gradient__text__header">Galeria</h1>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={true}
          observeParents={true}
          speed={800}
          style={style}
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container" onClick={() => openZoom(index)}>
                <img
                  src={url}
                  style={{ height: '350px', width: '320px', cursor: 'zoom-in' }}
                  alt={`Image ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {isZoomed && (
          <div className="modal" onClick={closeZoom}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={zoomedImage} className="zoomed-image" alt="Zoomed Image" />
              <span className="close" onClick={closeZoom}>&times;</span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Possibility;