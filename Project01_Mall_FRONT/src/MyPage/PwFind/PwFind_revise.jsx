import style from './PwFind.module.css'
import axios from 'axios'
import { useState } from 'react'

function PwFind_revise() {
    const [PW, setPW] = useState("")
    const [PW2, setPW2] = useState("")

    const onPWHandler = (et) => {
        setPW(et.currentTarget.value);
    }
    const onPW2Handler = (et) => {
        setPW2(et.currentTarget.value);
    }
    
    const onSubmit = async function(e) {
        
        //////////* 개인정보 입력값 정규식 *///////////
        
        const pwCon = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{9,19}$/;
        const pw2Con = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{9,19}$/;
        
        if(!pwCon.test(PW)) {
            alert("비밀번호를 다시 입력해주세요.(10~20자 길이의 소문자, 숫자, 특수문자의 조합으로 표현됩니다.)")
            return false;
        }
        if(!pw2Con.test(PW2)) {
            alert("비밀번호를 다시 입력해주세요.(10~20자 길이의 소문자, 숫자, 특수문자의 조합으로 표현됩니다.)")
            return false;
        }
        if(PW != PW2) {
            alert("비밀번호가 일치하지 않습니다.")
            return false;
        }

        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/PwFind_revise', {
                ID : sessionStorage.getItem("sessionIDPwRevise"),
                PW : PW
            });

            if (response.data.key == 1) {
            
                alert("비밀번호 변경이 완료되었습니다.")
                if(window.confirm("로그인 페이지로 이동하시겠습니까?")) {
                    window.location.href = 'http://localhost:3000/SignIn';  
                } else window.location.href = 'http://localhost:3000/';  
                 
            } else if (response.data.key == 2){
                alert("오류발생. 세션이 로그아웃됩니다. 다시 시도하십시오")
                sessionStorage.clear();
                window.location.href = 'http://localhost:3000/';
            } else {
                alert(response.data.key);
                alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.1");
            }
        } catch (error) {
            alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해주세요.2");
        }
    }

    return (
        <>
            <div className={style.Body}>
                <div className={style.Title}>
                    <span>홈 〉 비밀번호찾기 〉 비밀번호변경 </span>
                    <h1>비밀번호변경</h1>
                </div>
                <form className={style.Form} onSubmit={onSubmit} id='form'>
                    <table className={style.Table}>
                        <tbody>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input className={style.input} onChange={onPWHandler} type='password' placeholder='비밀번호'></input> <span>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 7자~12자</span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td>
                                    <input className={style.input} onChange={onPW2Handler} type='password' placeholder='비밀번호 확인' ></input>
                                    {PW2 == '' ? ('') : PW != PW2 ? (<span className={style.notpass}> !!! 비밀번호가 일치하지 않습니다 !!!</span>) : ''}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit" onSubmit={onSubmit} >확인</button>
                </form>
            </div>


        </>
    );
}

export default PwFind_revise