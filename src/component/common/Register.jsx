"use client";
import s from "./Register.module.css";
import { useState } from "react";
import baseApi from "@/api/baseApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Register() {
  const [eventTab, setEventTab] = useState("발령이력");
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className={s.register_list}>
        <li>NO</li>
        <li>발령번호</li>
        <li>사원번호</li>
        <li>성명</li>
        <li>발령유형</li>
        <li>발령전 부서/직급</li>
        <li>발령후 부서/직급</li>
        <li>발령일</li>
        <li>등록자</li>
        <li>관리</li>
      </ul>

      <ul
        className={s.register_list}
        style={{
          backgroundColor: "white",
          fontWeight: "normal",
          color: "black",
        }}
      >
        <li>1</li>
        <li>APT-2025-003</li>
        <li>EMP-002</li>
        <li style={{ fontWeight: "bold" }}>이영희</li>
        <li>승진</li>
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            lineHeight: "15px",
            paddingTop: "5px",
          }}
        >
          <p style={{ color: "#6B7280", fontSize: "12px" }}>경영지원팀</p>
          <span style={{ color: "#9CA3AF", fontSize: "11px" }}>과장</span>
        </li>
        <li
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            lineHeight: "15px",
            paddingTop: "5px",
          }}
        >
          <p style={{ color: "#1D4ED8", fontWeight: "bold" }}>인사팀</p>
          <span style={{ color: "#3B82F6", fontSize: "11px" }}>차장</span>
        </li>
        <li>발령일</li>
        <li>등록자</li>
        <li>
          <div className={s.register_btn}>
            <button className={s.register_edit} onClick={() => setOpen(true)}>
              수정
            </button>
            <button className={s.register_delete}>삭제</button>
          </div>
        </li>
      </ul>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[700px]">
          <DialogHeader>
            <DialogTitle>
              <div className={s.empCard_header}>
                <img src="/Id Card.png" alt="" />
                <p>인사기록카드</p>
                <span>2025년 기준</span>
                <div className={s.empCard_header_span}>
                  <img src="/Printer (2).png" alt="" />
                  <p>인쇄</p>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className={s.empCard_contents}>
            <div className={s.empCard_user}>
              <div className={s.empCard_user_photo}>
                <div className={s.empCard_user_img}>
                  <img src="/User Round3.png" alt="" />
                  <p>사진</p>
                </div>
                <div className={s.empCard_user_btn}>
                  <img src="/Upload.png" alt="" />
                  <p>변경</p>
                </div>
              </div>
              <div className={s.empCard_user_info}>
                <ul className={s.empCard_user_cont}>
                  <li>
                    <label>사원번호</label>
                    <p>EMP-002</p>
                  </li>
                  <li>
                    <label>성명</label>
                    <p>이영희</p>
                  </li>
                  <li>
                    <label>생년월일</label>
                    <p>1988.05.14</p>
                  </li>
                  <li>
                    <label>성별</label>
                    <p>여</p>
                  </li>
                </ul>
                <span className={s.hr}></span>
                <ul className={s.empCard_user_cont}>
                  <li>
                    <label>부서</label>
                    <p
                      style={{
                        padding: "0 10px",
                        height: "21px",
                        backgroundColor: "#EFF6FF",
                        borderRadius: "50px",
                        color: "#1D4ED8",
                        fontSize: "12px",
                        lineHeight: "21px",
                      }}
                    >
                      인사팀
                    </p>
                  </li>
                  <li>
                    <label>직급</label>
                    <p>차장</p>
                  </li>
                  <li>
                    <label>입사일</label>
                    <p>2018.07.15</p>
                  </li>
                  <li>
                    <label>재직상태</label>
                    <p
                      style={{
                        padding: "0 10px",
                        height: "21px",
                        backgroundColor: "#DCFCE7",
                        borderRadius: "50px",
                        color: "#16A34A",
                        fontSize: "12px",
                        lineHeight: "21px",
                      }}
                    >
                      재직중
                    </p>
                  </li>
                </ul>
                <span className={s.hr}></span>
                <ul className={s.empCard_user_cont}>
                  <li>
                    <label>휴대폰</label>
                    <p>010-9876-5432</p>
                  </li>
                  <li style={{ width: "296px" }}>
                    <label>이메일</label>
                    <p>lee@company.com</p>
                  </li>
                  <li>
                    <label>근속연수</label>
                    <p style={{ color: "#1B3A6B" }}>6년 11개월</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.empCard_tab}>
              <ul className={s.empCard_tab_header}>
                <li
                  onClick={() => {
                    setEventTab("발령이력");
                  }}
                  style={{
                    borderBottom:
                      eventTab === "발령이력" ? "2px solid #1B3A6B" : "none",
                  }}
                >
                  <p
                    style={{
                      color: eventTab === "발령이력" ? " #1B3A6B" : " #9CA3AF",
                      fontWeight: eventTab === "발령이력" ? " bold" : " normal",
                    }}
                  >
                    발령이력
                  </p>
                </li>
                <li
                  onClick={() => {
                    setEventTab("근태요약");
                  }}
                  style={{
                    borderBottom:
                      eventTab === "근태요약" ? "2px solid #1B3A6B" : "none",
                  }}
                >
                  <p
                    style={{
                      color: eventTab === "근태요약" ? " #1B3A6B" : " #9CA3AF",
                      fontWeight: eventTab === "근태요약" ? " bold" : " normal",
                    }}
                  >
                    근태요약
                  </p>
                </li>
                <li
                  onClick={() => {
                    setEventTab("급여이력");
                  }}
                  style={{
                    borderBottom:
                      eventTab === "급여이력" ? "2px solid #1B3A6B" : "none",
                  }}
                >
                  <p
                    style={{
                      color: eventTab === "급여이력" ? " #1B3A6B" : " #9CA3AF",
                      fontWeight: eventTab === "급여이력" ? " bold" : " normal",
                    }}
                  >
                    급여이력
                  </p>
                </li>
                <li
                  onClick={() => {
                    setEventTab("자격증/학력");
                  }}
                  style={{
                    borderBottom:
                      eventTab === "자격증/학력" ? "2px solid #1B3A6B" : "none",
                  }}
                >
                  <p
                    style={{
                      color:
                        eventTab === "자격증/학력" ? " #1B3A6B" : " #9CA3AF",
                      fontWeight:
                        eventTab === "자격증/학력" ? " bold" : " normal",
                    }}
                  >
                    자격증/학력
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={s.empCard_tab_cont}
              style={{ display: eventTab === "발령이력" ? "block" : "none" }}
            >
              <div className={s.tab_head} style={{ position: "relative" }}>
                <span></span>
                <p>발령 이력</p>
                <div className={s.tab_head_span}>
                  <p>총 3건</p>
                </div>
              </div>
              <ul
                className={s.tab_contents}
                style={{
                  backgroundColor: "#F1F5F9",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  fontWeight: "bold",
                  color: "#6B7280",
                  marginTop: "10px",
                }}
              >
                <li>발령일</li>
                <li>발령유형</li>
                <li>발령전 부서/직급</li>
                <li>발령후 부서/직급</li>
                <li>발령번호</li>
              </ul>
              <ul className={s.tab_contents}>
                <li>2025.07.01</li>
                <li>승진</li>
                <li style={{ fontSize: "11px", color: "#9CA3AF" }}>
                  <div className={s.tab_contents_text}>
                    <span>경영지원팀</span>·<p>과장</p>
                  </div>
                </li>
                <li>
                  <div
                    className={s.tab_contents_text}
                    style={{ color: "#1D4ED8", fontWeight: "bold" }}
                  >
                    <span>인사팀</span>·<p>차장</p>
                  </div>
                </li>
                <li>APT-2025-003</li>
              </ul>
            </div>
            <div
              className={s.empCard_tab_cont}
              style={{ display: eventTab === "근태요약" ? "block" : "none" }}
            >
              <div className={s.tab_head} style={{ position: "relative" }}>
                <span></span>
                <p>올해 근태 요약 (2025년)</p>
                <div
                  className={s.tab_head_span}
                  style={{
                    backgroundColor: "white",
                    fontSize: "12px",
                  }}
                >
                  <p style={{ color: "#9CA3AF", fontWeight: "normal" }}>
                    기준일:{" "}
                    <span style={{ backgroundColor: "white" }}>2025.07.01</span>
                  </p>
                </div>
              </div>
              <ul className={s.tab_work}>
                <li
                  style={{
                    backgroundColor: "#F0F7FF",
                    border: "1px solid #BFDBFE",
                  }}
                >
                  <span>124</span>
                  <p>출근일수</p>
                </li>
                <li
                  style={{
                    backgroundColor: "#FFF7F7",
                    border: "1px solid #FECACA",
                  }}
                >
                  <span style={{ color: "#DC2626" }}>2</span>
                  <p>지각</p>
                </li>
                <li
                  style={{
                    backgroundColor: "#F0FDF4",
                    border: "1px solid #BBF7D0",
                  }}
                >
                  <span style={{ color: "#16A34A" }}>8</span>
                  <p>연차사용</p>
                </li>
                <li
                  style={{
                    backgroundColor: "#FFFBEB",
                    border: "1px solid #FDE68A",
                  }}
                >
                  <span style={{ color: "#D97706" }}>7</span>
                  <p>잔여연차</p>
                </li>
                <li
                  style={{
                    backgroundColor: "#F5F3FF",
                    border: "1px solid #DDD6FE",
                  }}
                >
                  <span style={{ color: "#7C3AED" }}>3</span>
                  <p>출장</p>
                </li>
                <li
                  style={{
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <span style={{ color: "#9CA3AF" }}>0</span>
                  <p>결근</p>
                </li>
              </ul>
            </div>
            <div
              className={s.empCard_tab_cont}
              style={{ display: eventTab === "급여이력" ? "block" : "none" }}
            >
              <div className={s.tab_head} style={{ position: "relative" }}>
                <span></span>
                <p>최근 급여 이력</p>
                <div
                  className={s.tab_head_span}
                  style={{
                    backgroundColor: "white",
                    fontSize: "12px",
                    color: "#6B7280",
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  전체보기
                  <img
                    src="/Chevron Right.png"
                    alt=""
                    style={{
                      width: "12px",
                      height: "12px",
                      marginTop: "3px",
                      marginLeft: "4px",
                    }}
                  />
                </div>
              </div>
              <ul
                className={s.tab_money}
                style={{
                  marginTop: "10px",
                  backgroundColor: "#F1F5F9",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  color: "#6B7280",
                  fontWeight: "bold",
                }}
              >
                <li>지급연월</li>
                <li>기본급</li>
                <li>수당합계</li>
                <li>공제합계</li>
                <li>실지급액</li>
              </ul>
              <ul className={s.tab_money}>
                <li>2025.06</li>
                <li style={{ textAlign: "right" }}>4,200,000</li>
                <li style={{ textAlign: "right" }}>620,000</li>
                <li style={{ textAlign: "right", color: "#DC2626" }}>
                  432,000
                </li>
                <li style={{ textAlign: "right" }}>4,388,000</li>
              </ul>
            </div>
            <div
              className={s.empCard_tab_cont}
              style={{ display: eventTab === "자격증/학력" ? "block" : "none" }}
            >
              <div className={s.tab_head}>
                <span></span>
                <p>자격증 / 학력</p>
              </div>
              <div className={s.tab_career}>
                <div className={s.tab_career_receipt}>
                  <div className={s.career_receipt_head}>
                    <img src="/Award (3).png" alt="" />
                    <p>자격증</p>
                  </div>
                  <ul className={s.career_receipt_list}>
                    <li
                      style={{
                        backgroundColor: "#FFF9EC",
                        border: "1px solid #FDE68A",
                      }}
                    >
                      <div className={s.career_receipt_text}>
                        <span>정보처리기사</span>
                        <div className={s.receipt_text_box}>
                          <p>한국산업인력공단</p> · <p>2016.08</p>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{
                        backgroundColor: "#FFF9EC",
                        border: "1px solid #FDE68A",
                      }}
                    >
                      <div className={s.career_receipt_text}>
                        <span>컴퓨터활용능력 1급</span>
                        <div className={s.receipt_text_box}>
                          <p>대한상공회의소</p> · <p>2014.05</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={s.tab_career_receipt}>
                  <div className={s.career_receipt_head}>
                    <img src="/Graduation Cap.png" alt="" />
                    <p>학력</p>
                  </div>
                  <ul className={s.career_receipt_list}>
                    <li
                      style={{
                        backgroundColor: "#F0F7FF",
                        border: "1px solid #BFDBFE",
                      }}
                    >
                      <div className={s.career_receipt_text}>
                        <span>OO대학교 경영학과 졸업</span>
                        <div className={s.receipt_text_box}>
                          <p>2007.03 – 2011.02</p> · <p>학사</p>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{
                        backgroundColor: "#F0F7FF",
                        border: "1px solid #BFDBFE",
                      }}
                    >
                      <div className={s.career_receipt_text}>
                        <span>△△고등학교 졸업</span>
                        <div className={s.receipt_text_box}>
                          <p>2004.03 – 2007.02</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={s.empCard_footer}>
              <div className={s.empCard_footer_text}>
                <img src="/Clock (3).png" alt="" />
                최종 수정: <p>2025.07.01</p>·<p>홍길동</p>
                <p>(인사팀)</p>
              </div>
              <button className={s.card_close}>
                <img src="/X (3).png" alt="" />
                <p>닫기</p>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
