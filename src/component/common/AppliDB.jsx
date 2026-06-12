"use client";

import style from "./AppliDB.module.css";

export default function DB({ employees = [] }) {
  console.log("employees22222 >>> ", employees);
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

      {employees.map((item, index) => (
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

      <ul className={style.maindbListlast}>
        <li>총 4건</li>
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
