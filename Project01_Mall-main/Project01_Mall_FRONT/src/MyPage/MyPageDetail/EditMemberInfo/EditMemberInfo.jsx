import style from "./EditMemberInfo.module.css"
import { useEffect, useState } from "react"
import axios from "axios"


function EditMemberInfo() {
    // useEffect 사용하여 비회원인 경우, 회원인경우(비밀번호 인증 안한경우) 블락 //
    useEffect(() => {
        const postData = async function() {

            try {
              const sessionID = sessionStorage.getItem('sessionID');
              const sessionPwForAuth = sessionStorage.getItem('sessionPwForAuth');
              axios.post('http://localhost:8080/EditMemberInfo',{}, 
              {headers: { 
                AuthID : sessionID ? sessionID : null,
                AuthPW : sessionPwForAuth ? sessionPwForAuth : null
            }})
    
            
            } catch (error) {
                alert("error");
                window.location.href = 'http://localhost:3000/';
            }
    
        }
        postData();
    }, []);

    const [PW, setPW] = useState("")
    const [PW2, setPW2] = useState("")
    const [NAME, setNAME] = useState("")
    const [CONTACT, setCONTACT] = useState("")
    const [EMAIL, setEMAIL] = useState("")
    const [ADDRESS, setADDRESS] = useState("")

    const onPWHandler = (et) => {
        setPW(et.currentTarget.value);
    }
    const onPW2Handler = (et) => {
        setPW2(et.currentTarget.value);
    }
    const onNAMEHandler = (et) => {
        setNAME(et.currentTarget.value);
    }
    const onCONTACTHandler = (et) => {
        setCONTACT(et.currentTarget.value);
    }
    const onEMAILHandler = (et) => {
        setEMAIL(et.currentTarget.value);
    }
    const onADDRESSHandler = (et) => {
        setADDRESS(et.currentTarget.value);
    }
 
    useEffect(() => {
        // const postData = async function() {

        //     try {
        //       const sessionID = sessionStorage.getItem('sessionID');
        //       const sessionPwForAuth = sessionStorage.getItem('sessionPwForAuth');
        //       axios.post('http://localhost:8080/EditMemberInfo_getDt',{}, 
        //       {headers: { 
        //         AuthID : sessionID ? sessionID : null,
        //         AuthPW : sessionPwForAuth ? sessionPwForAuth : null
        //     }})
    
            
        //     } catch (error) {
        //         alert("error");
        //         window.location.href = 'http://localhost:3000/';
        //     }
    
        // }
        // postData();
        const GetDt = async function() {
            try {
                const sessionID = sessionStorage.getItem('sessionID');
                const sessionPwForAuth = sessionStorage.getItem('sessionPwForAuth');
                const getDt = await axios.post('http://localhost:8080/EditMemberInfo_getDt', {
                    ID : sessionStorage.getItem("sessionID")
                }, {
                    headers: {
                        AuthID : sessionID ? sessionID : null,
                        AuthPW : sessionPwForAuth ? sessionPwForAuth : null
                    }
                });
                
                if(getDt.data.key == 1) {

                    setNAME(getDt.data.NAME);
                    setCONTACT(getDt.data.CONTACT);
                    setEMAIL(getDt.data.EMAIL);
                    setADDRESS(getDt.data.ADDRESS);

                } else if (getDt.data.key == 2) {
                    alert("오류 발생. 세션이 로그아웃됩니다. 다시 로그인 하십시오")
                    sessionStorage.clear();
                    window.location.href = 'http://localhost:3000/SignIn'
                }


            } catch (error) {
                alert("잘못된 접근입니다.")
                window.location.href = 'http://localhost:3000/';
            }
        }
        GetDt();
    }, [])
    
    const onSubmit = async function(e) {
        
        //////////* 개인정보 입력값 정규식 *///////////
        
        const pwCon = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{9,19}$/;
        const pw2Con = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{9,19}$/;
        const contactCon = /^01[0-9][0-9]{3,4}[0-9]{4}$/;
        const nameCon = /^(?:[가-힣]{2,5}|[a-zA-Z]{3,10})$/;
        const emailCon = /^[a-zA-Z0-9]{5,14}@{1}[a-zA-Z0-9.]{5,14}$/;
        const addressCon = /^[가-힣a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{1,100}$/;
        
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
        if(!nameCon.test(NAME)) {
            alert("이름을 확인해주세요.")
            return false;
        }
        if(!contactCon.test(CONTACT)) {
            alert("연락처를 확인해주세요.")
            return false;
        }
        if(!emailCon.test(EMAIL)) {
            alert("정확한 형식의 이메일을 입력해주세요.")
            return false;
        }
        if(!addressCon.test(ADDRESS)) {
            alert("주소를 다시 입력해주세요.")
            return false;
        }
        try {
            // 서버에 POST 요청
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/EditMemberInfo', {
                ID : sessionStorage.getItem("sessionID"),
                PW : PW,
                NAME : NAME,
                CONTACT : CONTACT,
                EMAIL : EMAIL,
                ADDRESS : ADDRESS

            });
            if (response.data.success) {
            
                alert(response.data.successMessage);
                window.location.href = '/EditMemberInfo';  
                 
            } else {
                if(response.data.errorMessage =="이미 사용중인 연락처입니다.") {
                    alert(response.data.errorMessage);
                }
                if(response.data.errorMessage =="이미 사용중인 이메일입니다.") {
                    alert(response.data.errorMessage);
                }
                alert("다시 시도하십시오")
                alert(response.data.success)
            }
        } catch (error) {
            console.error("Error during the signup:", error);
            alert("개인정보 수정중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    }
    const Withdraw = async function(e){
        try {
            e.preventDefault();
            if(window.confirm("정말로 탈퇴하시겠습니까?")) {
                const response = await axios.post('http://localhost:8080/Withdraw', {
                    ID : sessionStorage.getItem('sessionID')
    
                });
                switch(response.data.key) {
                    case 1: alert("정상적으로 탈퇴하셨습니다."); sessionStorage.removeItem("sessionID"); window.location.href = 'http://localhost:3000/'; break;
                    case 2: alert("오류 발생. 세션이 로그아웃 됩니다."); sessionStorage.removeItem("sessionID"); window.location.href = 'http://localhost:3000/'; break;
                    case 3: alert("오류 발생. 세션이 로그아웃 됩니다."); sessionStorage.removeItem("sessionID"); window.location.href = 'http://localhost:3000/'; break;
                }  
            } else {
                window.location.href = 'http://localhost:3000/EditMemberInfo';
            }
            
            
        } catch (error) {
            alert("에러 발생")
            
        }
    }
    return (
        <>
            <div className={style.Body}>
                <div className={style.Title}>
                    <span>홈 〉 회원가입</span>
                    <h1>개인정보수정</h1>
                </div>
                <form className={style.Form} onSubmit={onSubmit} id='form'>
                    <table className={style.Table}>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td>
                                    <input className={style.input} type='text' placeholder='아이디' value={sessionStorage.getItem('sessionID')} disabled="false"></input> <span className={style.unchangeable}>변경불가</span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input className={style.input} onChange = {onPWHandler} type='password' placeholder='비밀번호'></input> <span>영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 7자~12자</span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 확인</th>
                                <td>
                                    <input className={style.input} onChange = {onPW2Handler} type='password' placeholder='비밀번호 확인' ></input>
                                    {PW2 == '' ? ('') : PW != PW2 ? (<span className={style.notpass}> !!! 비밀번호가 일치하지 않습니다 !!!</span>) : ''}
                                </td>
                            </tr>
                            <tr>
                                <th>이름</th>
                                <td>
                                    <input className={style.input} onChange = {onNAMEHandler} value={NAME} type='text' placeholder='이름'></input>
                                </td>
                            </tr>
                            <tr>
                                <th>이메일</th>
                                <td>
                                    <input className={style.input} onChange = {onEMAILHandler} value={EMAIL} type='text' placeholder='이메일'></input>
                                </td>
                            </tr>
                            <tr>
                                <th>휴대전화</th>
                                <td>
                                    <input className={style.input} onChange = {onCONTACTHandler} value={CONTACT} type='text' placeholder='연락처' maxLength={11}></input> <span> '-' 제외하고 숫자만 입력 </span>
                                </td>
                            </tr>
                            <tr className={style.AdressRow}>
                                <th>주소</th>
                                <td>
                                    <input className={style.input} onChange = {onADDRESSHandler} value={ADDRESS} type='text' placeholder='주소'></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type = "submit" onSubmit={onSubmit} >수정</button>
                </form>
                <button onClick={Withdraw}>회원탈퇴</button>
            </div>
        </>
    );
    
}

export default EditMemberInfo