import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import './ColorBox.css'

const ColorBox = ({ item }) => {
  const { name, hex } = item;
  const [copied, setCopy] = useState(false);

  const changeCopyStatus = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={name} onCopy={changeCopyStatus}>
      <div style={{ backgroundColor: hex }} className="ColorBox">
        <div
          style={{ backgroundColor: hex }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{hex}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
