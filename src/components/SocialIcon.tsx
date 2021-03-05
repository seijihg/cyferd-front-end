import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitterSquare,
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";
import styled from "styled-components";

interface ISocialIconProps {
  iconName: string;
}

const Icon = styled.span`
  margin: 0.3rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.5);
  @media (max-width: 600px) {
    padding: 0.2rem;
  }
`;

const SocialIcon: FC<ISocialIconProps> = ({ iconName }) => {
  const checkIcons = (icon: string) => {
    if (icon === "faLinkedin") {
      return faLinkedin;
    }
    if (icon === "faTwitterSquare") {
      return faTwitterSquare;
    }
    if (icon === "faFacebook") {
      return faFacebook;
    }
    if (icon === "faInstagramSquare") {
      return faInstagramSquare;
    }
    return faHome;
  };
  return (
    <Icon>
      <FontAwesomeIcon
        icon={checkIcons(iconName)}
        style={{ color: "black" }}
        size={window.innerWidth < 600 ? "1x" : "lg"}
      />
    </Icon>
  );
};

export default SocialIcon;
