import logo from './logo.svg';
// import './App.css';
import ViewCategory from './MainPage/ViewCategory/ViewCategory';
import Login from './LogIn/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './SignUp/SignUp';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import Header from './Header/Header';
import Board from './MainPage/Board/Board';
import Write from './MainPage/Board/write';
import Editor from './MainPage/Board/write';
import QnABoard from './MainPage/Board/QnaBoard';
import ReadQnA from './MainPage/Board/ReadQnA';
import ModifyQnA from './MainPage/Board/ModifyQnA';

// function ViewCategory(){
//   return(

//     <div className={style.Body}>
//       <div className={style.Body2}>
//       <div className={style.title}>
//         <h5>하의</h5>
//         <ul >
//         <li className={style.li}>
//           전체
//         </li>
//         <li className={style.li}>
//           데님
//         </li >
//         <li className={style.li}>
//          코튼팬츠
//          </li>
//         <li className={style.li}>
//           하프팬츠
//         </li>

//       </ul>
//       </div>
      

      

//       <div className={style.SortMenu}>
//         <span>등록제품 : 125개</span>
//         <span className={style.Spring}></span>
//         <span>신상품</span>
//         <span>낮은가격</span>
//         <span>높은가격</span>
//       </div>

//       <ul className={style.ProductContainer}>
//         <li>
//           <a href='www.naver.com'>
//             <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

//             <div>
//             <p>라미 오픈 카라 린넨셔츠</p>
//             <p>56900원</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <a href='www.naver.com'>
//             <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

//             <div>
//             <p>라미 오픈 카라 린넨셔츠</p>
//             <p>56900원</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <a href='www.naver.com'>
//             <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

//             <div>
//             <p>라미 오픈 카라 린넨셔츠</p>
//             <p>56900원</p>
//             </div>
//           </a>
//         </li>
//         <li>
//           <a href='www.naver.com'>
//             <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

//             <div>
//             <p>라미 오픈 카라 린넨셔츠</p>
//             <p>56900원</p>
//             </div>
//           </a>
//         </li>


//       </ul>

//       <div className={style.PageContainer}>
//       <a>《</a>
//       <a>〈</a>
//       <a>1</a>
//       <a>2</a>  
//       <a>3</a>
//       <a>4</a>
//       <a>5</a>
//       <a>〉</a>
//       <a>》</a>
//       </div>
//       </div>
//     </div>
//   )
// }



function App() {

  return (
    // <div >
    //   <Header />
    //   <MainPage/>
      

    // <ViewCategory ></ViewCategory>
    // <Login></Login>
    // <SignUp></SignUp>
    // <Footer/>
    // </div>

    <BrowserRouter>
    <Routes>

    <Route path="login" element={
          
          <div>
          <Header />
          <Login></Login>
          <Footer/>
          </div>
        
        } />

          <Route path="*" element={
          
          <div>
          <Header />
          <MainPage/>
          <Footer/>
          </div>
        
        } />

<Route path="signUp" element={
          
          <div>
          <Header />
          <SignUp></SignUp>
          <Footer/>
          </div>
        
        } />

<Route path="view" element={
          
          <div>
          <Header />
          <ViewCategory/>
          <Footer/>
          </div>
        
        } />


{/* <Route path= '/board/:id' element={
          
          <div>
          <Header />
          <Board/>
          <Footer/>
          </div>
        
        } />       */}
<Route path= '/category/qna' element={
          
          <div>
          <Header />
          <QnABoard/>
          <Footer/>
          </div>
        
        } />    

<Route path= '/category/qna/write' element={
          
          <div>
          <Header />
          <Write/>
          <Footer/>
          </div>
        
        } />   

<Route path= '/category/qna/readQnA/:pid' element={
          
          <div>
          <Header />
          <ReadQnA/>
          <Footer/>
          </div>
        
        } />        



  <Route path= '/category/qna/modify/:pid' element={
          
          <div>
          <Header />
          <ModifyQnA/>
          <Footer/>
          </div>
        
        } />   

  </Routes> 
    </BrowserRouter>
  );
}

export default App;
