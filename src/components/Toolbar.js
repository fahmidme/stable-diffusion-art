import React from "react";
import styled from "styled-components";
import { BiSave, BiShareAlt } from "react-icons/bi";

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  padding: 0;
`;

const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <Title>Stable Diffusion Art</Title>
      <div>
        <Button>
          <BiSave />
        </Button>
        <Button>
          <BiShareAlt />
        </Button>
      </div>
    </ToolbarWrapper>
  );
};

export default Toolbar;
