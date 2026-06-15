"use client";

import NavLog from "@/component/common/NavLog";
import s from "./page.module.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState();

  const goLogin = async () => {
    try {
      const res = await baseApi.post("/api/v1/employees/login", loginInfo);
      const token = res.data.data.accessToken;
      const depart = res.data.data.departmentName;
      const empNo = res.data.data.employeeNo;
      const name = res.data.data.name;
      const position = res.data.data.name;
      if ({ token, depart, empNo, name, positon }) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("employeeNo", res.data.data.employeeNo);
        localStorage.setItem("departmentName", res.data.data.departmentName);
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("position", res.data.data.position);
        router.push("/info/appointment");
      } else {
        alert("로그인 실패");
      }
    } catch (e) {
      console.error("네트워크 실패", e);
    } finally {
    }
  };

  return (
    <div className={s.allcontainer}>
      <div className={s.maincontainer}>
        <NavLog />

        <div className={s.main}>
          <div className={s.mainLeft}>
            <p style={{ display: "flex" }} className={s.leftP}>
              <img src="/Shield Check.png" alt="" />
              <p>Enterprise HR Solution</p>
            </p>
            <div className={s.leftTitle}>
              <p>스마트한 인사관리의</p>
              <span>새로운 기준</span>
            </div>
            <p className={s.leftcont}>
              직원 채용부터 급여, 근태까지
              <br />
              하나의 플랫폼으로 관리하세요.
            </p>
            <div className={s.leftlist}>
              <div className={s.leftLi}>
                <p>2,400+</p>
                <span>기업 도입</span>
              </div>
              <span className={s.hr}></span>
              <div className={s.leftLi}>
                <p>98%</p>
                <span>고객 만족도</span>
              </div>
              <span className={s.hr}></span>
              <div className={s.leftLi}>
                <p>15년</p>
                <span>서비스 운영</span>
              </div>
            </div>

            <div className={s.leftbutton}>
              <div className={s.buttonLi}>
                <p className={s.img}>
                  <img src="/Users.png" alt="" />
                </p>
                <div className={s.buttontext}>
                  <p>인사관리</p>
                  <span>조직도, 인사발령, 직원 정보 통합 관리</span>
                </div>
              </div>
              <div className={s.buttonLi}>
                <p className={s.img}>
                  <img src="/Banknote.png" alt="" />
                </p>
                <div className={s.buttontext}>
                  <p>급여관리</p>
                  <span>자동 급여 계산, 세금 신고, 명세서 발송</span>
                </div>
              </div>
              <div className={s.buttonLi}>
                <p className={s.img}>
                  <img src="/Clock.png" alt="" />
                </p>
                <div className={s.buttontext}>
                  <p>근태관리</p>
                  <span>출퇴근, 휴가, 초과근무 실시간 모니터링</span>
                </div>
              </div>
            </div>
          </div>

          <div className={s.mainRight}>
            <div className={s.rightcont}>
              <p className={s.rightTitle}>로그인</p>
              <span style={{ fontSize: "15px", color: "#6B7280" }}>
                계정에 로그인하여 업무를 시작하세요
              </span>
              <div className={s.rightInput}>
                <label style={{ marginTop: "10px" }}>이메일</label>
                <input
                  type="text"
                  placeholder="이메일 주소를 입력하세요"
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      if (!loginInfo?.email) {
                        alert("이메일을 입력해주세요");
                        return;
                      }
                      if (!loginInfo?.password) {
                        alert("비밀번호를 입력해주세요");
                        return;
                      }
                      goLogin();
                    }
                  }}
                  onChange={(e) =>
                    setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
              <div className={s.rightInput1}>
                <label>비밀번호</label>
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      if (!loginInfo?.email) {
                        alert("이메일을 입력해주세요");
                        return;
                      }
                      if (!loginInfo?.password) {
                        alert("비밀번호를 입력해주세요");
                        return;
                      }
                      goLogin();
                    }
                  }}
                  onChange={(e) =>
                    setLoginInfo((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={s.checkbox}>
                <input type="checkbox" />
                <p>로그인 상태 유지</p>
                <button className={s.search}>비밀번호 찾기</button>
              </div>
              <button className={s.signin} onClick={() => goLogin()}>
                <img src="/Log In.png" alt="" />
                로그인
              </button>
              <div className={s.spancss}>
                <span style={{ marginRight: "5px" }}></span>
                <p>또는</p>
                <span style={{ marginLeft: "5px" }}></span>
              </div>
              <div className={s.kakao}>
                <img src="/kakao_login_large_wide 1.png" alt="" />
              </div>
              <div className={s.signup}>
                <p>계정이 없으신가요?</p>
                <span>회원가입 신청</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
