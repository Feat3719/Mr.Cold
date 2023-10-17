import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import SignUp from './MyPage/SignUp/SignUp';
import SignIn from './MyPage/SignIn/SignIn';
// import QA from './MainPage/Category/Community/Q&A/QA';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Bottom from './MainPage/Category/Bottom/Bottom';
import EditMemberInfo from './MyPage/MyPageDetail/EditMemberInfo/EditMemberInfo';
import EditMemberInfoAuth from './MyPage/MyPageDetail/EditMemberInfo/EditMemberInfoAuth';
import IdFind from './MyPage/IdFind/IdFind';
import PwFind from './MyPage/PwFind/PwFind';
import PwFind_revise from './MyPage/PwFind/PwFind_revise';
import { useState, useEffect, use } from 'react';
import QnABoard from './MainPage/Category/Community/Q&A/QnABoard';
import Writer from './MainPage/Category/Community/Q&A/Writer';
import ReadQnA from './MainPage/Category/Community/Q&A/ReadQnA';
import ModifyQnA from './MainPage/Category/Community/Q&A/ModifyQnA';

function App() {
//   const [member, setMember] = useState(false);
//   const [notMember, setNotMember] = useState(true);
//   // const [link, setLink] = useState("")

//   useEffect(() => {
//     function Member() {
//     if(sessionStorage.getItem('sessionID') != null ) {
//       setMember(true);
//     } else setMember(false);
//     if(sessionStorage.getItem('sessionID') != null ) {
//       setNotMember(false);
//     } else setNotMember(true);
//     alert(member);
//     alert(notMember);
//   }
//   Member();

// },[member]);

  return (
    <Router>
      <div className='App'>

      <Routes>
          <Route path ="/*" element = {
            <div>
          <Header/>
          <MainPage/>
          <Footer/>
          </div>} />
          <Route path="/SignIn" element = {
          <>
            <div>
            <Header />
            <SignIn />
            <Footer />
            </div>
          </>
           } />
          <Route path="/SignUp" element = {
          <>
            <div>
            <Header />
            <SignUp />
            <Footer />
            </div>
          </>
          } />
          <Route path="/EditMemberInfoAuth" element = { 
          <>
            <div>
            <Header />
            <EditMemberInfoAuth />
            <Footer />
            </div>
          </>
           }/>
          <Route path="/EditMemberInfo" element = {
          <>
            <div>
            <Header />
            <EditMemberInfo />
            <Footer />
            </div>
          </>
          } />
          <Route path="/IdFind" element = {
          <>
            <div>
            <Header />
            <IdFind />
            <Footer />
            </div>
          </>
          } />
          <Route path="/PwFind" element = {
          <>
            <div>
            <Header />
            <PwFind />
            <Footer />
            </div>
          </>
          }/>
          <Route path="/PwFind_revise" element = { 
          <>
            <div>
            <Header />
            <PwFind_revise />
            <Footer />
            </div>
          </>
          } />
          <Route path="/Bottom" element={
            <div>
            <Header />
            <Bottom />
            <Footer />
            </div>
          } />

          <Route path="/Community/QA" element={
            <div>
            <Header />
            <QnABoard />
            <Footer />
            </div>
          } />
          <Route path="/Community/QA/Writer" element={
            <div>
            <Header />
            <Writer />
            <Footer />
            </div>
          } />
          <Route path="/Community/QA/ReadQnA/:pid" element={
            <div>
            <Header />
            <ReadQnA />
            <Footer />
            </div>
          } />
          <Route path="/Community/QA/Modify/:pid" element={
            <div>
            <Header />
            <ModifyQnA />
            <Footer />
            </div>
          } />
          {/* <Route path="/EditMemberInfoAuth" render = {() => !SignedIn ? 
            <>
            <div>
            <Header />
            <EditMemberInfoAuth />
            <Footer />
            </div>
            </> : <Navigate to = "/SignIn"/>} />           */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
