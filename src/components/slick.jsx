// import { Carousel } from "react-carousel-minimal";
import React, { useEffect } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Slick() {

  useEffect(() => {

  })

  const settings = {
    dots: false, // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 1, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요'
    style: {
      height: "30rem"
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Wrap>
      <div>
        <Slider {...settings}>
          <div>
            <h2>1</h2>
            {/* <img src="" alt=""></img> */}
          </div>
          <div>
            <h2>2</h2>
            {/* <img src="" alt=""></img> */}
          </div>
          <div>
            <h2>3</h2>
            {/* <img src="" alt=""></img> */}
          </div>
        </Slider>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
  
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }

  .slick-next:before {
    opacity: 1;
    color: black;
  }

`;
