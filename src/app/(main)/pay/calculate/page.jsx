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
                                        { headli3: "급여계산" },
                                        { headinfo: "계산기준월을 선택하고 조건을 설정한 후 전 직원 급여를 자동 계산합니다."}
                                    ]}
                                />

                                <div className={s.cal_head}>
                                    <div className={s.cal_date}>
                                        <div className={s.cal_box}>
                                            <label>계산기준월</label>
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
                                        <span className={s.cal_hr}></span>
                                        <div className={s.cal_box}>
                                            <label style={{marginTop:'3px'}}>계산상태</label>
                                            <div className={s.cal_status}>
                                                <span></span>
                                                <p>계산전</p>
                                            </div>
                                        </div>
                                        <div className={s.cal_box}>
                                            <label style={{marginTop:'3px'}}>확정상태</label>
                                            <div className={s.cal_status2}>
                                                <span></span>
                                                <p>미확정</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.cal_setting}>
                                        <div className={s.setting_head}>
                                            <img src="/Sliders Horizontal.png" alt="" />
                                            <span>계산조건 설정</span>
                                            <div className={s.setting_p}>
                                                <img src="/Rotate Ccw.png" alt="" />
                                                <span>기본값</span>
                                            </div>
                                        </div>
                                        <div className={s.setting_cont}>
                                            <div className={s.setting_box}>
                                                <div className={s.setting_text}>
                                                    <span>근태 데이터 연동</span>
                                                    <p>야근·지각 데이터 자동 반영</p>
                                                </div>
                                                <div className={s.setting_toggle}>
                                                    <ul className={s.chart_toggle}>
                                                        <label className={s.work_toggle}>
                                                            <input role='switch' type='checkbox' id="toggle" checked/> 
                                                        </label>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={s.setting_box} style={{width:'210px'}}>
                                                <div className={s.setting_text}>
                                                    <span>간이세액표 적용</span>
                                                    <p>국세청 간이세액 기준 소득세 계산</p>
                                                </div>
                                                <div className={s.setting_toggle}>
                                                    <ul className={s.chart_toggle}>
                                                        <label className={s.work_toggle}>
                                                            <input role='switch' type='checkbox' id="toggle" checked/> 
                                                        </label>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={s.setting_box} style={{width:'150px'}}>
                                                <div className={s.setting_text}>
                                                    <span>원 단위 반올림</span>
                                                    <p>1원 미만 반올림 처리</p>
                                                </div>
                                                <div className={s.setting_toggle}>
                                                    <ul className={s.chart_toggle}>
                                                        <label className={s.work_toggle}>
                                                            <input role='switch' type='checkbox' id="toggle"/> 
                                                        </label>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={s.setting_box} style={{width:'180px', marginRight:'0px'}}>
                                                <div className={s.setting_text}>
                                                    <span>지방소득세 자동포함</span>
                                                    <p>소득세의 10% 자동 산출</p>
                                                </div>
                                                <div className={s.setting_toggle}>
                                                    <ul className={s.chart_toggle}>
                                                        <label className={s.work_toggle}>
                                                            <input role='switch' type='checkbox' id="toggle" checked/> 
                                                        </label>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ul className={s.appoint_card}>
                                    <li><p style={{display:'flex', marginLeft:'75px'}}><img src="/Trending Up (1).png" alt="" />지급 합계</p><span>28,640,000원</span><p className={s.lighter} style={{color:'#60A5FA', display:'flex'}}> <span className={s.app_span} style={{backgroundColor:'#60A5FA'}}></span> 기본급 25,760,000 + 수당 2,880,000</p></li>
                                    <li><p style={{display:'flex', marginLeft:'75px'}}><img src="/Trending Down.png" alt="" />공제 합계</p><span>4,128,060원</span><p className={s.lighter} style={{display:'flex'}}> <span className={s.app_span} style={{backgroundColor:'#E11D48'}}></span> 4대보험 3,408,060 + 소득세 720,000</p></li>
                                    <li><p style={{display:'flex', marginLeft:'75px'}}><img src="/Banknote (4).png" alt="" />실지급합계</p><span>24,511,940원</span><p className={s.lighter} style={{display:'flex'}}> <span className={s.app_span} style={{backgroundColor:'#16A34A', marginLeft:'55px'}}></span> 1인 평균 3,063,993원</p></li>
                                    <li><p style={{display:'flex', marginLeft:'75px'}}><img src="/Users.png" alt="" />계산 대상</p><span>8명</span><p className={s.appCard_p} style={{color:'#CA8A04', fontWeight:'900', fontSize:'10px', marginTop:'0px'}}> 계산전 8명</p></li>
                                    <li><p style={{display:'flex', marginLeft:'75px'}}><img src="/Clock (5).png" alt="" />전월 대비</p><span>+206,000원</span><p className={s.lighter} style={{display:'flex'}}> <span className={s.app_span} style={{backgroundColor:'#D97706', marginLeft:'60px'}}></span> 야근수당 증가 영향</p></li>
                                </ul>

                                <div className={s.status_head}>
                                    <img src="/Table.png" alt="" />
                                    <span>2025년 7월 급여계산 미리보기</span>
                                    <div>
                                        <p className={s.receipt_span} style={{color:"#2563EB", fontWeight:'bold'}}>총 8명</p> 
                                        <ul className={s.head_list}>
                                            <li><span style={{backgroundColor:"#DBEAFE"}}></span>지급</li>
                                            <li><span style={{backgroundColor:"#FEE2E2"}}></span>공제</li>
                                            <li><span style={{backgroundColor:"#D1FAE5"}}></span>실지급</li>
                                            <li><button className={s.head_btn}>
                                                <img src="/Refresh Cw.png" alt="" /><p>재계산</p></button></li>
                                        </ul>
                                    </div>
                                </div>

                                <ul className={s.payStatus_cont}>
                                    <li>사원번호</li>
                                    <li>성명</li>
                                    <li>부서</li>
                                    <li>기본급</li>
                                    <li>수당합계</li>
                                    <li>지급소계</li>
                                    <li>4대보험</li>
                                    <li>소득세+지방</li>
                                    <li>공제소계</li>
                                    <li>실지급액</li>
                                    <li>상태</li>
                                </ul>
                                <ul className={s.status_sum}>
                                    <li><img src="/Sigma.png" alt="" /><span>합계 (8명)</span></li>
                                    <li>25,760,000</li>
                                    <li>2,880,000</li>
                                    <li>28,640,000</li>
                                    <li>3,408,060</li>
                                    <li>720,000</li>
                                    <li>4,128,060</li>
                                    <li>24,511,940</li>
                                    <li>-</li>
                                </ul>

                                <div className={s.status_result}>
                                    <p>총 8명 · 검토필요 1명</p>
                                    <span></span>
                                    <div className={s.result_span}>
                                        <img src="/Clock (5).png" alt="" />
                                        <p>EMP-003 박민준 · 야근수당 데이터 불일치 — 확인 필요</p>
                                    </div>
                                    
                                    <div className={s.result_button}>
                                        <button className={s.left}>
                                            <img src="/Chevron Left.png" alt=""/>
                                        </button>
                                        <span>1</span>
                                        <button className={s.right}>
                                            <img src="/Chevron Right.png" alt="" style={{marginLeft:'8px'}}/>
                                        </button>
                                        <div className={s.all_calc}>
                                            <img src="/Calculator (1).png" alt="" />
                                            <p>전직원 일괄계산</p>
                                        </div>
                                        <div className={s.all_payAccept}>
                                            <img src="/Check Check.png" alt="" />
                                            <p>급여확정</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )  
}