import React, { memo } from "react";
import "../_Shared/_style.scss";
export default memo(() => {
  return (
    <div className="content">
      <div className="content__mainContent">
        <div className="content__mainContent__contents">
          <img
            src="/Images/back-3.jpg"
            width="100%"
            height="100%"
            className="content__mainContent__contents__img"
          />
        </div>

        <div className="content__mainContent__contents__cards">
          <div className="content__mainContent__contents__cards__card dark-darken-1">
            <p className="title dark-darken-4">کاخ سعدآباد</p>
            <span className="content-card">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </span>
            <span className="fotter-card">
              <a className="left">
                <i className="material-icons">chevron_left</i>
              </a>
              <a className="right">بیشتر</a>
            </span>
          </div>

          <div
            className="content__mainContent__contents__cards__card red-dark-2"
            style={{ borderRadius: 5 }}
          >
            <p className="title">کاخ سعدآباد</p>
            <span className="content-card">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </span>
            <span className="fotter-card">
              <a className="left">
                <i className="material-icons">chevron_left</i>
              </a>
              <a className="right">بیشتر</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});
