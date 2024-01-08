import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background: #73A580;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  font-size: 24px;
  a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      <SocialIcons>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
