// import SliderCarousel from "./SliderCarousel";
// const Slider = () => {
//     const slides = [
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       'Praesent in justo nec mi fermentum interdum.',
//       'Integer volutpat ligula nec tellus mattis, et ultricies arcu fringilla.'
//       // Add more slides as needed
//     ];
  
//     return (
//       <div>
//         {/* <h1>Slider Carousel Example</h1> */}
//         <SliderCarousel slides={slides} />
//         <Desc/>
//         <Footer/>
//         <Box/>
//         <About/>
//       </div>
//     );
//   };
  
//   export default Slider;




import React from 'react';
import SliderCarousel from './SliderCarousel';

import slideImage1 from './slide1.jpg'; // Import your slide images
// import slideImage2 from './slide2.jpg';
// import slideImage3 from './slide3.jpg';

const Sliderr = () => {
  const slides = [
    {
      image: slideImage1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: slideImage1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: slideImage1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    // {
    //   image: slideImage2,
    //   text: 'Praesent in justo nec mi fermentum interdum.'
    // },
    // {
    //   image: slideImage3,
    //   text: 'Integer volutpat ligula nec tellus mattis, et ultricies arcu fringilla.'
    // }
    // Add more slides as needed
  ];

  return (
    <div>
      {/* <h1>Slider Carousel Example</h1> */}
      <SliderCarousel slides={slides} />
    </div>
  );
};

export default Sliderr;
