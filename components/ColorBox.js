import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ item }) => {
  const { name, color } = item;
  return (
    <CopyToClipboard text={color}>
      <div style={{ backgroundColor: color }} className="ColorBox">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
        <style jsx>
          {`
            .ColorBox {
              width: 20%;
              height: 25%;
              margin: 0 auto;
              display: inline-block;
              position: relative;
              cursor: pointer;
              margin-bottom: -3.5px;
            }
            .copy-button {
              width: 100px;
              height: 30px;
              position: absolute;
              display: inline-block;
              top: 50%;
              left: 50%;
              margin-left: -50px;
              margin-top: -15px;
              text-align: center;
              outline: none;
              background: rgba(255, 255, 255, 0.3);
              font-size: 1rem;
              line-height: 30px;
              color: white;
              text-transform: uppercase;
              border: none;
              opacity: 0;
            }
            .ColorBox:hover .copy-button {
              opacity: 1;
              transition: 0.5s;
            }
            .box-content {
              position: absolute;
              width: 100%;
              left: 0px;
              bottom: 0px;
              padding: 10px;
              color: black;
              letter-spacing: 1px;
              text-transform: uppercase;
              font-size: 12px;
            }
            .see-more {
              background: rgba(255, 255, 255, 0.3);
              position: absolute;
              border: none;
              right: 0px;
              bottom: 0px;
              color: white;
              width: 60px;
              height: 30px;
              text-align: center;
              line-height: 30px;
              text-transform: uppercase;
            }
          `}
        </style>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
