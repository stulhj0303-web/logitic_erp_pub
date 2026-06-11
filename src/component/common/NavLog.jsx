"use client";
import s from "./NavLog.module.css";

export default function NavLog() {
  return (
    <div className={s.container}>
      <div className={s.navLeft}>
        <img src="/Briefcase Business.png" />
        <span>인사관리시스템</span>
      </div>
      <div className={s.navRight}>
        <ul className={s.navRlist}>
          <li>인사관리</li>
          <li>근태관리</li>
          <li>급여관리</li>
          <li>일용직관리</li>
        </ul>
      </div>
    </div>
  );
}
