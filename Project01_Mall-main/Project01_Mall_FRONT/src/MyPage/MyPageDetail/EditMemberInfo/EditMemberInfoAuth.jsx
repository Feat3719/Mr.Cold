import style from "./EditMemberInfoAuth.module.css"
import { useState } from "react"
import axios from "axios"


function EditMemberInfoAuth() {
    const [PW, setPW] = useState("")

    const onPWHandler = (et) => {
        setPW(et.currentTarget.value);
    }
    const onSubmit = async function (e) {
        try {
            e.preventDefault();
            const postData = await axios.post(
                'http://localhost:8080/EditMemberInfoAuth', {
                ID: sessionStorage.getItem("sessionID"),
                PW: PW
            }
            )
            if (postData.data.moveToEditInfo) {
                sessionStorage.setItem('sessionPwForAuth', "true");
                const sessionID = sessionStorage.getItem('sessionID');
                axios.post('http://localhost:8080/EditMemberInfo_getDt', { s: "1" },
                    {
                        headers: {
                            AuthID: sessionID ? sessionID : null,
                            AuthPW: sessionStorage.getItem('sessionPwForAuth')
                        }
                    });
                window.location.href = "http://localhost:3000/EditMemberInfo"
            } else {
                alert(postData.data.Message);
                window.location.href = "http://localhost:3000/EditMemberInfoAuth"

            }
        } catch (error) {
            console.error("Error during the signup:", error);
            alert("잘못된 접근입니다");
            window.location.href = 'http://localhost:3000/'
        }
    }

    return (
        <>
            <div className={style.Body}>
                <div className={style.Title}>
                    <span>홈 〉 개인정보수정/비밀번호인증</span>
                    <h1>비밀번호 입력</h1>
                </div>
                <form className={style.Form} onSubmit={onSubmit} id='form'>
                    <table className={style.Table}>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td>
                                    <input className={style.input} type='text' placeholder='아이디' value={sessionStorage.getItem('sessionID')} disabled="false"></input> <span className={style.unchangeable}></span>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td>
                                    <input className={style.input} onChange={onPWHandler} type='password' placeholder='비밀번호'></input> <span></span>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <button type="submit" onSubmit={onSubmit} >수정</button>
                </form>
            </div>

        </>
    );

}

export default EditMemberInfoAuth