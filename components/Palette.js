import React, { useState } from "react";
import "./Palette.css";
import Navbar from "./Navbar";

import ColorBox from "./ColorBox";

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  return (
    <div className="Palette" >
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />

      <div className="Palette-colors">
        {palette.colors[level].map(color => (
          <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
          />
        ))}
      </div>
      <footer className='Palette-footer'>
        {palette.paletteName}
        <span className="emoji">{palette.emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
