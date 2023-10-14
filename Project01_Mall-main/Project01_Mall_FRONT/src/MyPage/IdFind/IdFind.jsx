import { useEffect, useState } from 'react';
import style from './IdFind.module.css'
import axios from 'axios';

function IdFind() {

    const [NAME, setNAME]  = useState("");
    const [EMAIL, setEMAIL]  = useState("");
    const [resName, setResName]  = useState("");
    const [resId, setResId]  = useState("");

    const onNAMEHandler = (e) => {
        setNAME(e.currentTarget.value);
    }
    const onEMAILHandler = (e) => {
        setEMAIL(e.currentTarget.value);
    }
    
    const onSubmit = async function(e) {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:8080/IdFind', {
                NAME : NAME,
                EMAIL : EMAIL
                }
            );
            switch(response.data.key) {
                case 1 : setResId(response.data.dataId); setResName(response.data.dataName); break;
                case 2 : alert("회원 정보의 이름이 일치하지 않습니다."); document.getElementById("input_ID").focus(); break; 
                case 3 : alert("해당 이메일을 가진 회원정보가 존재하지 않습니다."); document.getElementById("input_EMAIL").focus(); break;
                case 4 : alert("오류가 발생했습니다. 다시 시도해주세요"); window.location.href = 'http://localhost:3000/IdFind'; break;
            }
        } catch (error){
            alert("오류가 발생했습니다. 다시 시도해주세요.");

            return false;
        }
    }

    return(
        <>
        <div className={style.Body}>
            <div className={style.Title}>
                <span>홈 〉 아이디찾기</span>
                <h1>아이디 찾기</h1>
            </div>
                <form className={style.Form} id='form' onSubmit={onSubmit}>
                    <table className={style.Table}>
                        <tbody id='tbody'>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <input id = 'input_ID' className={style.input} type='text' onChange = {onNAMEHandler} placeholder='이름'></input>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>
                                    <input id = 'input_EMAIL' className={style.input} type='text' onChange = {onEMAILHandler} placeholder='이메일'></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        {resName && (
                            <h2> {resName} 님의 아이디는 <h2 style={{color:'red', display:'inline'}}>{resId}</h2> 입니다.</h2>
                        )}
                    </div>
                    <button type = "submit" onSubmit={onSubmit} >확인</button>
                </form>
                <a classname = {style.pwfinda}href ="/PwFind">비밀번호 찾기</a>
            </div>
        
        
        </>
    );
}

export default IdFind