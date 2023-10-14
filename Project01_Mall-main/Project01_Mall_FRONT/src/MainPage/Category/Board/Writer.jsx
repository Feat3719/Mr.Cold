import React from 'react';
import { useState , useRef} from 'react'
import styles from './Write.module.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import FontSize  from '@ckeditor/ckeditor5-font';
import './CKeditorStyle.css';
import axios from "axios"


function Writer() {
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("상품");
    const editorRef = useRef();

    const onTitleHandler = (et) => {
        setTitle(et.currentTarget.value);
    }
    const onSubjectHandler = (et) => {
        setSubject(et.currentTarget.value);
    }


    const onCancel = () => {
        window.location="/Community/QA"
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

        const data = {title, subject, content }

    
        try {
            alert("1")
            const response = await axios.post('http://localhost:8080/category/write', data);
            alert("2")
            if (response.status === 200) {
                alert("3")
                if (response.data.success == true) {
                    alert("4")
                    alert(response.data.successMessage);
                    sessionStorage.setItem('currentPage', 1);
                        window.location.href = '/Community/QA';
                     
                } else {
                    alert(response.data.error);
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
                        <span>홈 〉 Q&A 〉 문의작성 </span>
                                <h1>문의작성</h1>


                </div>
                        

                    <div className={styles.ContentContainer}>


                    <ul>
                        <li>
                            <label>
                               
                                <b>문의 종류</b>
                                    <select name='id' onChange={onSubjectHandler} >
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
                            <input type='text' id='title' placeholder='※ 제목을 입력하세요 ※' onChange={onTitleHandler}></input>
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
                            data=""
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
                            <button type='button' id="writeButton" onClick={onWrite}>글 작성</button>
                            <button type='button' id="cancelButton" onClick={onCancel} >취  소</button>
                        </div>
                      
                    </div>
                    </div>     
        );
    }

export default Writer;