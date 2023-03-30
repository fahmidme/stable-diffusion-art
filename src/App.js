import React from 'react';
import './App.css';
import Toolbar from './components/Toolbar';
import ArtElementMenu from './components/ArtElementMenu';
import ColorPalette from './components/ColorPalette';
import Canvas from './components/Canvas';
import Controls from './components/Controls';
import Settings from './components/Settings';

function App() {
const handleElementClick = (element) => {
console.log(`Selected element: ${element}`);
};

const handleColorSelect = (color) => {
console.log(`Selected color: ${color}`);
};

return (
<div className="App">
<Toolbar />
<div style={{ display: 'flex', height: 'calc(100vh - 72px)' }}>
<ArtElementMenu onElementClick={handleElementClick} />
<Canvas />
<ColorPalette onColorSelect={handleColorSelect} />
</div>
<Controls />
<Settings />
</div>
);
}

export default App;
