import styles from './Board.module.css'
import { useParams } from 'react-router';


const Board=()=>{

    const params = useParams();
    return(

        <div className={styles.Body}>
            <div className={styles.TitleRow}>
                <span>홈 〉 게시판 〉 {params.id}</span>
             <h1>{params.id=='csc'?'CSC':params.id=='review'?'REVIEW':'고객 질문 [Q&A]'}   </h1>


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
                    <tr>
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
       
                  
                    
                    <tr>
                        <th>
                         1
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                       2
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           3
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                        4
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                        5
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                         6
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           7
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           8
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           9
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           10
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           11
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           12
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           13
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           14
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>
                    <tr>
                        <th>
                           15
                        </th>
                        <td>
                        [자체제작] 섹시수트 세미핏
                        
                        </td>
                        <td>
                        택배비 인상으로 인한 무료배송 금액인상 HIT
                        </td>
                        <td>
                        비브로 주식회사
                        </td>
                        <td>
                        2021-08-27 12:27:26
                        </td>
                    </tr>

                </tbody>

                </table>
                
                    <div className={styles.WriteButtonRow}>
                        <a href='/board/write'>글작성</a>
                    </div>
                    
                   
                <div className={styles.PageContainer}>
      <a href='#' >《</a>
      <a  href='#'>〈</a>
      <a  href={`/board/${params.id}?page=1`} className={styles.Focus}>1</a>
      <a  href={`/board/${params.id}?page=2`}>2</a>  
      <a  href={`/board/${params.id}?page=3`}>3</a>
      <a  href={`/board/${params.id}?page=4`}>4</a>
      <a  href={`/board/${params.id}?page=5`}>5</a>
      
      <a  href='#'>〉</a>
      <a  href='#'>》</a>
      </div>






        </div>


    );
}



export default Board;
