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
                                        { headli3: "급여지급" },
                                        { headinfo: "월별 직원 급여 지급 내역을 관리하고 확정합니다."}
                                    ]}
                                />

                                <ul className={s.appoint_card}>
                                    <li><p style={{display:"flex",marginLeft:"110px"}}><img src="/Trending Up (1).png" alt="" />지급합계</p><span>28,640,000원</span><p className={s.lighter} style={{color:'#60A5FA'}}>전월 대비 +240,000원</p></li>
                                    <li><p style={{display:"flex",marginLeft:"110px"}}><img src="/Trending Down.png" alt="" />공제합계</p><span>4,128,000원</span><p className={s.lighter} style={{color:'#E11D48'}}>전월 대비 +34,000원</p></li>
                                    <li><p style={{display:"flex",marginLeft:"100px"}}><img src="/Banknote (4).png" alt="" />실지급 합계</p><span>24,512,000원</span><p className={s.lighter}>대상인원 8명</p></li>
                                    <li><p style={{display:"flex",marginLeft:"110px", marginTop:'10px'}}><img src="/Clock (5).png" alt="" />지급상태</p><div><span style={{color:'#CA8A04'}}>미확정 8건</span><p style={{color:'#16A34A'}}>확정 0건</p></div><p className={s.lighter} style={{color:"#9CA3AF"}}>2025년 7월분</p></li>
                                </ul>

                                <div className={s.status_search}>
                                    <div>
                                        <div className={s.search_day}>
                                            <button className={s.left}>
                                                <img src="/Chevron Left (1).png" alt="" />
                                            </button>
                                            <div>
                                                <img src="/Calendar (2).png" alt="" />
                                                <p>2025년 7월</p>
                                            </div>
                                            <button className={s.right}>
                                                <img src="/Chevron Right (1).png" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label>부서</label>
                                        <select>
                                            <option value="전체 부서">전체 부서</option>
                                            <option value="인사팀">인사팀</option>
                                            <option value="개발팀">개발팀</option>
                                            <option value="영업팀">영업팀</option>
                                        </select>
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
                                   
                                </div>

                                <div className={s.status_head}>
                                    <img src="/Table.png" alt="" />
                                    <span>2025년 7월 급여 지급 내역</span>
                                    <div>
                                        <ul className={s.head_list}>
                                            <li><span style={{backgroundColor:"#DBEAFE"}}></span>지급항목</li>
                                            <li><span style={{backgroundColor:"#FEE2E2"}}></span>공제항목</li>
                                            <li><span style={{backgroundColor:"#DCFCE7"}}></span>실지급</li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className={s.payinfo_cont}>
                                    <li><input type="checkbox" checked/></li>
                                    <li>사원번호</li>
                                    <li>성명</li>
                                    <li>부서</li>
                                    <li>기본급</li>
                                    <li>식대</li>
                                    <li>교통비</li>
                                    <li>야근수당</li>
                                    <li>지급소계</li>
                                    <li>국민연금</li>
                                    <li>건강보험</li>
                                    <li>고용보험</li>
                                    <li>소득세</li>
                                    <li>공제소계</li>
                                    <li>실지급액</li>
                                </ul>

                                <ul className={s.status_sum}>
                                    <li><img src="/Sigma.png" alt="" /><span>합계 (8명)</span></li>
                                    <li>25,760,000</li>
                                    <li>1,600,000</li>
                                    <li>1,000,000</li>
                                    <li>1,280,000</li>
                                    <li>28,640,000</li>
                                    <li>1,152,000</li>
                                    <li>1,018,800</li>
                                    <li>277,260</li>
                                    <li>720,000</li>
                                    <li>4,128,060</li>
                                    <li>24,511,940</li>
                                </ul>

                                <div className={s.status_result}>
                                    <p>총 8명 · 2025년 7월분 급여</p>
                                    <span></span>
                                    <div className={s.result_span}>
                                        <img src="/Clock (5).png" alt="" />
                                        <p>미확정 8건 - 급여확정 후 명세서 발송 가능</p>
                                    </div>
                                    
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