import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./_Shared/_style.scss";
import "../../../../_InitialData/js/custom.js"
import $ from "jquery";
export default memo(() => {
  useEffect(() => {
    var menuBtn = $(".menu-btn");
    var hamberMenu = $(".menu-btn__hamberMenu");
    var nav = $(".nav");
    var menuNav = $(".menu-nav");
    var menuNavItem = document.querySelectorAll(".menu-nav__item");
    var showMenu = false;
    $(menuBtn).click(() => {
      if (!showMenu) {
        hamberMenu.addClass("open");
        nav.addClass("open");
        menuNav.addClass("open");
        menuNavItem.forEach((item) => item.classList.add("open"));
        showMenu = true;
      } else {
        hamberMenu.removeClass("open");
        nav.removeClass("open");
        menuNav.removeClass("open");
        menuNavItem.forEach((item) => item.classList.remove("open"));
        showMenu = false;
      }
    });


  window.addEventListener("scroll" , function(){
  let header = document.querySelector("header");

    header.classList.toggle("active" , window.scrollY  > 570);
  })
  });





  return (
    <header>
      <div className="header-content">
        <div className="menu-btn">
          <span className="menu-btn__hamberMenu"></span>
        </div>

        <nav className="nav">
          <ul className="menu-nav">
          
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                صفحه اصلی
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                محصولات
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                پروژه ها
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                برند ها
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                بلاگ ها
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                تماس با ما
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
                درباره ما
              </Link>
            </li>
            <li className="menu-nav__item">
              <Link to={"/"} className="menu-nav__link">
               <img src="/Images/brand.png" style={{float:'right',marginTop : '8px'}}/>
              </Link>
            </li>

            <li className="menu-nav__item_left" id="icons">
              <Link to={"/"} className="menu-nav__link ">
                <a className="btn">ورود / ثبت نام</a>
              </Link>
            </li>
          
            {/* <li className="menu-nav__item_left">
            <Link to={"/"} className="menu-nav__link">
               <i className="material-icons">search</i>
              </Link>
            </li> */}
            
          </ul>
        </nav>
      </div>
    </header>
  );
});
