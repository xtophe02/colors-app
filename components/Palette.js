import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

import ColorBox from "./ColorBox";

const Palette = ({ pallete }) => {
  const [level, setLevel] = useState(500);
  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={level => {
          setLevel(level);
        }}
      />
      {/* navbar */}
      <div className="Palette-colors">
        {pallete.colors[level].map(item => (
          <ColorBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
