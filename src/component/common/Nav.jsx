"use client";
import style from "./Nav.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Nav_Type = [
  { id: "인사관리", path: "/info/appointment" },
  { id: "근태관리", path: "/work/workday" },
  { id: "급여관리", path: "/pay/payInfo" },
  { id: "일용직관리" },
];
export default function Nav() {
  const [navInfo, setNavInfo] = useState();
  const router = useRouter();
  const [navType, setNavType] = useState("");

  useEffect(() => {
    const 이름 = localStorage.getItem("name");
    const 부서명 = localStorage.getItem("departmentName");
    const 메뉴 = localStorage.getItem("activeNav") || "인사관리";

    setNavInfo({
      departmentName: 부서명, //key, value가 같으면 생략 가능
      name: 이름,
    });
    setNavType(메뉴);
  }, []);

  return (
    <div className={style.nav}>
      <div className={style.navLeft}>
        <img src="/Briefcase Business.png" />
        <span>인사관리시스템</span>
      </div>
      <div className={style.navRight}>
        <ul className={style.navRlist}>
          {Nav_Type.map((item) => {
            const isActive = navType === item.id;
            return (
              <li
                key={item.id}
                onClick={() => {
                  localStorage.setItem("activeNav", item.id);
                  setNavType(item.id); // 1. 상태 변경
                  router.push(item.path); // 2. 이동
                }}
                style={{
                  backgroundColor: isActive ? "#2D5F9E" : "#1B3A6B",
                  color: isActive ? "white" : "#93C5FD",
                  fontWeight: isActive ? "bold" : "400",
                }}
              >
                {item.id}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.login}>
        <div className={style.loginBell}>
          <img src="/Bell.png" /> <span></span>
        </div>
        <div className={style.loginProfile}>
          <span>{navInfo?.name.slice(0, 1)}</span>
        </div>
        <ul className={style.loginInfo}>
          <li>{navInfo?.name}</li>
          <hr />
          <li>{navInfo?.departmentName}</li>
        </ul>
        <div className={style.logout}>
          <img src="/Log Out.png" />
        </div>
      </div>
    </div>
  );
}
