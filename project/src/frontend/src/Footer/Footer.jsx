import style from './Footer.module.css';
import footer_logo_img from './IMG/footer_logo.svg';

function Footer () {
    return(
        <>
            <div id = {style.footer} >
                <div></div>
                <div className={style.layout_footer}>
                    <div className={style.footer_info}>
                        <div className={style.inner}>
                            <div className={style.section1}>
                                <div classname={style.footer_logo}>
                                    <img src={footer_logo_img} classname={style.footer_logo_img2}  />
                                </div>
                                <div classname={style.footer_info_category}>
                                <div classname={style.address}>
                                    <span classname={style.info_span} >COMPANY : 콜드주식회사</span>
                                    <span classname={style.info_span}>DEVELOPER : TEAM_COLD</span>
                                    <span classname={style.info_span}>PHONE : 010-3142-3719</span>
                                    <span classname={style.info_span}>FAX </span>
                                    <br/>
                                    <span classname={style.info_span}>ADDRESS : </span>
                                    <span classname={style.info_span}>PERSONAL INFORMATION MANAGER : </span>
                                    <span classname={style.info_span}>Copyright © 2023 MR.COLD ALL RIGHTS RESERVED </span>
                                </div>
                                <div classname={style.escrow}>
                                    <span classname={style.info_span}>구매안전서비스 : 고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰이 가입한 PG에스크로 구매안전서비스를 이용하실 수 있습니다. </span>
                                </div>
                                </div>
                            </div>
                            <div className={style.section2}>
                                <h3>고객문의 대표전화</h3>
                                <p>010-3142-3719</p>
                                <p>평일 10:00 ~ 18:00</p>
                                <p>주말 및 공휴일 휴무</p>

                            </div>
                            <div className={style.section3}>
                                <h3>입금계좌안내</h3>
                                <p>농협 302-1257-4099-31</p>
                                <p>기업은행 001490527-01-019</p>
                                <p>예금주 : 콜드(주)</p>
                            </div>
                            <div className={style.section4}>
                                <ul className={style.utillMenu}>
                                    <li>이용약관</li>
                                    <li>이용안내</li>
                                    <li>개인정보처리방침</li>
                                </ul>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
            <div className={style.TopBottom}>
            <button className={style.Top} onClick={()=>{
                 window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
            }}>▲</button>
            <button className={style.Bottom} onClick={()=>{
                 window.scrollTo({
                    
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                  });
            }}>▼</button>
           

            <div className={style.Sidebar}>
            <h1 className={style.SidebarTitle}>Recently</h1>
            <span>▲</span>
            <a href='#'>
                <img src='https://www.sexysuit.kr/web/product/tiny/202308/34194743653adabfd052d4308d376723.webp'  alt='최근본상품이미지'>
                
                </img>
            </a>
            <a href='#'>
                <img src='https://www.sexysuit.kr/web/product/tiny/202309/10fd7b0bc5d952b5f3eff4928dc8defe.webp' alt='최근본상품이미지'>
                
                </img>
            </a>
            <a href='#'>
                <img src='https://www.sexysuit.kr/web/product/tiny/202309/04eb5b0f1314fd05c7c6c5aea544c2f9.webp' alt='최근본상품이미지'>
                
                </img>
            </a>

            <span>▼</span>

            </div>

            </div>
            
        </>
    );

}

export default Footer;