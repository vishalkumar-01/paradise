import React from 'react';
import './about.css';
import Dwn from './paradiseff.jpg';

export default function HomeSlider() {
  return <section className='home-slider-container'>
    <div className="card">
      <div className="content">
      <h2 style={{fontSize:'40px', color:'red', fontFamily:'Papyrus', fontWeight:'bold', textAlign:'left', paddingTop:'30px'}}>Paradise MultiCuisine Restaurant</h2>

        <h4 style={{color:'darkslategrey',fontFamily:'Papyrus',textAlign:'left',paddingLeft:'30px',paddingTop:'6px'}}>Where Every Bite is a Taste of Heaven!</h4>
        <p style={{color:'darkslategrey',textAlign:'left',paddingTop:'30px'}}>Welcome to Paradise MultiCuisine Restaurant, where hygiene meets excellence.
With 5-star certification across four branches, we ensure pristine dining environments.
Indulge in diverse culinary delights crafted with passion by our talented chefs.
Experience the perfect blend of hygiene, hospitality, and heavenly flavors at Paradise.</p>
        <br/><br/>
        <a href="/allproduct" className="btn-One">View Menu</a>
        <a href="/cart" className="btn-One">Go to Cart</a>
      
      </div>
      <img src={Dwn} alt="Card Image" className="image" />
 
      
    </div>

    
    

  </section>;
}