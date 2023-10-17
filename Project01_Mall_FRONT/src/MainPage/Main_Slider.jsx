import style from './MainPage.module.css'
import React, { useState, useEffect, useRef } from 'react';


export default function MainSlider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const slideWrapperRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex(prevSlideIndex => (prevSlideIndex + 1) % 4);
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 5000); // 슬라이드 타이머

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (slideWrapperRef.current) {
            const slideDiv = slideWrapperRef.current.children[0];
            slideDiv.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
    }, [slideIndex]);
    
    

    return (
    <>
        <div className={style.TopSlide}>
            <div className={style.TopSlide_main}>
                <div className={style.TopSlide_wrapper}>
                    <div style={{
                        display: 'flex',
                        width: '400%',
                        transition: 'transform 0.5s', // 여기에 transition을 추가합니다.
                        transform: `translateX(-${slideIndex * 25}%)`
                    }}>
                        <div className={style.TopSlide_div}>
                            <a>
                                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqAfha%2FbtstRK8kfZ0%2FKQttzJCKkaomgjMR6PShUk%2Fimg.png" className={style.TopSlide_img_1} /></a>
                        </div>
                        <div className={style.TopSlide_div}>
                            <a>
                                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVkDYG%2FbtstMidPDjy%2Fhx6OQj4pCbLAfj72MiCR9k%2Fimg.png" className={style.TopSlide_img_2} /></a>
                        </div>
                        <div className={style.TopSlide_div}>
                            <a>
                                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5cZsA%2FbtstQUQTo38%2FDvcUgew7lIUhQzkQrzl481%2Fimg.png" className={style.TopSlide_img_3} /></a>
                        </div>
                        <div className={style.TopSlide_div}>
                            <a>
                                <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6A0Ey%2FbtstH2CCjLm%2FuBbK5kRl8zFG4ljkzD0uRK%2Fimg.png" className={style.TopSlide_img_4} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.TopSlide_pagination}>
                <span className={`${style.TopSlide_pagination_bullet} ${activeIndex === 0 ? style.active : ''}`}></span>
                <span className={`${style.TopSlide_pagination_bullet} ${activeIndex === 1 ? style.active : ''}`}></span>
                <span className={`${style.TopSlide_pagination_bullet} ${activeIndex === 2 ? style.active : ''}`}></span>
                <span className={`${style.TopSlide_pagination_bullet} ${activeIndex === 3 ? style.active : ''}`}></span>
            </div>
            <h1 className={style.cold_title}>MR.COLD</h1>
            {/* <div className={style.TopSlide_leftslide}><i></i></div>
            <div className={style.TopSlide_rightslide}><i></i></div>
            <div className={style.TopSlide_Button}>
                <button className={style.start}><i></i></button>
                <button className={style.stop}><i></i></button>
            </div> */}
        </div>
    </>

    );
}

