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
                                        { headli3: "기본수당외수당관리" },
                                        { headinfo: "기본급 외 수당 종류를 정의하고 직원별 지급 내역을 관리합니다."}
                                    ]}
                                />

                                <ul className={s.appoint_card}>
                                    <li><p>등록 수당 종류</p><span>7종</span><p className={s.lighter} style={{color:'#60A5FA'}}>활성 6 · 비활성 1</p></li>
                                    <li><p>과세 수당</p><span>4종</span><p className={s.card_box} style={{color:'#CA8A04'}}>소득세 적용</p></li>
                                    <li><p>비과세 수당</p><span>3종</span><p className={s.card_box1}>소득세 면제</p></li>
                                    <li><p>이번달 수당 총액</p><span>3,340,000원</span><p className={s.lighter}>8명 대상</p></li>
                                    <li><p>전월 대비</p><span style={{color:'#92400E'}}>+120,000원</span><p className={s.lighter} style={{color:"#D97706"}}>야근수당 증가</p></li>
                                </ul>

                                <div className={s.manage_main}>
                                    <div className={s.manage_list}>
                                        <div className={s.appoint_vac_head}>
                                            <img src="/Layers.png" alt="" />
                                            <span>수당 종류 목록</span>
                                            <div>
                                                <p>7종</p>
                                            </div>
                                        </div>
                                        <ul className={s.type_list}>
                                            <li style={{backgroundColor:'#EFF6FF', borderBottom:'1px solid #BFDBFE'}}>
                                                <span style={{backgroundColor:'#DBEAFE'}}>
                                                    <img src="/Moon Star (1).png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>야근수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    시간당 10,000원 · 과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span>과세</span>
                                                    <img src="/Chevron Right (2).png" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="/Award.png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>직책수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    직책별 고정 지급 · 과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span>과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="/Badge Check.png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>자격증수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    자격증 보유 시 월 50,000원 · 비과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span style={{width:'44px', backgroundColor:'#DCFCE7', color:'#16A34A'}}>비과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="/Users Round.png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>가족수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    부양가족 1인당 30,000원 · 비과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span style={{width:'44px', backgroundColor:'#DCFCE7', color:'#16A34A'}}>비과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="/Trending Up (2).png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>장기근속수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    5년 이상 월 100,000원 · 과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span>과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="/Star (2).png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>특별성과수당</p>
                                                        <span>활성</span>
                                                    </div>
                                                    비정기 지급 · 과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span>과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                            <li style={{opacity:'0.4', borderBottom:'none'}}>
                                                <span>
                                                    <img src="/Calendar (3).png" alt="" />
                                                </span>
                                                <div className={s.type_text} style={{color:'#6B7280'}}>
                                                    <div>
                                                        <p>휴일근무수당</p>
                                                        <span style={{width:'44px',backgroundColor:'#F1F5F9', color:'#9CA3AF', border:'1px solid #E5E7EB'}}>비활성</span>
                                                    </div>
                                                    일 1.5배 지급 · 과세
                                                </div>
                                                <div className={s.type_right}>
                                                    <span style={{backgroundColor:'#F1F5F9', color:'#9CA3AF', border:'1px solid #E5E7EB'}}>과세</span>
                                                    <img src="/Chevron Right (1).png" alt="" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={s.manage_set_acc}>
                                        <div className={s.manage_set_sta}>
                                            <div className={s.appoint_vac_head}>
                                                <span className={s.sett_tit}>
                                                    <img src="/Moon Star (1).png" alt="" />
                                                </span>
                                                <span style={{display:'flex', flexDirection:"column", marginTop:'-3px'}}>야근수당 상세설정
                                                    <p>Overtime Allowance</p>
                                                </span>
                                                
                                                <div>
                                                    <span></span>
                                                    <p>활성</p>
                                                </div>

                                                <ul className={s.chart_toggle}>
                                                    <label className={s.work_toggle}>
                                                        <input role='switch' type='checkbox' id="toggle" checked/> 
                                                    </label>
                                                </ul>
                                            </div>
                                            <div className={s.setting_cont}>
                                                <div className={s.setting_box}>
                                                    <div className={s.setting_tit}>
                                                        <span></span>
                                                        <p>기본 설정</p>
                                                    </div>
                                                    <div className={s.setting_list}>
                                                        <div className={s.setting_li}>
                                                            <label>수당 명</label>
                                                            <input type="text" style={{border:'1px solid #2563EB',backgroundColor:'white'}}/>
                                                        </div>
                                                        <div className={s.setting_li}>
                                                            <label>수당 코드</label>
                                                            <input type="text" />
                                                        </div>
                                                        <div className={s.setting_li}>
                                                            <label style={{display:'flex', gap:'2px'}}>계산 방식 <p style={{color:'#EF4444'}}>*</p></label>
                                                            <div className={s.setting_btn}>
                                                                <button className={s.time}>
                                                                    <img src="/Clock (6).png" alt="" style={{marginLeft:'35px'}}/>
                                                                    <span>시간당</span>
                                                                </button>
                                                                <button className={s.day}>
                                                                    <img src="/Calendar (3).png" alt="" style={{marginLeft:'43px'}}/>
                                                                    <span>일당</span>
                                                                </button>
                                                                <button className={s.pay}>
                                                                    <img src="/Bookmark.png" alt="" />
                                                                    <span>고정금액</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={s.setting_li}>
                                                            <label style={{display:'flex', gap:'2px'}}>시간당 단가<p style={{color:'#EF4444'}}>*</p></label>
                                                            <input type="text" style={{backgroundColor:'white'}}/>
                                                        </div>
                                                        <div className={s.setting_li}>
                                                            <label>과세 여부</label>
                                                            <div className={s.setting_btn}>
                                                                <button className={s.y_btn}>
                                                                    <img src="/Receipt Text (2).png" alt="" style={{marginLeft:'35px'}}/>
                                                                    <span>과세</span>
                                                                </button>
                                                                <button className={s.n_btn}>
                                                                    <img src="/Shield Check (1).png" alt="" />
                                                                    <span>비과세</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={s.setting_li}>
                                                            <label>급여 자동반영</label>
                                                            <input type="text" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className={s.hr}></span>

                                                <div className={s.setting_box}>
                                                    <div className={s.setting_tit}>
                                                        <span></span>
                                                        <p>적용 직급 범위</p>
                                                    </div>
                                                    <ul className={s.lev_btn}>
                                                        <li style={{backgroundColor:'#F1F5F9', border:'1px solid #E5E7EB'}}><span style={{backgroundColor:'#D1D5DB'}}></span><p style={{color:'#9CA3AF'}}>임원</p></li>
                                                        <li><span></span><p>부장</p></li>
                                                        <li><span></span><p>차장</p></li>
                                                        <li><span></span><p>과장</p></li>
                                                        <li><span></span><p>대리</p></li>
                                                        <li><span></span><p>사원</p></li>
                                                    </ul>
                                                    

                                                </div>

                                                <span className={s.hr}></span>

                                                <div className={s.setting_box}>
                                                    <div className={s.setting_tit}>
                                                        <span></span>
                                                        <p>한도 및 조건 설정</p>
                                                    </div>
                                                    
                                                    <div className={s.setting_info}>
                                                        <div className={s.info_cont}>
                                                            <label>월 최대 시간</label>
                                                            <div>
                                                                <input type="text" />
                                                                <p>시간</p>
                                                            </div>
                                                        </div>
                                                        <div className={s.info_cont}>
                                                            <label>최소 인정 시간</label>
                                                            <div>
                                                                <input type="text" />
                                                                <p>시간</p>
                                                            </div>
                                                        </div>
                                                        <div className={s.info_cont}>
                                                            <label>계산 단위</label>
                                                            <div>
                                                                <select>
                                                                    <option value="30분 단위">30분 단위</option>
                                                                    <option value="60분 단위">60분 단위</option>
                                                                </select>                                                            
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={s.info_alram}>
                                                        <img src="/Alert Circle.png" alt="" />
                                                        <span>월 최대 52시간 이상 입력 시 경고 알림이 발송됩니다.</span>
                                                    </div>

                                                </div>

                                                <span className={s.hr}></span>

                                                <div className={s.set_useBtn}>
                                                    <button className={s.del_btn}>
                                                        <img src="/Trash 2.png" alt="" />
                                                        <p>삭제</p>
                                                    </button>
                                                    <button className={s.cancel_btn}>
                                                        <img src="/X.png" alt="" />
                                                        <p>취소</p>
                                                    </button>
                                                    <button className={s.save_btn}>
                                                        <img src="/Save.png" alt="" />
                                                        <p>저장</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={s.sett_payStatus}>
                                            <div className={s.appoint_vac_head}>
                                                <img src="/Clock (1).png" alt="" />
                                                <span>이번달 야근수당 지급 현황 (2025.07)</span>
                                                <div className={s.payStatus_head}>
                                                    <select>
                                                        <option value="2025.07">2025.07</option>
                                                        <option value="2025.08">2025.08</option>
                                                        <option value="2025.09">2025.09</option>
                                                    </select>
                                                    <span className={s.payStatus_span}>5명 지급액</span>
                                                    <button className={s.add_btn}>
                                                        <img src="/Plus.png" alt="" />
                                                        <p>지급추가</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <ul className={s.payStatus_cont}>
                                                <li>성명</li>
                                                <li>부서</li>
                                                <li>직급</li>
                                                <li>야근시간</li>
                                                <li>단가 (원/h)</li>
                                                <li>지급액 (원)</li>
                                                <li>과세구분</li>
                                                <li>처리상태</li>
                                                <li>관리</li>
                                            </ul>
                                            <ul className={s.status_sum}>
                                                <li><img src="/Sigma.png" alt="" /><span>합계</span></li>
                                                <li>1,170h</li>
                                                <li>-</li>
                                                <li>1,170,000</li>
                                                <li>-</li>
                                                <li>-</li>
                                                <li>-</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}