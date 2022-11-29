import { Carousel } from "react-carousel-minimal";

import React from "react";
import styled from "styled-components";

export default function Slick() {
  const data = [
    {
      image: "",
    },
    {
      image: "",
    },
    {
      image: "",
    },
  ];
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <SlickBox>
      <Carousel
        data={data}
        time={5000}
        height="200px"
        width="100%"
        radius="10px"
        marginTop="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnailWidth="100px"
      />
    </SlickBox>
  );
}

const SlickBox = styled.div`
  margin-top: 20px;
`;
