import React from 'react';
import axios from 'axios';

function Withdraw(withDraw) {
  const handleWithdraw = async () => {
    // 사용자에게 확인 받기
    const isConfirmed = window.confirm("정말 탈퇴하시겠습니까?");
    
    if (isConfirmed) {
      try {
        // 서버에 탈퇴 요청
        const response = await axios.get(`http://localhost:8080/Project_Mall/Withdraw.jsp?ID=${withDraw.ID}`);
        
        if (response.data.success) {
          alert('정상적으로 탈퇴되었습니다.');
          // 홈페이지로 리디렉션
          window.location.href = '/';
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error("Error during the withdrawal:", error);
        alert("탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return withDraw.isLoggedIn ? <button onClick={handleWithdraw}>회원탈퇴</button> : null;
}

export default Withdraw;