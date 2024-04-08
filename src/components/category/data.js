import by from './biriyani.jpg'
export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
// category 
export const category = [
    {
        image: by,
        name: 'Biriyani'
    },
    {
        image: 'https://img.freepik.com/premium-photo/high-quality-grilling-chicken-meat-shashlik-metal-skewers_779468-1058.jpg',
        name: 'Grill & BBQ'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/3D-tempered-glass-screen-protector-for-iphone-12-12-pro-black-Front-View-Thumbnail-Image.png',
        name: 'Shawarma'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/apple-iphone-15-plus-blue-thumbnail.png',
        name: 'Veg Starters'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/apple-usb-c-power-adapter-20w-white.png',
        name: 'Non Veg Starters'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Mi-10000-mAh-Power-Bank-3i-Black-1-1.png',
        name: 'Veg Tandoor Starters'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/31367.png',
        name: 'Non Veg Tandoor Starters'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Arabian Sizzlings and Platters'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Indian Rice'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Chicken Main Course'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Mutton Main Course'
    },
    {
        image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
        name: 'Seafood Main Course'
    },
    // {
    //     image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
    //     name: 'Desserts'
    // },
    // {
    //     image: 'https://img-prd-pim.poorvika.com/prodvarval/Apple-watch-se-gps-44mm-white.png',
    //     name: 'Ice Cream'
    // }
]