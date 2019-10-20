import React, { useState } from "react";
import "./Palette.css";
import Navbar from "./Navbar";

import ColorBox from "./ColorBox";

const Palette = ({ pallete }) => {
  const [level, setLevel] = useState(500);
  return (
    <div className="Palette">
      <Navbar level={level} setLevel={setLevel}/>

      <div className="Palette-colors">
        {pallete.colors[level].map(item => (
          <ColorBox key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Palette;
