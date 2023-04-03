import React, { useState } from "react";
import "./App.css";
import "./loadingAnimation.css";
import Toolbar from "./components/Toolbar";
import ArtElementMenu from "./components/ArtElementMenu";
import ColorPalette from "./components/ColorPalette";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import { generateImage } from "./api/dalle";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleElementClick = async (element) => {
    console.log(`Selected element: ${element}`);

    setLoading(true); // Set loading to true

    const prompt = `A friendly cartoon ${element}, perfect for children's art, created with stable diffusion.`;
    const newImageUrl = await generateImage(prompt);
    setImageUrl(newImageUrl);

    setLoading(false); // Set loading back to false
  };

  const handleColorSelect = (color) => {
    console.log(`Selected color: ${color}`);
  };

  return (
    <div className="App">
      <Toolbar />
      <div style={{ display: "flex" }}>
        <ArtElementMenu onElementClick={handleElementClick} />
        <Canvas imageUrl={imageUrl} />
        <ColorPalette onSelect={handleColorSelect} />
      </div>
      <Controls />
      <Settings />
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 999,
          }}
        >
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
