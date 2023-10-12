import style from './ViewCategory.module.css';



function ViewCategory(){
    return(
      <div className={style.Body} >
      <div className={style.Body2}>
      <div className={style.Title}>
        <h5 >하의</h5>
        <ul >
        <li className={style.Li}>
          전체
        </li>
        <li className={style.Li}>
          데님
        </li >
        <li className={style.Li}>
         코튼팬츠
         </li>
        <li className={style.Li}>
          하프팬츠
        </li>

      </ul>
      </div>
      

      

      <div className={style.SortMenu}>
        <span>등록제품 : 125개</span>
        <span className={style.Spring}></span>
        <span>신상품</span>
        <span>낮은가격</span>
        <span>높은가격</span>
      </div>

      <ul className={style.ProductContainer}>
        <li>
          <a href='www.naver.com'>
            <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

            <div>
            <p>라미 오픈 카라 린넨셔츠</p>
            <p>56900원</p>
            </div>
          </a>
        </li>
        <li>
          <a href='www.naver.com'>
            <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

            <div>
            <p>라미 오픈 카라 린넨셔츠</p>
            <p>56900원</p>
            </div>
          </a>
        </li>
        <li>
          <a href='www.naver.com'>
            <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

            <div>
            <p>라미 오픈 카라 린넨셔츠</p>
            <p>56900원</p>
            </div>
          </a>
        </li>
        <li>
          <a href='www.naver.com'>
            <img src='https://www.sexysuit.kr/web/product/medium/202307/acce806ec616231b07003187c749e13a.webp' alt='shirt'></img>

            <div>
            <p>라미 오픈 카라 린넨셔츠</p>
            <p>56900원</p>
            </div>
          </a>
        </li>


      </ul>

      <div className={style.PageContainer}>
      <a>《</a>
      <a>〈</a>
      <a>1</a>
      <a>2</a>  
      <a>3</a>
      <a>4</a>
      <a>5</a>
      <a>〉</a>
      <a>》</a>
      </div>
      </div>
    </div>
    )
  }


  export default ViewCategory;