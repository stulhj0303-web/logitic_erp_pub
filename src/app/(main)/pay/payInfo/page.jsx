import Nav from '@/component/common/Nav';
import s from './page.module.css';
import Aside from '@/component/common/Aside';
import Header from '@/component/common/Header';

export default function page(){

    // const [date, setDate] = useState(new Date());

    return(
            <div className={s.container}>

                <Nav/>

                    <div className={s.main}>

                        <Aside
                                dummy = {
                                    [
                                        {
                                            titleInfo: { iconPath: "/Banknote (3).png", titleName:"급여관리"},
                                            submenuList: [ "급여기본정보관리", "급여지급","기본수당외수당관리","급여계산","급여조회"],
                                        },
                                        {
                                            titleInfo: { iconPath: "/Shield Check (2).png", titleName:"4대보험관리"},
                                            submenuList: [ "4대보험요율표설정", "국민연금관리","건강보험관리","고용보험관리","4대보험취득/상실"],
                                        }
                                    ]
                                }
                            />

                        <div className={s.InfoMain}>

                            <div className={s.mainContainer}>

                                <Header
                                    headList={[
                                        { headli1: "급여관리" },
                                        { headli3: "급여기본정보관리" },
                                        { headinfo: "직원별 기본급여 및 수당 기준 정보를 등록하고 관리합니다."}
                                    ]}
                                />

                                <ul className={s.appoint_card}>
                                    <li><p>평균 기본급</p><span>3,662,500원</span><p className={s.lighter} style={{color:'#60A5FA'}}>전월 대비 +50,000원</p></li>
                                    <li><p>최고 기본급</p><span>4,700,000원</span><p className={s.box} style={{color:'#7C3AED'}}>이영희 · 차장</p></li>
                                    <li><p>월 총 인건비</p><span>29,300,000원</span><p className={s.lighter}>기본급 합계 기준</p></li>
                                    <li><p>월 총 수당</p><span>3,340,000원</span><p className={s.lighter}>수당 합계 기준</p></li>
                                    <li><p>등록 인원</p><span>8명</span><p className={s.lighter}>미등록 0명</p></li>
                                </ul>

                                <div className={s.status_search}>
                                    <div>
                                        <label>부서</label>
                                        <select>
                                            <option value="전체 부서">전체 부서</option>
                                            <option value="인사팀">인사팀</option>
                                            <option value="개발팀">개발팀</option>
                                            <option value="영업팀">영업팀</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>직급</label>
                                        <select>
                                            <option value="전체 직급">전체 직급</option>
                                            <option value="부장">부장</option>
                                            <option value="과장">과장</option>
                                            <option value="대리">대리</option>
                                            <option value="사원">사원</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>적용기준일</label>
                                        <input type="date" style={{backgroundImage:"none"}}/>
                                    </div>
                                    <input type="text" placeholder='사원명 검색'/>
                                    <button className={s.search_btn}>
                                        <img src="/Search (1).png" alt="" />
                                        <span>조회</span>
                                    </button>
                                    <button className={s.rotate_btn}>
                                        <img src="/Rotate Ccw.png" alt="" />
                                        <span>초기화</span>
                                    </button>
                                    <button className={s.status_table}>
                                        <img src="/Table (1).png" alt="" />
                                        <span>테이블</span>
                                    </button>
                                </div>

                                <div className={s.status_head}>
                                    <img src="/Table.png" alt="" />
                                    <span>직원별 급여 기본정보</span>
                                    <div>
                                        <p className={s.receipt_span} style={{color:"#2563EB", fontWeight:'bold'}}>총 8명</p> 
                                        <ul className={s.head_list}>
                                            <li><span style={{backgroundColor:"#DBEAFE"}}></span>기본급</li>
                                            <li><span style={{backgroundColor:"#FEF9C3"}}></span>수당항목</li>
                                            <li><span style={{backgroundColor:"#D1FAE5"}}></span>계좌정보</li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className={s.payinfo_cont}>
                                    <li><input type="checkbox" checked/></li>
                                    <li>사원번호</li>
                                    <li>성명</li>
                                    <li>부서</li>
                                    <li>직급</li>
                                    <li>기본급</li>
                                    <li>식대</li>
                                    <li>교통비</li>
                                    <li>직책수당</li>
                                    <li>수당합계</li>
                                    <li>은행</li>
                                    <li>계좌번호</li>
                                    <li>적용시작일</li>
                                    <li>관리</li>
                                </ul>

                                <ul className={s.status_sum}>
                                    <li><img src="/Sigma.png" alt="" /><span>합계 (8명)</span></li>
                                    <li>29,300,000</li>
                                    <li>1,600,000</li>
                                    <li>1,000,000</li>
                                    <li>740,000</li>
                                    <li>3,340,000</li>
                                    <li>-</li>
                                    <li>-</li>
                                    <li>-</li>
                                    <li>-</li>
                                </ul>

                                <div className={s.status_result}>
                                    <p>총 8명 조회 · 1명 수정 중</p>
                                    
                                    <div className={s.result_button}>
                                        <button className={s.left}>
                                            <img src="/Chevron Left.png" alt=""/>
                                        </button>
                                        <span>1</span>
                                        <span style={{backgroundColor:'white', border:"1px solid #E5E7EB", color:'#6B7280'}}>2</span>
                                        <button className={s.right}>
                                            <img src="/Chevron Right.png" alt="" style={{marginLeft:'8px'}}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}