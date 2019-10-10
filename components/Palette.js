import React from "react";

import ColorBox from "./ColorBox";

const Palette = ({ colors }) => {
  return (
    <div className="Palette">
      {/* navbar */}
      <div className="Palette-colors">
        {colors.map(item => (
          <ColorBox item={item} />
        ))}
      </div>
      <style jsx>
        {`
          .Palette {
            height: 100vh;
          }
          .Palette-colors {
            height: 90%;
          }
        `}
      </style>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Palette;
