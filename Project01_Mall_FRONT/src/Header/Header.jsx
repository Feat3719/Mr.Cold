import axios from 'axios';
import style from './Header.module.css';
import header_logo from './IMG/header_logo4.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() { 
  const [sessionID, setSessionID] = useState('');

  useEffect(() => {
    const sessionIDFromStorage = sessionStorage.getItem('sessionID');
    if (sessionIDFromStorage !== null && sessionIDFromStorage !== '') {
        setSessionID(true);
    }
  }, []);

  const LogOut =  (e) => {
    e.preventDefault();
    sessionStorage.clear();
    setSessionID(false);
    window.location.href = 'http://localhost:3000';  
  };


  return (
    <div className={style.H}>
        <div id={style.header} className={style.Header}>
        <div className={style.head_logo}>
              <a href="http://localhost:3000/">
                <img src={header_logo} />
              </a>
        </div>

        <ul id={style.categoryMenu}>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Board</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="" style={{color:'red'}}>Notice</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="" style={{color:'blue'}}>Event</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">FAQ</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">Membership</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Outer</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="">후드집업</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">가디건</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">자켓</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">무스탕</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">코트</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">패딩</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Top</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="">셔츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">긴팔티</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">반팔티</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">니트/스웨터</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">맨투맨</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">후드티</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/Bottom" className={style.cM_menu_title}>Bottom</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="">슬랙스</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">데님</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">조거/카고팬츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">와이드팬츠</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Shoes</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="">구두</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">로퍼</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">부츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">샌들</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">슬리퍼</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">스니커즈</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Accessory</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="">반지</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">목걸이</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">팔찌</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">ETC</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="" className={style.cM_menu_title}>Community</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/Community/QA">Q&A</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="">Review</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/main" className={style.cM_menu_title}>My Page</a>

                  {sessionStorage.getItem('sessionID') != null && sessionStorage.getItem('sessionID').length > 0 ? (
                    // 로그인된 상태일 때의 내용
                    <div className={style.cM_menu_layout}>
                      <ul className={style.cM_menu}>
                        <li className={style.cM_record}><a href="/main" style={{color:'blue'}}>MR. {sessionStorage.getItem('sessionID')}</a></li>
                        <li className={style.cM_record}><a href="/EditMemberInfoAuth" >개인정보수정</a></li>
                        <li className={style.cM_record}><a href="/main">장바구니</a></li>
                        <li className={style.cM_record}><a href="/main">최근조회상품</a></li>
                        <li className={style.cM_record}><a href="/main">쿠폰등록</a></li>
                        <li className={style.cM_record}><a href="" onClick={LogOut}>로그아웃</a></li>
                        {/* <li className={style.cM_record}><a href="" onClick={Withdraw} style={{color:'gray'}} >회원탈퇴</a></li> */}
                      </ul>
                    </div>
                  ) : (
                    // 로그인되지 않은 상태일 때의 내용
                    <div className={style.cM_menu_layout}>
                      <ul className={style.cM_menu}>
                        <li className={style.cM_record}><a href="/SignIn">로그인</a></li>
                        <li className={style.cM_record}><a href="/SignUp">회원가입</a></li>
                        <li className={style.cM_record}><a href="/IdFind">아이디찾기</a></li>
                        <li className={style.cM_record}><a href="/PwFind">비밀번호찾기</a></li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>

        </div>
    </div>



  );
}

export default Header;