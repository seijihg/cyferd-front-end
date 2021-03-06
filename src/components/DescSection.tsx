import { FC, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import SocialIcon from "./SocialIcon";

export const H1 = `
padding: 0 10% 0 10%;
font-size: 2rem;
font-family: "Open Sans Hebrew", Sans-serif;
font-style: bold;

@media (max-width: 600px) {
  font-size: 0.8rem;
}`;

const breatheAnimation = keyframes`
  0% {
    background-position: 0 50%;
    background-position-x: 0px;
    background-position-y: 50%;
  }
  50% {
    background-position: 100% 50%;
    background-position-x: 100%;
    background-position-y: 50%;
  }
  100% {
    background-position: 0 50%;
    background-position-x: 0px;
    background-position-y: 50%;
  }
`;

const Section = styled.section`
  position: relative;
  margin-top: 0.5rem;
  padding: 2.5rem 0;
  color: white;
  background: linear-gradient(
    -155deg,
    rgb(215, 118, 42),
    rgb(215, 118, 42),
    rgb(215, 118, 42),
    rgb(0, 0, 0),
    rgb(1, 85, 51),
    rgb(0, 0, 0),
    rgb(87, 87, 87),
    rgb(0, 0, 0),
    rgb(46, 106, 107),
    rgb(46, 106, 107),
    rgb(46, 106, 107),
    rgb(46, 106, 107)
  );

  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;

  background-size: 400% 400%;

  animation: ${breatheAnimation} 15s ease-in-out infinite;
`;

const H1Desc = styled.h1`
  ${H1}
`;

const ParagraphStyled = styled.p`
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 10%;
  padding-right: 40%;
  font-family: "Cabin", sans-serif;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    padding-right: 10%;
  }
`;

const Shape = styled.div`
  transform: scaleY(-1);
  overflow: hidden;
  position: absolute;
  width: 100%;
  opacity: 0.2;
  bottom: 0;
  fill: white;
`;

const DescSection: FC = () => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  const checkWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);
  console.log(windowSize);
  return (
    <Section>
      <H1Desc>
        THE HOLISTIC DIGITAL <br /> TRANSFORMATION PLATFORM
      </H1Desc>
      <ParagraphStyled>
        Regain control of your enterprise with no-code solution development that
        enables full access to all your data, in one place, whenever and
        wherever you need it.{" "}
      </ParagraphStyled>
      <div
        style={{
          display: "flex",
          marginTop: windowSize < 960 ? "0" : "3rem",
        }}
      >
        <div style={{ width: windowSize < 960 ? "60%" : "70%" }}></div>
        <div>
          <SocialIcon iconName="faLinkedin" />
          <SocialIcon iconName="faTwitterSquare" />
          <SocialIcon iconName="faFacebook" />
          <SocialIcon iconName="faInstagramSquare" />
        </div>
      </div>
      <Shape>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </Shape>
    </Section>
  );
};

export default DescSection;
