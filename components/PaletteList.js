import React from "react";
import seedColors from "../src/seedColors";
import Router from 'next/router'
import { withStyles } from "@material-ui/core/styles";
import styles from "../src/styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";

const PaletteList = props => {
  const { classes } = props;
  const handleClick = (id) => {
    Router.push({
      pathname: `/palette/${id}`
    })
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          {seedColors.map(palette => (
            // <li key={palette.id}>
            //   <Link href={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            // </li>
            <MiniPalette {...palette} key={palette.id} handleClick={()=>handleClick(palette.id)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PaletteList);
