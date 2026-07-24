"use client";
import s from "./WorkBox.module.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function WorkBox() {
  const [worklist, setWorkList] = useState([]);
  const [empList, setEmpList] = useState([]);

  const 출퇴근리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("res?.data?.data", res?.data?.data);
    setWorkList(res?.data?.data || []);
  };

  useEffect(() => {
    const getWorkList = async () => {
      const token = localStorage.getItem("accessToken");
      const response = await baseApi.get("/api/v1/employees", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setEmpList(response.data.data || []);
    };

    getWorkList();
    출퇴근리스트조회();
  }, []);

  return (
    <>
      <ul className={s.workBox_li} style={{ backgroundColor: "#F1F5F9" }}>
        <li>
          <input type="checkbox" checked />
        </li>
        <li>사원번호</li>
        <li>성명</li>
        <li>부서</li>
        <li>직급</li>
        <li>근태유형</li>
        <li>출근시간</li>
        <li>퇴근시간</li>
        <li>OT</li>
        <li>비고</li>
        <li>관리</li>
      </ul>
      {worklist.map((item, index) => (
        <ul
          className={s.workBox_li}
          style={{ backgroundColor: "white" }}
          key={index}
        >
          <li>
            <input type="checkbox" />
          </li>
          <li>{item.employeeNo}</li>
          <li>성명</li>
          <li>부서</li>
          <li>직급</li>
          <li>근태유형</li>
          <li>{item.attendanceStatusCode}</li>
          <li>{item.checkInTime}</li>
          <li>{item.checkInTime}</li>
          <li>비고</li>
          <li>관리</li>
        </ul>
      ))}
    </>
  );
}
