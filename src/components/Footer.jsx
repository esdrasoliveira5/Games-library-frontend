import React from 'react';
import styled from 'styled-components';

const FooterS = styled.footer`
background-color: #0B090A;
color: #F5F3F4;
display: flex;
justify-content: center;
align-items: center;
height: 80px;
position: absolute;
bottom: 0;
width: 100%;
`;

function Footer() {
  return (
    <FooterS>Footer</FooterS>
  );
}

export default Footer;
