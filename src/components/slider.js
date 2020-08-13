import React, { Component } from "react";
import Slider from "react-slick";
import "../styles/slider.css"
import BG01 from "../images/backgrounds-01.png"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div class="center">
            <h3>
              <img
                src={BG01}
                alt="Invest"
                style={{width: '100%', height: 'auto' , alignSelf: 'center' }}
                />
            </h3>
          </div>
          <div>
          <center>
              <img
                src={BG01}
                alt="Invest"
                style={{width: '100%', height: 'auto' , alignSelf: 'center' }}
                />
            </center>
          </div>
          <div>
          <center>
              <img
                src={BG01}
                alt="Invest"
                style={{width: '100%', height: 'auto' , alignSelf: 'center' }}
                />
            </center>
          </div>
          <div>
          <center>
              <img
                src={BG01}
                alt="Invest"
                style={{width: '100%', height: 'auto' , alignSelf: 'center' }}
                />
            </center>
          </div>
          
        </Slider>
      </div>
    );
  }
}