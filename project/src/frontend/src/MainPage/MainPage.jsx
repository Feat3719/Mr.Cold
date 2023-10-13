import React from 'react';
import style from './MainPage.module.css';
import MainSlider from './Main_Slider';

function MainPage () {
    return(
        <>
        <div >
            <div className={style.topSlide}>
                <MainSlider />
            </div>

            <div className={style.Body}>
                <div className={style.MainContainer}>
                        

                        <div className={style.BestItemContainer}>
                        <h1>Best Item</h1>

                            <ul>
                                <li>
                                    <a className={style.BestItem} href='/View' alt='베스트 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202308/d8640469df0e72a7a870bc66781b970e.webp" alt="베스트 아이템" />
                                    <span>렌디 데님 셋업</span>
                                        <span>81,900원</span>
                                        </a>
                                </li>
                                <li>
                                    <a className={style.BestItem} href='/View' alt='베스트 아이템'> 
                                    <img src="https://www.sexysuit.kr/web/product/medium/202308/26cae4f461f6463639f49f215fba915c.gif" alt="베스트 아이템" />
                                    <span>스폴 기획 카라 니트</span>
                                        <span>32,900원</span>
                                        </a>
                                </li>
                                <li>
                                    <a className={style.BestItem} href='/View' alt='베스트 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/6e60049ae64c2010d194a2919365f85e.webp" alt="베스트 아이템" />
                                    <span>코튼 티셔츠 [당일 발송]</span>
                                        <span>25,900원</span>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    
                     
                        <div className={style.NewArrivalsContainer}>
                        <h1>New Arrivals</h1>

                            <ul >
                                <li>
                                    <a href='/View' alt='신상품 아이템' >
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/acc9343840d2bb242e1077fad5e55cda.webp" alt="신상품1" />
                                 
                                        </a>
                                </li>
                                <li>
                                    <a href='/View' alt='신상품 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/5a790d5a8ee248946e2b1dbc9666d53d.jpg" alt="신상품2" />
                                  
                                        </a>
                                </li>
                                <li>
                                    <a href='/View' alt='신상품 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/d1611a5c079f48405693aa4ee45b9f7e.gif" alt="신상품3" />
                                 
                                        </a>
                                </li>
                          
                                <li>
                                    <a href='/View' alt='신상품 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/2bbc672185b1ebeb111eda99da2a7f21.webp" alt="신상품4" />
                                 
                                        </a>
                                </li>
                                <li>
                                    <a href='/View' alt='신상품 아이템'>
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/69e84f37b27cfae399cbf71125b6f718.gif" alt="신상품5" />
                                  
                                        </a>
                                </li>
                                <li>
                                    <a href='/View' alt='신상품 아이템' >
                                    <img src="https://www.sexysuit.kr/web/product/medium/202309/f9060826c626d860215015a53ca85cbf.gif" alt="신상품6" />
                                 
                                        </a>
                                </li>
                            </ul>
                        </div>
                     

                     <div className={style.ReviewContainer}>
                            <h1>리뷰</h1>


                            <ul>

                                <li>
                                    <a href='/View' alt='리뷰1'>
                                    <img src='https://www.sexysuit.kr/web/product/medium/202304/d88322fa104f5b8d5401a2ac1300bad7.webp'></img>
                                    <span>만족</span>
                                    <span>추천합니다                                                    </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/View' alt='리뷰1'>
                                    <img src='https://www.sexysuit.kr/web/product/medium/202303/1c17937d56559f73192e3e547dac6b40.gif'></img>
                                    <span>만족</span>
                                    <span>배송 빠르고 좋네요</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/View' alt='리뷰1'>
                                    <img src='https://www.sexysuit.kr/web/product/medium/202304/6d66a866a5d32a29e18a7fe39d7c16a1.gif'></img>
                                    <span>만족</span>
                                    <span>배송 좋네요</span>
                                    </a>
                                </li>
                                <li>
                                    <a href='/View' alt='리뷰1'>
                                    <img src='https://www.sexysuit.kr/web/product/medium/202307/81e3e1386be31ad125c0376ebccc8d95.jpg'></img>
                                    <span>만족</span>
                                    <span>너무 좋네요</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default MainPage;