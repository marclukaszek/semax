import React,{useState, useEffect, useRef}from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/core";
import "swiper/swiper.css";
import "swiper/css/navigation"
import './gallery.css';

import Img from '../assets/zdj/image.jpg';
import Img1 from '../assets/zdj/image1.jpg';
import Img2 from '../assets/zdj/image2.jpg';
import Img3 from '../assets/zdj/image3.jpg';
import Img4 from '../assets/zdj/image4.jpg';
import Img5 from '../assets/zdj/image5.jpg';
import Img6 from '../assets/zdj/image6.jpg';
import Img7 from '../assets/zdj/image7.jpg';
import Img8 from '../assets/zdj/image8.jpg';
import Img9 from '../assets/zdj/image9.jpg';

const imageUrls = [Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

const Gallery = () => {
    const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [style, setStyle] = useState({maxWidth: 'calc(98vw)', margin: '0 auto', padding: '0 0 0 13px', marginBottom: '2rem' });
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
        setStyle({maxWidth: 'calc(98vw)', margin: '5px', padding: '0 0 0 13px', marginBottom: '2rem', });
        setSpaceBetween(25);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  
    return (
      <div className="gallery__main" id='gallery'>
        <h1>Galeria</h1>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={true}
          observeParents={true}
          speed={800}
          style={style}
          stretch={10}
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container" onClick={() => openZoom(index)}>
                <img
                  src={url}
                  style={{ width: 'calc((98vw / 5) - 5px)', height: '350px', cursor: 'zoom-in', borderRadius: '5px'}}
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

  export default Gallery