import React, { useState } from "react";
import Link from "next/link";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const Navbar = ({ level, setLevel, format, setFormat }) => {
  const [open, setOpen] = useState(true);
  const handleFormatChange = (e) =>{
    setFormat(e.target.value);
    setOpen(true)
  }
  return (
    <div>
      <header className="Navbar">
        <div className="logo">
          <Link href="/">
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
        <div className="select-container">
          <Select
            value={format}
            onChange={handleFormatChange}
          >
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBa - rgb(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={() => setOpen(false)}
          action={[
            <IconButton
              onClick={() => setOpen(false)}
              color="inherit"
              key='close'
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    </div>
  );
};

export default Navbar;
