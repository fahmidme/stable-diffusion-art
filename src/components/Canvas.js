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
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  
      // Calculate the scale factor to fit the image within the canvas
      const scaleFactor = Math.min(
        canvasRef.current.width / image.width,
        canvasRef.current.height / image.height
      );
  
      // Calculate the new dimensions of the image
      const newWidth = image.width * scaleFactor;
      const newHeight = image.height * scaleFactor;
  
      // Calculate the position to center the image
      const offsetX = (canvasRef.current.width - newWidth) / 2;
      const offsetY = (canvasRef.current.height - newHeight) / 2;
  
      // Draw the image on the canvas
      ctx.drawImage(image, offsetX, offsetY, newWidth, newHeight);
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
