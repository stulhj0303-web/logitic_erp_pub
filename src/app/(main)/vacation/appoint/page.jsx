// 'use client';

// import { Calendar } from "@/components/ui/calendar";
// import { useState } from "react";
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
                                        { headli2: "휴가관리" },
                                        { headli3: "휴가일수신청" },
                                        { headinfo: "휴가 종류와 기간을 선택하여 신청합니다."}
                                    ]}
                                />

                                <ul className={s.appoint_card}>
                                    <li><p>총 부여일수</p><span>14일</span></li>
                                    <li><p>사용일수</p><span>11일</span></li>
                                    <li><p>잔여일수</p><span>3일</span></li>
                                    <li><p>승인대기</p><span>1건</span></li>
                                    <li><p>이월일수</p><span>0일</span></li>
                                </ul>

                                <div className={s.appoint_cont}>
                                    <div className={s.appoint_vac}>
                                        <div className={s.appoint_vac_head}>
                                            <img src="/Calendar Plus.png" alt="" />
                                            <span>휴가신청</span>
                                            <div>
                                                <span className={s.red}>*</span>
                                                <p>필수항목</p>
                                            </div>
                                        </div>
                                        <div className={s.appoint_vac_box}>
                                            <div className={s.box_info}>
                                                <label>신청자 정보</label>
                                                <div className={s.info_cont}>
                                                    <span className={s.info_name}>박</span>
                                                    <div className={s.info_text}>
                                                        <p>박민준</p> 
                                                        <div>
                                                            <span>개발팀 · 대리</span>
                                                            <p className={s.hr}></p>
                                                            <span style={{color:"#9CA3AF"}}>EMP-003</span>
                                                        </div>
                                                        
                                                    </div>
                                                    <p className={s.info_date}>
                                                        <img src="/Calendar Check (1).png" alt="" />
                                                        <span>잔여 3일</span>
                                                    </p>
                                                </div>
                                            </div>

                                            <span className={s.span_hr}></span>

                                            <div className={s.box_info}>
                                                <label>휴가 종류<span className={s.red}> *</span></label>
                                                <div className={s.box_type}>
                                                    <button className={s.type1}>
                                                        <img src="/Calendar Check (3).png" alt="" />
                                                        <span>연차</span>
                                                    </button>
                                                    <button className={s.type2}>
                                                        <img src="/Sun.png" alt="" />
                                                        <span>오전반차</span>
                                                    </button>
                                                    <button className={s.type3}>
                                                        <img src="/Moon Star.png" alt="" />
                                                        <span>오후반차</span>
                                                    </button>
                                                    <button className={s.type4}>
                                                        <img src="/Star (1).png" alt="" />
                                                        <span>특별휴가</span>
                                                    </button>
                                                    <button className={s.type5}>
                                                        <img src="/Heart Pulse.png" alt="" />
                                                        <span>병가</span>
                                                    </button>
                                                    <button className={s.type6}>
                                                        <img src="/Shield Check (1).png" alt="" />
                                                        <span>공가</span>
                                                    </button>
                                                </div>
                                                <div className={s.box_select}>
                                                    <img src="/Info.png" alt="" />
                                                    <div className={s.select_text}>
                                                        <p>연차 선택됨</p>
                                                        <p className={s.hr}></p>
                                                        <span>1일 차감 / 잔여 3일</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <span className={s.span_hr}></span>

                                            <div className={s.box_info}>
                                                <label>휴가 기간<span className={s.red}> *</span></label>
                                                <div className={s.vacation_date}>
                                                    <div>
                                                        <label>시작일</label>
                                                        {/* <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            className="rounded-lg border"
                                                            captionLayout="dropdown"
                                                        /> */}
                                                    </div>
                                                    <div>~</div>
                                                    <div>
                                                        <label>종료일</label>
                                                    </div>
                                                </div>
                                                <div className={s.vacation_appoint_date}>
                                                    <img src="/Clock (4).png" alt="" />
                                                    <span>신청 일수: 1일 (평일 기준)</span>
                                                </div>
                                            </div>
                                            
                                            <span className={s.span_hr}></span>

                                            <div className={s.box_info}>
                                                <label style={{display:"flex", gap:"3px"}}>업무 대리자 <p style={{fontSize:"11px", color:"#9CA3AF", fontWeight:"400"}}>선택사항</p></label>
                                                <input type="text" placeholder='대리자를 선택하세요' className={s.box_input}/>
                                            </div>

                                            <div className={s.box_info}>
                                                <label>휴가 사유<span className={s.red}> *</span></label>
                                                <input type="text" placeholder='휴가 사유를 입력하세요' className={s.box_input2}/>
                                            </div>

                                            <div className={s.box_info}>
                                                <label style={{display:"flex", gap:"3px"}}>첨부파일 <p style={{fontSize:"11px", color:"#9CA3AF", fontWeight:"400"}}>선택사항 · 최대 3개</p></label>
                                                <div className={s.file}>
                                                    <img src="/Paperclip.png" alt="" />
                                                    <span>파일을 끌어다 놓거나</span>
                                                    <button className={s.file_select}>
                                                        <img src="/Upload.png" alt="" />
                                                        <p>선택</p>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <span className={s.span_hr}></span>

                                            <div className={s.vacation_app_btn}>
                                                <button className={s.vac_del}>
                                                    <img src="/X.png" alt="" />
                                                    <p>취소</p>
                                                </button>
                                                <button className={s.vac_app}>
                                                    <img src="/Send Horizontal.png" alt="" />
                                                    <p>신청하기</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.vac_right_cont}>
                                        <div className={s.vac_calender}>
                                            <div className={s.appoint_vac_head}>
                                                <img src="/Calendar (2).png" alt="" />
                                                <span>2025년 7월</span>
                                                <div>
                                                    <button className={s.vac_left}>
                                                        <img src="/Chevron Left (1).png" alt="" />
                                                    </button>
                                                    <button className={s.vac_rifht}>
                                                        <img src="/Chevron Right (1).png" alt="" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={s.calender_cont}>
                                                <ul className={s.calender_date} style={{fontWeight:"bold"}}>
                                                    <li>일</li>
                                                    <li>월</li>
                                                    <li>화</li>
                                                    <li>수</li>
                                                    <li>목</li>
                                                    <li>금</li>
                                                    <li>토</li>
                                                </ul>
                                                <ul className={s.calender_date}>
                                                    <li></li>
                                                    <li>1</li>
                                                    <li>2</li>
                                                    <li>3</li>
                                                    <li>4</li>
                                                    <li>5</li>
                                                    <li>6</li>
                                                </ul>
                                                <ul className={s.calender_date}>
                                                    <li>7</li>
                                                    <li>8</li>
                                                    <li>9</li>
                                                    <li>10</li>
                                                    <li>11</li>
                                                    <li>12</li>
                                                    <li>13</li>
                                                </ul>
                                                <ul className={s.calender_date} style={{height:'32px'}}>
                                                    <li style={{ lineHeight:'32px'}}>14</li>
                                                    <li  style={{ lineHeight:'32px', width:'40px',height:'32px',backgroundColor:'#1B3A6B',color:"white",borderRadius:"6px"}}>15</li>
                                                    <li  style={{ lineHeight:'32px'}}>16</li>
                                                    <li  style={{ lineHeight:'32px'}}>17</li>
                                                    <li  style={{ lineHeight:'32px'}}>18</li>
                                                    <li  style={{ lineHeight:'32px'}}>19</li>
                                                    <li  style={{ lineHeight:'32px'}}>20</li>
                                                </ul>
                                                <ul className={s.calender_date}>
                                                    <li>21</li>
                                                    <li>22</li>
                                                    <li>23</li>
                                                    <li>24</li>
                                                    <li>25</li>
                                                    <li>26</li>
                                                    <li>27</li>
                                                </ul>
                                                <ul className={s.calender_date}>
                                                    <li>28</li>
                                                    <li>29</li>
                                                    <li>30</li>
                                                    <li>31</li>
                                                    <li></li>
                                                    <li></li>
                                                    <li></li>
                                                </ul>
                                                <ul className={s.calender_info}>
                                                    <li><span style={{backgroundColor:'#1B3A6B'}}></span><p>신청일</p></li>
                                                    <li><span style={{backgroundColor:'#FCA5A5'}}></span><p>기사용</p></li>
                                                    <li><span style={{backgroundColor:'#FDE68A'}}></span><p>공휴일</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={s.vac_receipt}>
                                            <div className={s.appoint_vac_head}>
                                                <img src="/Clock (1).png" alt="" />
                                                <span>나의 신청 이력</span>
                                                <div>
                                                    <p className={s.receipt_span} style={{color:"#2563EB", fontWeight:'bold'}}>총 5건</p> 
                                                </div>
                                            </div>
                                            <div className={s.receipt_cont}>
                                                <ul className={s.receipt_title}>
                                                    <li>신청일</li>
                                                    <li>휴가종류</li>
                                                    <li>휴가기간</li>
                                                    <li>일수</li>
                                                    <li>사유</li>
                                                    <li>승인상태</li>
                                                    <li>관리</li>
                                                </ul>
                                                <ul className={s.receipt_list}>
                                                    <li>신청일</li>
                                                    <li><div><span></span>연차</div></li>
                                                    <li>휴가기간</li>
                                                    <li>일수</li>
                                                    <li>사유</li>
                                                    <li><div><span></span>승인상태</div></li>
                                                    <li>관리</li>
                                                </ul>
                                                <ul className={s.receipt_info}>
                                                    <li>총 5건</li>
                                                    <li>·</li>
                                                    <li>승인완료 4건</li>
                                                    <li>·</li>
                                                    <li>승인대기 1건</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}