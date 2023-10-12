import style from './Login.module.css'
import { useState } from 'react';
import axios from 'axios';

function Login(){
    window.addEventListener('load',()=>{
load();
    });

    function save(id, saveBoolean){
        window.localStorage.savedId = id;
        window.localStorage.savedChecked= saveBoolean;
    }

    const load = () => {
        setId( window.localStorage.savedId ?? '');
        if (window.localStorage.savedChecked==='true'){
            document.getElementById('Save').checked= true
        }
   
    };

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onIdHandler = (et) => {
        setId(et.currentTarget.value);
    }
  
    const onPasswordHandler = (et) => {
      setPw(et.currentTarget.value)
     }
  
     const onSubmit = async function(e) {
        e.preventDefault();
        
        try {

            const response = await axios.get(`http://localhost:8080/Project_Mall/SignIn.jsp?ID=${id}&PW=${pw}`);
            // alert(response.data)
            // 데이터가 없을 경우의 예외 처리
            if (!response.data) {
                alert("에러");
                throw new Error("No data received from the server.");
            }

            // 로그인 확인 로직
            if (response.data.ID_value != undefined) {
                
                sessionStorage.setItem('userId', id );
                alert(`${id} 님 환영합니다.` );
                if (id,document.getElementById('Save').checked){
                    save(id,document.getElementById('Save').checked);

                }else{
                    save('',document.getElementById('Save').checked);

                }

                window.location.href = 'http://localhost:3000/';              
            } else {
                sessionStorage.setItem('userId', '');
                alert("아이디와 비밀번호를 다시 확인해주세요.");
                return false;
            }

        } catch (error) {
            console.error("An error occurred:", error.message);
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
    }






    return(
        
        <div className={style.Body}>   
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  
            <div className={style.Title}>
                <h1>로그인</h1>
            </div>    
            <form className={style.Form} onSubmit={onSubmit}>
                <input type='text' placeholder='아이디' onChange={onIdHandler} value={id} name='id'></input>
                <input type='password' placeholder='비밀번호' onChange={onPasswordHandler} value={pw} name='pw'></input>


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

export default Login;