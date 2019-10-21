import React from 'react'
import seedColors from "../src/seedColors";
import Link from "../src/Link";


const PaletteList = () => {
  return (
    <div>
      <h1>React Colors</h1>
      <ul>
        {seedColors.map(palette => (
          <li key={palette.id}>
            <Link href={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PaletteList
