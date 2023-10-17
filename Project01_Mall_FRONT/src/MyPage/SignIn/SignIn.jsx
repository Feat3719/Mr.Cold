import style from './SignIn.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
function SignIn(e) {
    // useEffect 사용하여 회원인 경우 블락 //
    useEffect(() => {
        const postData = async function() {
    
            try {
              const sessionID = sessionStorage.getItem('sessionID');
              axios.post('http://localhost:8080/SignIn',{}, 
              {headers: { 
                AuthID : sessionID ? sessionID : null,
            }})

            } catch (error) {
                alert("error");
                window.location.href = 'http://localhost:3000/';
            }
    
        }
        postData();
    }, []);

    window.addEventListener('load', () => { load(); });

    function save(id, saveBoolean) {
        window.localStorage.savedId = id;
        window.localStorage.savedChecked = saveBoolean;
    }

    const load = () => {
        setID(window.localStorage.savedId ?? '');
        if (window.localStorage.savedChecked === 'true') {
            document.getElementById('Save').checked = true
        }

    };

    const [ID, setID] = useState("");
    const [PW, setPW] = useState("");
    const onIdHandler = (et) => {
        setID(et.currentTarget.value);
    }

    const onPasswordHandler = (et) => {
        setPW(et.currentTarget.value)
    }

    const onSubmit = async function (e) {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:8080/SignIn', {
                ID: ID,
                PW: PW
            });

            // 로그인 확인 로직

            if (response.data.signin_postkey == 1) {

                sessionStorage.setItem('sessionID', ID);
                axios.post('http://localhost:8080/SignIn', {
                    s : '1'
                }, { headers: { AuthID: ID } })
                alert(`${ID} 님 환영합니다.` );
                if (ID, document.getElementById('Save').checked) {
                    save(ID, document.getElementById('Save').checked);

                } else {
                    save('', document.getElementById('Save').checked);

                }

                window.location.href = 'http://localhost:3000/';
            } else if (response.data.signin_postkey == 2) {
                alert("비밀번호를 다시 확인해주세요");
                return false;
            } else if (response.data.signin_postkey == 3) {
                alert("아이디를 다시 확인해주세요");
                return false;
            } else alert("잘못된 접근입니다."); window.location.href = 'http://localhost:3000/';

        } catch (error) {
            console.error("An error occurred:", error.message);
            alert("오류가 발생했습니다. 다시 시도해주세요.");
            // window.location.href = 'http://localhost:3000/';
        }
    }

    return (

        <div className={style.Body}>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className={style.Title}>
                <h1>로그인</h1>
            </div>
            <form className={style.Form} onSubmit={onSubmit}>
                <input type='text' placeholder='아이디' onChange={onIdHandler} value={ID} name='id'></input>
                <input type='password' placeholder='비밀번호' onChange={onPasswordHandler} value={PW} name='pw'></input>


                <div className={style.FindContainer}>
                    <label id='idSave' className={style.idSave} ><input type='checkbox' id='Save'></input><i className={`fa-regular fa-square ${style.notChecked2}`}></i>
                        <i className={`fa-solid fa-square-check ${style.Checked2}`}></i>아이디저장</label>
                    <a href='#'>아이디찾기</a>
                    <a href='#'>비밀번호찾기</a>


                </div>


                <button type='submit' className={style.Login} onSubmit={onSubmit}>로그인</button>

            </form>
            <div className={style.SignUp}>
                <div>
                    <span>아직 회원이 아니신가요?</span>
                    <span>회원이 되시면 다양한 혜택을 누릴 수 있습니다.</span>
                </div>
                <a href='/SignUp'>회원가입</a>

            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>


    );
}

export default SignIn;