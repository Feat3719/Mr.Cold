import React from 'react';
import { useState , useRef, useEffect} from 'react'
import styles from './Write.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import FontSize  from '@ckeditor/ckeditor5-font';
import './CKeditorStyle.css';
import axios from "axios"
import { useParams } from 'react-router';



function ModifyQnA() {
    const params = useParams();

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("상품");
    const editorRef = useRef();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [pid, setPid] =useState("");

    useEffect(() => {

        const fetchData = async () => {
            try {
                const apiUrl = `http://localhost:8080/category/readQnA?pid=${params.pid}`;
                const response = await axios.get(apiUrl);
                setPosts(response.data.data);
                setSubject(response.data.data.subject);
                setTitle(response.data.data.title);
               
                
                setIsLoading(false);
                setPid(response.data.data.id);

            } catch (error) {
                setIsLoading(false);
                alert("데이터 로드 중 오류가 발생했습니다. 확인 후 다시 시도해주세요.");
                console.error('데이터를 불러오는 중 에러 발생: ', error);
                window.location = "/board/QnA";
            }
        };

        // 비동기 함수를 즉시 호출합니다.
        fetchData();
    }, [params]);
    if (isLoading) {
        return(
            <div className={styles.Body}>
                    <div className={styles.TitleRow}>
                        <span>홈 〉 Q&A 〉 문의글 수정 </span>
                                <h1>문의글 수정</h1>


                </div>
             </div>             

        )
    }


    const onTitleHandler = (et) => {
        setTitle(et.currentTarget.value);
    }
    const onSubjectHandler = (et) => {
        setSubject(et.currentTarget.value);
    }


    const onCancel = () => {
        window.location="/category/qna"
    }

    const onWrite= async function(){
        const content = editorRef.current.editor.getData();
        if(title.trim()==""){
            alert("제목을 입력해주세요.");
            document.getElementById('title').focus();
            return false;
        }
        if(content.trim()==""){
            alert("내용을 작성해주세요.");
            editorRef.current.editor.focus();
            return false;

        }

        const data = {pid, title, subject, content }

    
        try {
            const response = await axios.post('http://localhost:8080/category/write', data);
            if (response.status === 200) {
                if (response.data.success == true) {
               
                    alert(response.data.successMessage);
                        window.location.href = '/category/qna';
                     
                } else {
                   if(response.data.errorMessage == "문의종류가 선택되지 않았습니다.") {
                        alert(response.data.errorMessage);
                        document.getElementById("input_ID").focus()
                   }
                   if(response.data.errorMessage == "제목이 없습니다.") {
                        alert(response.data.errorMessage);
                        document.getElementById('title').focus();
                   }
                   if(response.data.errorMessage == "게시물 내용이 없습니다.") {
                        alert(response.data.errorMessage);
                        editorRef.current.editor.focus();
                   }
                   if(response.data.errorMessage == "권한이 없습니다.") {
                    alert(response.data.errorMessage);
                    window.location.href="/category/qna";
                    
               }



                }

              // 성공적으로 응답을 받았을 때의 처리
            
            } else {
              // 서버 응답이 200이 아닌 경우의 처리
              alert("업로드를 실패했습니다. 서버를 확인해주세요.");
            }
          } catch (error) {
            // 오류 발생 시의 처리
            console.error(error);
            alert("업로드 중 오류가 발생했습니다.");
          }
          };



        return (
                <div className={styles.Body}>
                    <div className={styles.TitleRow}>
                        <span>홈 〉 Q&A 〉 문의글 수정 </span>
                                <h1>문의글 수정</h1>


                </div>
                        

                    <div className={styles.ContentContainer}>


                    <ul>
                        <li>
                            <label>
                               
                                <b>문의 종류</b>
                                    <select name='id' onChange={onSubjectHandler} value={subject}>
                                        <option value="상품">상품문의</option>
                                        <option value="교환">교환문의</option>
                                        <option value="반품">반품문의</option>
                                        <option value="배송">배송문의</option>
                                        <option value="결제">결제문의</option>
                                        <option value="기타">기타문의</option>
                                    
                                    </select>
                            </label>
                        </li>

                        <li>
                            <label>
                            <b>제목</b>
                            <input type='text' id='title' placeholder='※ 제목을 입력하세요 ※' onChange={onTitleHandler} value={title}></input>
                            </label>
                        </li>
                    </ul>
             
                  


          <CKEditor 
                            editor={ ClassicEditor }
                            ref={editorRef}
                            config={{
                                toolbar: [  
                                "|",
                                "heading",
                                "|",
                               
                                
                                
                              
                              
                                "bold",
                                "italic",
                               

                            
                                "|",
                                "bulletedList",
                                "numberedList",
                                "|",
                                "indent",
                                "outdent",
                                "|",
                                "link",
                                "blockQuote",
                                "CKFinder",
                                "imageUpload",
                                "insertTable",
                                "mediaEmbed",
                                "|",
                                "undo",
                                "redo",],
                                placeholder: "문의 내용을 작성해주세요.",
                             
                                
                            }}
                            data={posts.content}
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( '작성창 on', editor );
                            } }
                            onChange={ ( event, editor ) => {
                               
                                const data = editor.getData();
                                console.log( { event, editor, data  } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        <div className={styles.ButtonContainer}>
                            <button type='button' id="writeButton" onClick={onWrite}>글 수정</button>
                            <button type='button' id="cancelButton" onClick={onCancel} >취  소</button>
                        </div>
                      
                    </div>
                    </div>     
        );
    }

export default ModifyQnA;