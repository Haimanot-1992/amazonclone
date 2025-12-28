import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imagLink) => {
          return <img src={imagLink} />;
        })}
      </Carousel>
      <div className={styles.hero_img}></div>
    </div>
  );
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slides = [
  //   {
  //     id: 1,
  //     image: "./img/10001.jpg",
  //     title: "Prime Day Deals",
  //     subtitle: "Up to 50% off",
  //     buttonText: "Shop now",
  //     link: "/deals",
  //   },
  //   {
  //     id: 2,
  //     image: "./img/10002.jpg",
  //     title: "New Arrivals",
  //     subtitle: "Discover latest gadgets",
  //     buttonText: "Explore",
  //     link: "/new-arrivals",
  //   },
  //   {
  //     id: 3,
  //     image: "./img/1003.jpg",
  //     title: "Fashion Sale",
  //     subtitle: "Up to 70% off on clothing",
  //     buttonText: "Buy now",
  //     link: "/fashion",
  //   },
  //   {
  //     id: 4,
  //     image: "./img/10004.jpg",
  //     title: "Home Essentials",
  //     subtitle: "Everything for your home",
  //     buttonText: "Shop home",
  //     link: "/home",
  //   },
  // ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // return (
  //   <div className={styles.carousel}>
  //     <div className={styles.carouselContainer}>
  //       <div
  //         className={styles.carouselSlides}
  //         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  //       >
  //         {slides.map((slide) => (
  //           <div key={slide.id} className={styles.carouselSlide}>
  //             <img
  //               src={slide.image}
  //               alt={slide.title}
  //               className={styles.carouselImage}
  //             />
  //             <div className={styles.carouselContent}>
  //               <h2 className={styles.carouselTitle}>{slide.title}</h2>
  //               <p className={styles.carouselSubtitle}>{slide.subtitle}</p>
  //               <Link to={slide.link} className={styles.carouselButton}>
  //                 {slide.buttonText}
  //               </Link>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <button
  //         className={`${styles.carouselNav} ${styles.prev}`}
  //         onClick={prevSlide}
  //       >
  //         <ChevronLeft size={30} />
  //       </button>

  //       <button
  //         className={`${styles.carouselNav} ${styles.next}`}
  //         onClick={nextSlide}
  //       >
  //         <ChevronRight size={30} />
  //       </button>

  //       <div className={styles.carouselIndicators}>
  //         {slides.map((_, index) => (
  //           <button
  //             key={index}
  //             className={`${styles.carouselIndicator} ${
  //               index === currentSlide ? styles.active : ""
  //             }`}
  //             onClick={() => setCurrentSlide(index)}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default CarouselEffect;
