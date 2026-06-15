"use client";
import baseApi from "@/api/baseApi";
import style from "./AppliDB.module.css";
import { useEffect, useState } from "react";

export default function AppliDB() {
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
    event;
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

      {tableList.length > 0 &&
        tableList.map((item, index) => (
          <ul
            className={style.maindbList}
            style={{ backgroundColor: "white" }}
            key={index}
          >
            <li>{index + 1}</li>
            <li>{item.applicationDate}</li>
            <li>{item.eventType}</li>
            <li>{item.targetName}</li>
            <li>{item.familyRelation}</li>
            <li>{item.eventDate}</li>
            <li>{item.requestedAmount}</li>
            <li>{item.accountNumber}</li>
            <li>{item.approvalStatus}</li>
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
