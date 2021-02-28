import React, { memo } from "react";
import "../_Shared/_style.scss";

export default memo(() => {
  return (
    <div className="newsLetter">
      <div className="newsLetter__main">

        <div className="newsLetter__main__contents">
           
           <img className="newsLetter__main__contents__img" src="/Images/lsmp2000.png" />
            <div className="newsLetter__main__contents__confirmBox">
                <div className="newsLetter__main__contents__confirmBox__confirm">
                    <input type="text" placeholder="ایمیل خود را وارد کنید" className="newsLetter__main__contents__confirmBox__confirm__input" />
                    <a className="newsLetter__main__contents__confirmBox__confirm__submit">ثبت</a>
                </div>
                
            </div>
            <div className="newsLetter__main__contents__Textconfirm">خبرای خوبی تو راهه  ِ عضو شو ...</div>
        </div>

      
      </div>
    </div>
  );
});
