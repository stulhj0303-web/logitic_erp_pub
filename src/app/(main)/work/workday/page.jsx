import Nav from '@/component/common/Nav';
import s from './page.module.css';
import Aside from '@/component/common/Aside';
import Header from '@/component/common/Header';
import WorkBox from '@/component/common/WorkBox';

export default function page(){

    return(
        <div className={s.container}>

            <Nav/>

            <div className={s.main}>

               <Aside
                    dummy = {
                        [
                            {
                                titleInfo: { iconPath: "/Clock (2).png", titleName:"근태관리"},
                                submenuList: [ "일일근태등록", "월근태현황"],
                            },
                            {
                                titleInfo: { iconPath: "/Plane.png", titleName:"출장관리"},
                                submenuList: [ "출장신청", "출장정산","출장사용현황"],
                            },
                            {
                                titleInfo: { iconPath: "/Calendar.png", titleName:"휴가관리"},
                                submenuList: [ "휴가일수설정","휴가일수계산","휴가일수신청","휴가사용현황"],
                            }
                        ]
                    }
                />

                <div className={s.InfoMain}>

                    <div className={s.mainContainer}>

                        <Header
                            headList={[
                                { headli1: "근태관리" },
                                { headli2: "근태관리" },
                                { headli3: "일일근태등록" },
                                { headinfo: "날짜별 직원 근태 현황을 등록하고 수정합니다."}
                            ]}
                        />

                        <div className={s.work_search}>
                            <div className={s.search_cont}>
                                <div className={s.search_day}>
                                    <button className={s.left}>
                                        <img src="/Chevron Left (1).png" alt="" />
                                    </button>
                                    <span>
                                        2025년 7월 1일 (화)
                                    </span>
                                    <button className={s.right}>
                                        <img src="/Chevron Right (1).png" alt="" />
                                    </button>
                                </div>
                                <div className={s.search_date}>
                                    <img src="/Calendar Check.png" alt="" />
                                    <span>오늘</span>
                                </div>
                                <label>부서</label>
                                <select>
                                    <option value="전체 부서">전체부서</option>
                                    <option value="인사팀">인사팀</option>
                                    <option value="경영지원팀">경영지원팀</option>
                                    <option value="개발팀">개발팀</option>
                                    <option value="영업팀">영업팀</option>
                                </select>
                                <input type="text" placeholder='사원명 검색'/>
                            </div>
                             <div className={s.search_status}>
                                <div style={{backgroundColor:"#F1F5F9"}}>
                                    <span style={{backgroundColor:"#64748B"}}></span>
                                    <p style={{color:"#374151"}}>전체 23명</p>
                                </div>
                                <div style={{backgroundColor:"#EFF6FF"}}>
                                    <span style={{backgroundColor:"#1D4ED8"}}></span>
                                    <p style={{color:"#1D4ED8"}}>출근 18</p>
                                </div>
                                <div style={{backgroundColor:"#FFF7ED"}}>
                                    <span style={{backgroundColor:"#EA580C"}}></span>
                                    <p style={{color:"#EA580C"}}>지각 2</p>
                                </div>
                                <div style={{backgroundColor:"#FFF1F2"}}>
                                    <span style={{backgroundColor:"#E11D48"}}></span>
                                    <p style={{color:"#E11D48"}}>결근 1</p>
                                </div>
                                <div style={{backgroundColor:"#F0FDF4"}}>
                                    <span style={{backgroundColor:"#16A34A"}}></span>
                                    <p style={{color:"#16A34A"}}>연차 2</p>
                                </div>
                            </div>
                        </div>

                        <div className={s.work_cont}>
                            <div className={s.cont_upload}>
                                <div className={s.upload_head}>
                                    <img src="/Clipboard Pen.png" alt="" />
                                    <p>근태 등록</p>
                                    <span>7월 1일</span>
                                </div>
                                <div className={s.upload_cont}>
                                    <div className={s.upload_select}>
                                        <label style={{display:"flex"}}>사원 선택<p style={{color:"#EF4444"}}>*</p></label>
                                        <div className={s.select_box}>
                                            <span>박</span>
                                            <p>박민준 · 개발팀</p>
                                            <img src="/X.png" alt="" />
                                        </div>
                                    </div>
                                    <div className={s.upload_type}>
                                        <label style={{display:"flex"}}>근태 유형<p style={{color:"#EF4444"}}>*</p></label>
                                        <div className={s.type_btn}>
                                            <button className={s.btn1}>
                                                <img src="/Check Check.png" alt="" />
                                                <span>출근</span>
                                            </button>
                                            <button className={s.btn2}>
                                                <img src="/Alarm Clock.png" alt="" />
                                                <span>지각</span>
                                            </button>
                                            <button className={s.btn3}>
                                                <img src="/Log Out (1).png" alt="" />
                                                <span>조퇴</span>
                                            </button>
                                            <button className={s.btn4}>
                                                <img src="/X (1).png" alt="" />
                                                <span>결근</span>
                                            </button>
                                            <button className={s.btn5}>
                                                <img src="/Calendar Check (1).png" alt="" />
                                                <span>연차</span>
                                            </button>
                                            <button className={s.btn6}>
                                                <img src="/Calendar (1).png" alt="" />
                                                <span>반차</span>
                                            </button>
                                            <button className={s.btn7}>
                                                <img src="/Plane (1).png" alt="" />
                                                <span>출장</span>
                                            </button>
                                            <button className={s.btn8}>
                                                <img src="/Book Open.png" alt="" />
                                                <span>교육</span>
                                            </button>
                                            <button className={s.btn9}>
                                                <img src="/Shield Check (1).png" alt="" />
                                                <span>공가</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className={s.upload_time}>
                                        <div>
                                            <label>출근 시간</label>
                                            <div className={s.time_box}>
                                                <span>09:00</span>
                                                <img src="/Clock (3).png" alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label>퇴근 시간</label>
                                            <div className={s.time_box}>
                                                <span>18:00</span>
                                                <img src="/Clock (3).png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.upload_work}>
                                        <div className={s.work_head}>
                                            <label>초과근무(OT)</label>
                                            <label className={s.work_toggle}>
                                                <input role='switch' type='checkbox' id="toggle"/> 
                                            </label>
                                            <p>적용</p>
                                        </div>
                                        <div className={s.upload_time}>
                                            <div>
                                                <div className={s.time_box2}>
                                                    <span>18:00</span>
                                                    <img src="/Clock (3).png" alt="" />
                                                </div>
                                            </div>
                                            <span className={s.time_span}>~</span>
                                            <div>
                                                <div className={s.time_box2}>
                                                    <span>20:30</span>
                                                    <img src="/Clock (3).png" alt="" />
                                                </div>
                                            </div>
                                            <div className={s.time_over}>2.5h</div>
                                        </div>
                                    </div>
                                    <div className={s.time_write}>
                                        <label>비고</label>
                                        <input type="text" placeholder='특이사항을 입력하세요'/>
                                    </div>
                                    <div className={s.upload_btn}>
                                        <button className={s.restore}>
                                            <img src="/Rotate Ccw (1).png" alt="" />
                                            <span>초기화</span>
                                        </button>
                                        <button className={s.save}>
                                            <img src="/Save.png" alt="" />
                                            <span>저장</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={s.cont_workList}>
                                <div className={s.workBox}>
                                    <div className={s.workBox_head}>
                                        <img src="/List Checks.png" alt="" />
                                        <p>2025.07.01 근태목록</p>
                                        <div>
                                            <p className={s.workBox_num}>
                                                총 23명
                                            </p>
                                            <span style={{display:'flex', color:"#16A34A", fontSize:"12px", lineHeight:"30px",
                                            fontWeight:"700"
                                            }} className={s.workBox_span}>
                                                <img src="/Users (1).png" alt="" />
                                                일괄등록
                                            </span>
                                        </div>
                                    </div>
                                    

                                    <WorkBox
                                        workList = {[
                                                    '사원번호',
                                                    '성명',
                                                    '부서',
                                                    '직급',
                                                    '근태유형',
                                                    '출근시간',
                                                    '퇴근시간',
                                                    'OT',
                                                    '비고',
                                                    '관리'
                                        ]}
                                    />

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}