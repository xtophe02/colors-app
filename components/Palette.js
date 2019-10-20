import React, { useState } from "react";
import "./Palette.css";
import Navbar from "./Navbar";

import ColorBox from "./ColorBox";

const Palette = ({ pallete }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  return (
    <div className="Palette">
      <Navbar
        level={level}
        setLevel={setLevel}
        format={format}
        setFormat={setFormat}
      />

      <div className="Palette-colors">
        {pallete.colors[level].map(color => (
          <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
