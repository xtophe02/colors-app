import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ item }) => {
  const { name, color } = item;
  const [copied, setCopy] = useState(false);

  const changeCopyStatus = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={color} onCopy={changeCopyStatus}>
      <div style={{ backgroundColor: color }} className="ColorBox">
        <div
          style={{ backgroundColor: color }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{color}</p>
        </div>
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
            .copy-overlay {
              opacity: 0;
              z-index: 0;
              width: 100%;
              height: 100%;
              transition: transform 0.6s ease-in-out;
              transform: scale(0.5);
            }
            .copy-overlay.show {
              opacity: 1;
              transform: scale(50);
              z-index: 10;
              position: absolute;
            }
            .copy-msg {
              position: fixed;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              font-size: 4rem;
              transform: scale(0.5);
              opacity: 0;
              color: white;
            }
            .copy-msg.show {
              opacity: 1;
              transform: scale(1);
              z-index: 11;
              transition: all 0.4s ease-in-out;
              transition-delay: 0.3s;
            }
            .copy-msg h1 {
              font-weight: 400;
              text-shadow: 1px 2px black;
              background: rgb(255, 255, 255, 0.2);
              width: 100%;
              text-align: center;
              margin-bottom: 0;
              padding: 1rem;
              text-transform: uppercase;
            }
            .copy-msg p {
              font-size: 2rem;
              font-weight: 100;
            }
          `}
        </style>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
