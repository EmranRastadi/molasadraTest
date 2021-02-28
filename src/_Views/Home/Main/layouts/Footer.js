import React , {memo} from 'react';
export default memo(()=>{
    return(
        <div className="footer">
            <div className="footer__main">
                <div className="footer__main__contents">
                    <div className="footer__main__contents__mini">
                        <img src="/Images/rez.png" className="footer__main__contents__mini__img" />
                    </div>


                    <div className="footer__main__contents__mini">
                        <img src="/Images/enamad.png" className="footer__main__contents__mini__img" />
                    </div>


                    <div className="footer__main__contents__mini" style={{height:110}}>
                        <ul>
                            <li>حریم خصوصی</li>
                            <li>راهنمای خرید امن</li>
                            <li>استخدام</li>
                        </ul>
                    </div>



                    <div className="footer__main__contents__mini" style={{ height : 110}}>
                        <ul>
                            <li>پشتیبانی</li>
                            <li>راهنمای خرید امن</li>
                            <li>استخدام</li>
                        </ul>
                    </div>


                    <div className="footer__main__contents__mini" style={{ height : 110}}>
                        <ul>
                            <li>وبلاگ</li>
                            <li>قوانین</li>
                            <li>درباره ما&nbsp;&nbsp;&nbsp;</li>
                            <li>تعرفه ها</li>
                            <li style={{opacity :0}}>راهنمای خرید امن</li>

                        </ul>
                    </div>
                
                    

                </div>

                
            </div>
        </div>
    )
})