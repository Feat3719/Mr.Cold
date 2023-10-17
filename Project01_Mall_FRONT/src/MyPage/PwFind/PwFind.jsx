import axios from 'axios'
import style from './PwFind.module.css'
import { useState } from 'react'

function PwFind() {
    const [ID, setID] = useState("")
    const [EMAIL, setEMAIL] = useState("")
    const onIDHandler = (et) => {
        setID(et.currentTarget.value);
    }
    const onEMAILHandler = (et) => {
        setEMAIL(et.currentTarget.value);
    }
    const onSubmit = async function (e) {
        try{
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/PwFind', {
                ID : ID,
                EMAIL : EMAIL
            });
            if (response.data.success) {
                alert("비밀번호 초기화 완료. 비밀번호를 다시 생성하십시오")
                sessionStorage.setItem("sessionIDPwRevise", ID);
                window.location.href = 'http://localhost:3000/PwFind_revise';
            } else {
                alert("아이디 혹은 이메일을 다시 확인해주십시오.");
                window.location.href = 'http://localhost:3000/PwFind';
            }
        } catch(error) {
            alert("회원정보 검색 중 오류가 발생했습니다.");
        }
    }

    return(
        <>
        <div className={style.Body}>
                <div className={style.Title}>
                    <span>홈 〉 비밀번호찾기</span>
                    <h1>비밀번호 찾기</h1>
                </div>
                <form className={style.Form} onSubmit={onSubmit} id='form'>
                    <table className={style.Table}>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td>
                                    <input className={style.input} onChange ={onIDHandler} type='text' placeholder='아이디'></input>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>
                                    <input className={style.input} onChange ={onEMAILHandler} type='text' placeholder='이메일'></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type = "submit" onSubmit={onSubmit} >확인</button>
                </form>
            </div>
        
         
        </>
    );
}

export default PwFind