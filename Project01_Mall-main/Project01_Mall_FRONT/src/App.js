import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainPage from './MainPage/MainPage';
import SignUp from './MyPage/SignUp/SignUp';
import SignIn from './MyPage/SignIn/SignIn';
import QA from './MainPage/Category/Community/Q&A/QA';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bottom from './MainPage/Category/Bottom/Bottom';
import EditMemberInfo from './MyPage/MyPageDetail/EditMemberInfo';

function App() {
  return (
    <Router>
      <div className='App'>
      <Routes>
          <Route path ="*" element = {
            <div>
          <Header/>
          <MainPage/>
          <Footer/>
          </div>} />
          <Route path="/SignIn" element={
            <div>
            <Header />
            <SignIn />
            <Footer />
            </div>
          } />
          <Route path="/SignUp" element={
            <div>
            <Header />
            <SignUp />
            <Footer />
            </div>
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
            <QA />
            <Footer />
            </div>
          } />
          <Route path="/EditMemberInfo" element={
            <div>
            <Header />
            <EditMemberInfo />
            <Footer />
            </div>
          } />          
      </Routes>

      </div>
    </Router>
  );
}

export default App;
