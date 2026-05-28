import style from './Search.module.css';

export default function Search(){

    return(
        <div className={style.mainSearch}>
            <div className={style.mainTopsearch}>
                <img src="/Search.png"/>
                <p>검색조건</p>
            </div>
            <div className={style.mainBotsearch}>
                <label>사원번호</label>
                <input type="text" placeholder='전체'/>
                <label>부서</label>
                <select>
                    <option value="전체">전체</option>
                    <option value="인사팀">인사팀</option>
                    <option value="경영지원팀">경영지원팀</option>
                    <option value="개발팀">개발팀</option>
                    <option value="영업팀">영업팀</option>
                </select>
                <label>직급</label>
                <select>
                    <option value="전체">전체</option>
                    <option value="팀장">팀장</option>
                    <option value="과장">과장</option>
                    <option value="대리">대리</option>
                    <option value="사원">사원</option>
                </select>
                <label>재직상태</label>
                <select>
                    <option value="재직중">재직중</option>
                    <option value="휴직중">휴직중</option>
                </select>
                
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