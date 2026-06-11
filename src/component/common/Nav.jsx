"use client";
import style from "./Nav.module.css";
import { useEffect, useState } from "react";

export default function Nav() {
  const [navInfo, setNavInfo] = useState();

  useEffect(() => {
    const 이름 = localStorage.getItem("name");
    const 부서명 = localStorage.getItem("departmentName");

    setNavInfo({
      departmentName: 부서명, //key, value가 같으면 생략 가능
      name: 이름,
    });
  }, []);

  return (
    <div className={style.nav}>
      <div className={style.navLeft}>
        <img src="/Briefcase Business.png" />
        <span>인사관리시스템</span>
      </div>
      <div className={style.navRight}>
        <ul className={style.navRlist}>
          <li>인사관리</li>
          <li>근태관리</li>
          <li>급여관리</li>
          <li>일용직관리</li>
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
