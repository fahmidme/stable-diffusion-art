import React from "react";
import styled from "styled-components";
import { GiPalmTree, GiStarSwirl } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 8px;
`;

const ArtElement = styled.div`
  cursor: pointer;
  font-size: 48px;
  margin-bottom: 8px;
`;

const ArtElementMenu = ({ onElementClick }) => {
  return (
    <MenuWrapper>
      <ArtElement onClick={() => onElementClick("dinosaur")}>🦕</ArtElement>
      <ArtElement onClick={() => onElementClick("tree")}>
        <GiPalmTree />
      </ArtElement>
      <ArtElement onClick={() => onElementClick("star")}>
        <GiStarSwirl />
      </ArtElement>
      <ArtElement onClick={() => onElementClick("rocket")}>
        <IoIosRocket />
      </ArtElement>
    </MenuWrapper>
  );
};

export default ArtElementMenu;
