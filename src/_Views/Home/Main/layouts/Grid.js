import React, { memo } from "react";
import "../_Shared/_style.scss";

export default memo(() => {
  return (
    <div className="mainGrid">
      <div className="mainGrid__main">
        <div className="mainGrid__main__contents">
          <span>داخلی</span>
          <img src="/Images/back-1.jpg" />
        </div>

        <div className="mainGrid__main__contents">
          <span>خروجی</span>
          <img src="/Images/back-2.jpg" />
        </div>

        <div className="mainGrid__main__contents">
          <span>تزیینی</span>
          <img src="/Images/back-3.jpg" />
        </div>

        <div className="mainGrid__main__contents">
          <div className="mainGrid__main__contents__box">
            <p>محصولات</p>
            <a className="text_contents">
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
            </a>
            <div className="fotter-card">
              <a className="left">
                <i className="material-icons">chevron_left</i>
              </a>
              <a className="right">بیشتر</a>
            </div>
          </div>
        </div>

        <div className="mainGrid__main__contents">
          <span>داخلی</span>
          <img src="/Images/back-4.jpg" />
        </div>

        <div className="mainGrid__main__contents">
          <span>سفارشی</span>
          <img src="/Images/back-5.jpg" />
        </div>

        <div className="mainGrid__main__contents">
          <span>داخلی</span>
          <img src="/Images/back-6.png" />
        </div>

        <div className="mainGrid__main__contents">
          <span>خارجی</span>
          <img src="/Images/back-7.jpg" />
        </div>
      </div>
    </div>
  );
});
