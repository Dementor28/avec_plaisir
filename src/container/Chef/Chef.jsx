import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Our Culinary Philosophy</h1>

      <div className="app__chef-content">
  <div className="app__chef-content_quote">
    <img src={images.quote} alt="quote_image" />
    <p className="p__opensans">At the heart of our kitchen lies a passion for crafting unforgettable flavors and experiences."</p>
  </div>
  <p className="p__opensans">
    Every dish tells a story, blending tradition with innovation. We believe in using the finest ingredients, embracing sustainable practices, 
    and delivering meals that nourish both body and soul.
  </p>
</div>


      <div className="app__chef-sign">
        <p>Abdullah</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;