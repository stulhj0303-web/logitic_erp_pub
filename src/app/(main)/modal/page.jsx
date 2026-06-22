"use client";

import s from "./page.module.css";
import { useState } from "react";
export default function page() {
  const [eventTab, setEventTab] = useState("발령이력");
  return (
    <div className={s.empCard_container}>
      <div className={s.empCard_header}>
        <img src="/Id Card.png" alt="" />
        <p>인사기록카드</p>
        <span>2025년 기준</span>
        <div className={s.empCard_header_span}>
          <img src="/Printer (2).png" alt="" />
          <p>인쇄</p>
        </div>
      </div>
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
                  color: eventTab === "자격증/학력" ? " #1B3A6B" : " #9CA3AF",
                  fontWeight: eventTab === "자격증/학력" ? " bold" : " normal",
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
          <div className={s.tab_head}>
            <span></span>
            <p>발령 이력</p>
          </div>
        </div>
        <div
          className={s.empCard_tab_cont}
          style={{ display: eventTab === "근태요약" ? "block" : "none" }}
        >
          <div className={s.tab_head}>
            <span></span>
            <p>근태요약</p>
          </div>
        </div>
      </div>
    </div>
  );
}
