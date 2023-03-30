import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasWrapper = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
  position: relative;
`;

const Canvas = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setImage(img);
      };
    }
  }, [imageUrl]);

  const drawImage = () => {
    if (canvasRef.current && image) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.drawImage(image, 0, 0, image.width, image.height);
    }
  };

  useEffect(() => {
    drawImage();
  });

  return (
    <CanvasWrapper>
      <canvas ref={canvasRef} width="800" height="600" />
    </CanvasWrapper>
  );
};

export default Canvas;
