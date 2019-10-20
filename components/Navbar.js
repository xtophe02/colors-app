import React from "react";
import Link from "next/link";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, setLevel }) => {
  return (
    <div>
      <header className="Navbar">
        <div className="logo">
          <Link href="/about">
            <a>reactcolorpicker</a>
          </Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={level => {
                setLevel(level);
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
