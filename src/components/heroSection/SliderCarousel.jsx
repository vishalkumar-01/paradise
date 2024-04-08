

// import React, { useState, useEffect } from 'react';
// import './SliderCarousel.css'; // Import your CSS file

// const SliderCarousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [clickedButton, setClickedButton] = useState(null);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     setClickedButton('next');
//     setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     setClickedButton('prev');
//     setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="slider-carousel">
//       <button className={`prev-btn ${clickedButton === 'prev' ? 'clicked' : ''}`} onClick={prevSlide}>{'<'}</button>
//       <button className={`next-btn ${clickedButton === 'next' ? 'clicked' : ''}`} onClick={nextSlide}>{'>'}</button>
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={index === currentSlide ? 'slide active' : 'slide'}
//         >
//           <img
//             src={slide.image}
//             alt={`Slide ${index + 1}`}
//             className="slide-image"
//             style={{ opacity: index === currentSlide ? 1 : 0.5 }}
//           />
//           <div className="caption">
//             <h2>{slide.text}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SliderCarousel;



import React, { useState, useEffect } from 'react';
import './SliderCarousel.css'; // Import your CSS file

const SliderCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setClickedButton('next');
    setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    setClickedButton('prev');
    setTimeout(() => setClickedButton(null), 200); // Reset clickedButton after 200ms
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider-carousel">
      <button className={`prev-btn ${clickedButton === 'prev' ? 'clicked' : ''}`} onClick={prevSlide}>{'<'}</button>
      <button className={`next-btn ${clickedButton === 'next' ? 'clicked' : ''}`} onClick={nextSlide}>{'>'}</button>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ height: '100vh', width: '100vw' }} // Adjust height and width here
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="slide-image"
            style={{ height: '100%', width: '100%', objectFit: 'cover' }} // Ensure image covers entire space
          />
          <div className="caption">
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderCarousel;
