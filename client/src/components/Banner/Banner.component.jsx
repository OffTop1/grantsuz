import React, {useState} from 'react';
import Slider from 'react-animated-slider'
import "react-animated-slider/build/horizontal.css";
import {MyBanner, Root, MyButton, Buttons, FadeIn } from './Banner.styles';
import "./slider-animations.css";


function MySlider ()
{
    const [animation, setAnimation] = useState(false);

    console.log(animation);

    return(
      <Root >
        <Slider  onSlideChange={event => setAnimation(true)}>
           <MyBanner img = "Banner13.jpg" align = "center" >
              <div className = "muted-banner">
                <div className = "content">
                  <h1>This is a Ttitle</h1>
                  <p>This is page description. page is very interesting</p>
                  <Buttons>
                    <MyButton>More info</MyButton>
                    <MyButton yellow>Get it</MyButton>
                  </Buttons>
                </div>
              </div>
           </MyBanner>
           <MyBanner img = "Banner14.jpg" align = "center" >
              <div className = "muted-banner">
                <div className = "content">
                  <h1>This is a Ttitle</h1>
                  <p>This is page description. page is very interesting</p>
                  <Buttons>
                    <MyButton  >More info</MyButton>
                    <MyButton yellow>Get it</MyButton>
                  </Buttons>
                </div>
              </div>
           </MyBanner>
           <MyBanner img = "Banner18.jpg" align = "center" className = {animation ? "animate" : ""}>
              <div className = "muted-banner">
                <div className = "content">
                  <h1>This is a Ttitle</h1>
                  <p>This is page description. page is very interesting</p>
                  <Buttons>
                    <MyButton >More info</MyButton>
                    <MyButton yellow>Get it</MyButton>
                  </Buttons>
                </div>
              </div>
           </MyBanner>
        </Slider>
        </Root>
    )
}

export default MySlider;