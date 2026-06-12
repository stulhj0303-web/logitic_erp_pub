"use client";
import baseApi from "@/api/baseApi";
import style from "./AppliDB.module.css";
import { useEffect, useState } from "react";

export default function DB({ employees = [] }) {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.get("/api/v1/employees", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    };
    getEmployees();
  }, []);

  const 경조비신청리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("res?.data?.data", res?.data?.data);
    setTableList(res?.data?.data || []);
  };

  useEffect(() => {
    경조비신청리스트조회();
  }, []);

  return (
    <div className={style.mainDB}>
      <ul className={style.maindbList}>
        <li>NO</li>
        <li>신청일</li>
        <li>경조구분</li>
        <li>대상자</li>
        <li>관계</li>
        <li>경조일</li>
        <li>지급금액</li>
        <li>지급계좌</li>
        <li>처리상태</li>
        <li>관리</li>
      </ul>

      {employees.length > 0 &&
        employees.map((item, index) => (
          <ul
            className={style.maindbList}
            style={{ backgroundColor: "white" }}
            key={index}
          >
            <li>{index + 1}</li>
            <li>{item.employeeNo}</li>
            <li>{item.name}</li>
            <li>{item.data_dept}</li>
            <li>{item.data_level}</li>
            <li>{item.data_date}</li>
            <li>{item.phone}</li>
            <li style={{ textAlign: "left" }}>{item.email}</li>
            <li>{item.data_status}</li>
            <li>{item.data_manage}</li>
          </ul>
        ))}

      {tableList.length > 0 &&
        tableList.map((item, index) => (
          <ul
            className={style.maindbList}
            style={{ backgroundColor: "white" }}
            key={index}
          >
            <li>{index + 1}</li>
            <li>{item.employeeNo}</li>
            <li>{item.name}</li>
            <li>{item.targetName}</li>
            <li>{item.data_level}</li>
            <li>{item.data_date}</li>
            <li>{item.phone}</li>
            <li style={{ textAlign: "left" }}>{item.email}</li>
            <li>{item.data_status}</li>
            <li>{item.data_manage}</li>
          </ul>
        ))}

      <ul className={style.maindbListlast}>
        <li>총 5건</li>
        <li>
          <img src="/Chevron Left.png" alt="" />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <img src="/Chevron Right.png" alt="" />
        </li>
      </ul>
    </div>
  );
}
