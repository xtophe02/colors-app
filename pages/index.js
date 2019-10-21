import React from "react";

import PaletteList from "../components/PaletteList";

const Home = () => {
  return (
    <div>
      <PaletteList />

      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          font-family: Roboto;
        }
      `}</style>
    </div>
  );
};

export default Home;
