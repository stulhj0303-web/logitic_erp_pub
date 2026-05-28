import style from './Search1.module.css'

export default function Search1(){

    return(
        <div className={style.mainSearch}>
            <div className={style.mainTopsearch}>
                <img src="/Search.png"/>
                <p>검색조건</p>
            </div>
            <div className={style.mainBotsearch}>
                <label>사원검색</label>
                <input type="text" placeholder='사원번호 또는 성명'/>
                <button className={style.empSearch}><img src="/Search (1).png" alt="" /></button>
                <label>발령유형</label>
                <select style={{borderTopRightRadius: "6px", borderBottomRightRadius:"6px", color:"#374151"}}>
                    <option value="전체">전체</option>
                    <option value="승진">승진</option>
                    <option value="전보">전보</option>
                    <option value="겸직">겸직</option>
                </select>
                <label>발령일</label>
                
                
                <button className={style.search_btn}>
                    <img src="/Search (1).png"/> <span>조회</span>
                </button>
                <button className={style.rotate_btn}>
                    <img src="/Rotate Ccw.png"/> <span>초기화</span>
                </button>
            </div>
        </div>
    )
}