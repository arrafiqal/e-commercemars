import React from "react";
import {
  About,
  Container,
  Image,
  ImageColumn,
  ImageContainer,
  ImageText,
  ImageWrapper,
  Title,
} from "./styled";

const AboutComponent = () => {
  return (
    <Container>
      <About>
        <Title>Tentang Kami</Title>
        <ImageContainer>
          <ImageWrapper>
            <img src="/assets/maryos.jpg" alt="about" />
            <ImageText>Muhammad Arrafiqal Maryo</ImageText>
            <h4> Ceo @MarsApp</h4>
          </ImageWrapper>
        </ImageContainer>
      </About>
    </Container>
  );
};

export default AboutComponent;
