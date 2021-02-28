import React, { memo } from "react";
import './_Shared/_style.scss'
import TopColumn from './layouts/topColumn';
import EqualCol from './layouts/equalCol';
import Grid from './layouts/Grid';
import Grid2 from './layouts/Grid2';
import NewsLetter from './layouts/NewsLetter';
import Footer from './layouts/Footer';
export default memo(() => {
  return (
      <div className="mainMain">
          <TopColumn />
          <EqualCol />
          <Grid />
          <Grid2 />
          <NewsLetter />
          <TopColumn />
          <EqualCol />
          <Footer />
      </div>
      
    );
});
