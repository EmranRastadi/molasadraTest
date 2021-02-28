import React, { memo } from "react";
import SideBar from "./Layouts/SliderTop";
import Content from "./Main";
import "./_Shared/_style.scss";
export default memo(() => {
  return (
    <div className="main">
      <SideBar />
      <Content />

    </div>
  );
});
