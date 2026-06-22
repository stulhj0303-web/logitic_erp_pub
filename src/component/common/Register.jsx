"use client";
import s from "./Register.module.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function Register() {
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
            <button className={s.register_edit}>수정</button>
            <button className={s.register_delete}>삭제</button>
          </div>
        </li>
      </ul>
    </>
  );
}
