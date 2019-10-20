import React,{useState} from "react";
import Link from "next/link";
import Slider from "rc-slider";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, setLevel, format, setFormat }) => {
  
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
        <div className='select-container'>
          <Select value={format} onChange={e=>{
            setFormat(e.target.value)
          }}>
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBa - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
