"use client";

import style from "./test.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import Search from "@/component/common/Search";
import DB from "@/component/common/DB";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";

export default function page() {
  const [keyword, setKeyword] = useState();
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });
    setEmployees(res.data.data);

    console.log(res.data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className={style.container}>
      <Nav />

      <div className={style.main}>
        <Aside
          dummy={[
            {
              titleInfo: { iconPath: "/User.png", titleName: "인사정보" },
              submenuList: [
                { name: "인사정보등록", path: "/info/appointment" },
                { name: "사원명수/인사기록카드" },
                { name: "인사발령등록", path: "/info/register" },
              ],
            },
            {
              titleInfo: {
                iconPath: "/Heart Handshake.png",
                titleName: "경조비관리",
              },
              submenuList: [
                { name: "경조비신청", path: "/money/application" },
                { name: "경조비신청현황" },
              ],
            },
            {
              titleInfo: {
                iconPath: "/File Text.png",
                titleName: "증명서관리",
              },
              submenuList: [{ name: "증명서발급", path: "/certificate" }],
            },
          ]}
        />

        <div className={style.InfoMain}>
          <div className={style.mainContainer}>
            <Header
              headList={[
                { headli1: "인사관리" },
                { headli2: "인사정보" },
                { headli3: "인사발령등록" },
                { headinfo: "직원의 인사정보를 등록하고 관리합니다." },
              ]}
            />

            <Search />

            <DB employees={employees} />
          </div>
        </div>
      </div>
    </div>
  );
}
