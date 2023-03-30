import React from "react";
import styled from "styled-components";

const PaletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 8px;
`;

const ColorButton = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  background-color: ${({ color }) => color};
`;

const ColorPalette = ({ onColorSelect }) => {
  const colors = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#008000",
    "#0000FF",
    "#4B0082",
    "#EE82EE",
  ];

  return (
    <PaletteWrapper>
      {colors.map((color) => (
        <ColorButton
          key={color}
          color={color}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </PaletteWrapper>
  );
};

export default ColorPalette;
