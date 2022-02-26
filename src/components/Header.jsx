import React from 'react';
import styled from 'styled-components';

const HeaderS = styled.header`
@media screen and (max-width: 768px) {
  flex-direction: column;
  height: 20%;
}
padding: 10px;
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
top: 0;
width: 100%;
height: 60px;
z-index: 1;
background-color: #161A1D;
color: #F5F3F4;
`;

function Header() {
  return (
    <HeaderS>Header</HeaderS>
  );
}

export default Header;
