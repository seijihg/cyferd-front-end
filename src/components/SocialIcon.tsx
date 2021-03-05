import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitterSquare,
  faFacebook,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FC } from "react";

const SocialIcon: FC = () => {
  const checkIcons = (icon: string) => {
    if (icon === "faLinkedin") {
      return faLinkedin;
    }
    if (icon === "faTwitterSquare") {
      return faLinkedin;
    }
    if (icon === "faFacebook") {
      return faLinkedin;
    }
    if (icon === "faInstagramSquare") {
      return faLinkedin;
    }
    return faHome;
  };
  return (
    <>
      <FontAwesomeIcon icon={checkIcons("test")} />
    </>
  );
};

export default SocialIcon;
