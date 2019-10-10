import React from "react";

const ColorBox = ({ item }) => {
  return (
    <div style={{ backgroundColor: item.color }} className="ColorBox">
      <span>{item.name}</span>
      <span>MORE</span>
      <style jsx>
        {`
          .ColorBox {
            width: 20%;
            height: 25%;
            margin: 0 auto;
            display: inline-block;
            position: relative;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default ColorBox;
