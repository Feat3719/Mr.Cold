import styles from './Board.module.css'
import { useParams } from 'react-router';
import Pagination from "react-js-pagination";
import { useState } from 'react'
import { Link , useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import axios from "axios"

// 페이지 정보를 세션 스토리지에 저장하는 함수
const savePageToSessionStorage = (page) => {
  sessionStorage.setItem('currentPage', page);
};

// 세션 스토리지에서 페이지 정보를 가져오는 함수
const getPageFromSessionStorage = () => {
  return sessionStorage.getItem('currentPage') || 1;
};
const QnABoard=()=>{
    const [date, setDate] = useState("");

    const moment = require('moment');

    const params = useParams();
    const [totalItemsCount, setTotalItemsCount] = useState(10);
    
    const [page, setPage] = useState(getPageFromSessionStorage() || 1);
    const location = useLocation();
    const handlePageChange = (page) => {
        setPage(page);
    };
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        savePageToSessionStorage(page)
        setUserId(sessionStorage.getItem('sessionID')); 
           const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:8080/category/qnaList?p=${page}`;
                const response = await axios.get(apiUrl);
                // 성공적으로 데이터를 가져왔을 때 상태를 업데이트합니다.
                setPosts(response.data.QnAList.content);
                setTotalItemsCount(response.data.totalElements);
                console.log(response.data.QnAList.content);
                 setDate(moment(response.data.createdDate).format('YYYY-MM-DD HH:mm'));

            } catch (error) {
                // 에러 처리
                console.error('데이터를 불러오는 중 에러 발생: ', error);
            }
        };

        // 비동기 함수를 호출
        fetchData();
      }, [page, location.pathname]); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 합니다.
    

    return(

        <div className={styles.Body}>
            <div className={styles.TitleRow}>
                <span>홈 〉 게시판 〉 QnA {params.id}</span>
             <h1>고객 질문 [Q&A] </h1>


            </div>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>        
                        <th>상품정보</th>        
                        <th>제목</th>        
                        <th>작성자</th>        
                        <th>작성일</th>        
                   </tr>        

                </thead>
                <tbody>
                    {/* <tr>
                        <th>
                            공지
                        </th>
                        <td>
                        </td>
                        <td>
                        옐로우 카카오톡 실시간 상담안내 HIT
                        </td>
                        <td>
                        MRcold
                        </td>
                        <td>
                            139-123.123.
                        </td>
                    </tr>
                    <tr>
                        <th>
                            공지
                        </th>
                        <td>
                            
                        </td>
                        <td>
                        ★ 후기 적립금 안내 ★ HIT[2]
                        </td>
                        <td>
                            MRcold
                        </td>
                        <td>
                            139-123.123.
                        </td>
                    </tr>
                    <tr>
                        <th>
                            공지
                        </th>
                        <td>
                        
                        </td>
                        <td>
                        휴대폰 결제 및 에스크롤(실시간계좌이체) 안내 HIT
                        </td>
                        <td>
                        MRcold
                        </td>
                        <td>
                            139-123.123.
                        </td>
                    </tr>
                    <tr>
                        <th>
                            공지
                        </th>
                        <td>
                            
                        </td>
                        <td>
                        무통장 입금시 유의사항 HIT
                        </td>
                        <td>
                        MRcold
                        </td>
                        <td>
                            139-123.123.
                        </td>
                    </tr>
        */}
          
                    {posts.map(post => (
                        <tr key={post.id} >
                            <Link to={"/Community/QA/ReadQnA/"+post.id}>
                            
                            <th>{post.id}</th>
                            <td>{post.subject}</td>
                            <td>
                                {post.title}</td>
                            
                            <td>{post.member.id}</td>
                            {/* <td>{date}</td> */}
                        <td>{moment(post.createdDate).format('YYYY-MM-DD HH:mm')}</td>

                            </Link>
                        </tr>
                    ))}
                    
        
 
            
             
        
               

                </tbody>

                </table>
                
                {userId !== null && userId !== '' && (
                    <div className={styles.WriteButtonRow}>
                    <a href='/Community/QA/Writer'>글작성</a>
                    </div>
      )}
                    

                    
                    
                   
            <Pagination
            activePage={Number(getPageFromSessionStorage()) || page} // 현재 페이지
            itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
            totalItemsCount={totalItemsCount} // 총 아이템 갯수
            pageRangeDisplayed={5} // paginator의 페이지 범위
            firstPageText={"《"}
            prevPageText={"〈"} // "이전"을 나타낼 텍스트
            nextPageText={"〉"} // "다음"을 나타낼 텍스트
            lastPageText={"》"}
            onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
            itemClass="page-li"
        linkClass="page-link"
        hideDisabled={true}
            />



        </div>


    );
}



export default QnABoard;
