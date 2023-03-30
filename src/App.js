import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Toolbar";
import ArtElementMenu from "./components/ArtElementMenu";
import ColorPalette from "./components/ColorPalette";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";
import Settings from "./components/Settings";
import { generateImage } from "./api/dalle";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleElementClick = async (element) => {
    console.log(`Selected element: ${element}`);

    const prompt = `A ${element} created with stable diffusion --version 3 --s 1250 --uplight --ar 4:3 --no text, blur`;
    const newImageUrl = await generateImage(prompt);
    setImageUrl(newImageUrl);
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
    </div>
  );
}

export default App;
