import style from './Header.module.css';
import header_logo from './IMG/header_logo4.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() { 
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const userIdFromStorage = sessionStorage.getItem('userId');
    if (userIdFromStorage !== null && userIdFromStorage !== '') {
        setUserId(true);
    }
  }, []);


  // const withDraw  = async function() {
  //   const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");
  //   if (isConfirmed) {
  //     try {
  //       const response = await axios.get(`http://localhost:8080/Project_Mall/Withdraw.jsp?ID=${withDraw.ID}`);
        
  //       if (response.data.success) {
  //         alert('정상적으로 탈퇴되었습니다.');
  //         window.location.href = '/';
  //       } else {
  //         alert(response.data.message);
  //       } 
  //     } catch (error) {
  //       console.arror("ERROR", error);
  //       alert("탈퇴 중 오류 발생");
  //     }
  //   }
  // };
  const LogOut =  (e) => {
    e.preventDefault();
    sessionStorage.setItem('userId', '');
    setUserId(false);
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
                  <a href="/view" className={style.cM_menu_title}>Board</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">Notice</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">Event</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">FAQ</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">Membership</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/view" className={style.cM_menu_title}>Outer</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">후드집업</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">가디건</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">자켓</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">무스탕</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">코트</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">패딩</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/view" className={style.cM_menu_title}>Top</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">셔츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">긴팔티</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">반팔티</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">니트/스웨터</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">맨투맨</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">후드티</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/View" className={style.cM_menu_title}>Bottom</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">슬랙스</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">데님</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">조거/카고팬츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">와이드팬츠</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/view" className={style.cM_menu_title}>Shoes</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">구두</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">로퍼</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">부츠</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">샌들</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">슬리퍼</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">스니커즈</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/view" className={style.cM_menu_title}>Accessory</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/view">반지</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">목걸이</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">팔찌</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/view">ETC</a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/category" className={style.cM_menu_title}>Community</a>
                  <div className={style.cM_menu_layout}>
                    <ul className={style.cM_menu}>
                      <li className={style.cM_record}>
                        <a href="/category/qna">Q&A</a>
                      </li>
                      {/* <li className={style.cM_record}>
                        <a href="/category/review">Review</a>
                      </li>
                      <li className={style.cM_record}>
                        <a href="/category/csc">CSC</a>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li className={style.categoryMenu_menu}>
                  <a href="/main" className={style.cM_menu_title}>My Page</a>

                  {sessionStorage.getItem('userId') != null && sessionStorage.getItem('userId').length > 0 ? (
                    // 로그인된 상태일 때의 내용
                    <div className={style.cM_menu_layout}>
                      <ul className={style.cM_menu}>
                        <li className={style.cM_record}><a href="/main">MR. {sessionStorage.getItem('userId')}</a></li>
                        <li className={style.cM_record}><a href="/main">장바구니</a></li>
                        <li className={style.cM_record}><a href="/main">최근조회상품</a></li>
                        <li className={style.cM_record}><a href="/main">관심상품</a></li>
                        <li className={style.cM_record}><a href="/main">쿠폰등록</a></li>
                        {/* <li className={style.cM_record}><a href="/view" onClick={withDraw}>회원탈퇴</a></li> */}
                        <li className={style.cM_record}><a href="/view" onClick={LogOut}>로그아웃</a></li>
                      </ul>
                    </div>
                  ) : (
                    // 로그인되지 않은 상태일 때의 내용
                    <div className={style.cM_menu_layout}>
                      <ul className={style.cM_menu}>
                        <li className={style.cM_record}><a href="/Login">로그인</a></li>
                        <li className={style.cM_record}><a href="/SignUp">회원가입</a></li>
                        {/* <li className={style.cM_record}><a href="/view">아이디/비밀번호 찾기</a></li> */}
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