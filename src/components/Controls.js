import React from 'react';
import styled from 'styled-components';
import { BiUndo, BiRedo } from 'react-icons/bi';

const ControlsWrapper = styled.div`display: flex; justify-content: center; align-items: center; background-color: #f0f0f0; padding: 8px;`

const Button = styled.button`background-color: transparent; border: none; font-size: 24px; cursor: pointer; padding: 0; margin: 0 8px;`

const Controls = () => {
return (
<ControlsWrapper>
<Button>
<BiUndo />
</Button>
<Button>
<BiRedo />
</Button>
</ControlsWrapper>
);
};

export default Controls;