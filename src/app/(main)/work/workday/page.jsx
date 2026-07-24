"use client";
import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import WorkBox from "@/component/common/WorkBox";
import { useState, useEffect } from "react";
import baseApi from "@/api/baseApi";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function page() {
  const [eventTab, setEventTab] = useState("출근");
  const [restType, setRestType] = useState("종일");
  const [navInfo, setNavInfo] = useState();
  const [isLoading, setIsLoading] = useState();
  const [workList, setWorkList] = useState([]);
  const [downOpen, setDownOpen] = useState(false);

  useEffect(() => {
    const 이름 = localStorage.getItem("name");
    const 부서명 = localStorage.getItem("departmentName");

    setNavInfo({
      departmentName: 부서명, //key, value가 같으면 생략 가능
      name: 이름,
    });
  }, []);

  // const getAttendanceDaily = async () => {
  //   try {
  //     setIsLoading(true);

  //     // 1. 근태리스트를 조회합니다.
  //     const token = localStorage.getItem("accessToken");
  //     const res = await baseApi.get("/api/v1/attendances/daily", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // 2. 근태리스트를 세팅합니다.
  //     setAttendanceList(res?.data?.data);
  //   } catch (e) {
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const 출근처리하기 = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.post(
      "/api/v1/attendances/checkin",
      {
        workDate: "2026-06-25",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setIsLoading(false);
  };

  const 퇴근처리하기 = async () => {
    setIsLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.post(
      "/api/v1/attendances/checkout",
      {
        workDate: "2026-06-25",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // 퇴근처리 후 재조회하기
    getAttendanceDaily();

    setIsLoading(false);
  };

  useEffect(() => {
    getAttendanceDaily();
  }, []);

  const parsignDateTime = (time) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const localDateTime = `${year}-${month}-${day}T${time}:00`;

    return localDateTime;
  };

  const goAttend = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      setIsLoading(true);
      let path = "/api/v1/attendances/early-leave";

      const param = {
        earlyLeabeTime: parsignDateTime(endTime),
        reason: selectedEarlyReason,
      };

      const res = await baseApi.post(path, param, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast(`${selectedTab} 정상처리 되었습니다.`, { position: "top-center" });
      getAttendanceDaily();

      setIsLoading(true);
    } catch (e) {
      console.error(e);
      toast(e?.response?.data?.message || "네트워크 에러", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const goAttendence = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      setIsLoading(true);
      let path = "/api/v1/attendances/leave";

      const param = {
        startDate: startHolidayDate,
        endDate: endHolidayDate,
        leaveType: "연차",
      };

      const res = await baseApi.post(path, param, {
        headers: {
          Authorization: `Bearear ${token}`,
        },
      });

      toast(`${selectedTab} 정상처리 되었습니다.`, { position: "top-center" });
      getAttendanceDaily();

      setIsLoading(true);
    } catch (e) {
      console.error(e);
      toast(e?.response?.data?.message || "네트워크 에러", {
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getAttendanceDaily = async (findDate) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("accessToken");

      const params = {
        findDate: "2026-06-29",
      };

      // 검색 키워드 존재시 추가
      if (searchKeyword) {
        params.keyword = searchKeyword;
      }

      // 검색할 부서 존재시 추가
      if (selectedDepartment) {
        params.departmentName = selectedDepartment;
      }

      const res = await baseApi.get("/api/v1/attendances/daily", {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAttendanceList(res?.data?.data);
    } catch (e) {
      console.error("e", e);
    } finally {
      setIsLoading(false);
    }
  };

  const getWorkList = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/attendances/daily", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {},
    });
  };

  return (
    <div className={s.container}>
      <Nav />

      <div className={s.main}>
        <Aside
          dummy={[
            {
              titleInfo: { iconPath: "/Clock (2).png", titleName: "근태관리" },
              submenuList: [
                { name: "일일근태등록", path: "/work/workday" },
                { name: "월근태현황", path: "/work/workstatus" },
              ],
            },

            {
              titleInfo: { iconPath: "/Calendar.png", titleName: "휴가관리" },
              submenuList: [
                { name: "휴가일수설정", path: "/vacation/setting" },
                { name: "휴가일수계산", path: "/vacation/calculate" },
                { name: "휴가일수신청", path: "/vacation/appoint" },
                { name: "휴가사용현황", path: "/vacation/status" },
              ],
            },
          ]}
        />

        <div className={s.InfoMain}>
          <div className={s.mainContainer}>
            <Header
              headList={[
                { headli1: "근태관리" },
                { headli2: "근태관리" },
                { headli3: "일일근태등록" },
                { headinfo: "날짜별 직원 근태 현황을 등록하고 수정합니다." },
              ]}
            />

            <div className={s.mainRtitle}>
              <button
                className={s.download}
                onClick={() => {
                  setDownOpen(true);
                }}
              >
                <img
                  src="
                /Download.png"
                />
                PDF 다운로드
              </button>
              <button className={s.plus}>
                <img src="/Save.png" />
                일괄저장
              </button>
            </div>

            <div className={s.work_search}>
              <div className={s.search_cont}>
                <div className={s.search_day}>
                  <button className={s.left}>
                    <img src="/Chevron Left (1).png" alt="" />
                  </button>
                  <span>2025년 7월 1일 (화)</span>
                  <button className={s.right}>
                    <img src="/Chevron Right (1).png" alt="" />
                  </button>
                </div>
                <div className={s.search_date}>
                  <img src="/Calendar Check.png" alt="" />
                  <span>오늘</span>
                </div>
                <label>부서</label>
                <select>
                  <option value="전체 부서">전체부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원팀">경영지원팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
                <input type="text" placeholder="사원명 검색" />
              </div>
              <div className={s.search_status}>
                <div style={{ backgroundColor: "#F1F5F9" }}>
                  <span style={{ backgroundColor: "#64748B" }}></span>
                  <p style={{ color: "#374151" }}>전체 23명</p>
                </div>
                <div style={{ backgroundColor: "#EFF6FF" }}>
                  <span style={{ backgroundColor: "#1D4ED8" }}></span>
                  <p style={{ color: "#1D4ED8" }}>출근 18</p>
                </div>
                <div style={{ backgroundColor: "#FFF7ED" }}>
                  <span style={{ backgroundColor: "#EA580C" }}></span>
                  <p style={{ color: "#EA580C" }}>지각 2</p>
                </div>
                <div style={{ backgroundColor: "#FFF1F2" }}>
                  <span style={{ backgroundColor: "#E11D48" }}></span>
                  <p style={{ color: "#E11D48" }}>결근 1</p>
                </div>
                <div style={{ backgroundColor: "#F0FDF4" }}>
                  <span style={{ backgroundColor: "#16A34A" }}></span>
                  <p style={{ color: "#16A34A" }}>연차 2</p>
                </div>
              </div>
            </div>

            <div className={s.work_cont}>
              <div className={s.cont_upload}>
                <div className={s.upload_head}>
                  <img src="/Clipboard Pen.png" alt="" />
                  <p>근태 등록</p>
                  <span>7월 1일</span>
                </div>
                <div className={s.upload_cont}>
                  <div className={s.upload_select}>
                    <label style={{ display: "flex" }}>
                      사원 선택<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <div className={s.select_box}>
                      <span>{navInfo?.name.slice(0, 1)}</span>
                      <p>
                        {navInfo?.name} · {navInfo?.departmentName}
                      </p>
                      <img src="/X.png" alt="" />
                    </div>
                  </div>
                  <div className={s.upload_type}>
                    <label style={{ display: "flex" }}>
                      근태 유형<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <div className={s.type_btn}>
                      <button
                        className={s.btn1}
                        onClick={() => {
                          setEventTab("출근");
                          출근처리하기();
                        }}
                        style={{
                          backgroundColor:
                            eventTab === "출근" ? "#1B3A6B" : "white",
                          border:
                            eventTab === "출근"
                              ? "1px solid #1B3A6B"
                              : "1px solid #D1D5DB",
                        }}
                      >
                        <img
                          src={
                            eventTab === " 출근"
                              ? "/Check Check.png"
                              : "/Check Check (1).png"
                          }
                          alt=""
                        />
                        <span
                          style={{
                            fontWeight: eventTab === "출근" ? "bold" : "normal",
                            color: eventTab === "출근" ? "white" : "#9CA3AF",
                          }}
                        >
                          출근
                        </span>
                      </button>
                      <button
                        className={s.btn2}
                        onClick={() => {
                          setEventTab("지각");
                        }}
                        style={{
                          backgroundColor:
                            eventTab === "지각" ? "#FFF7ED" : "white",
                          border:
                            eventTab === "지각"
                              ? "1px solid #EA580C"
                              : "1px solid #FED7AA",
                        }}
                      >
                        <img src="/Alarm Clock.png" alt="" />
                        <span
                          style={{
                            fontWeight: eventTab === "지각" ? "bold" : "normal",
                          }}
                        >
                          지각
                        </span>{" "}
                      </button>
                      <button
                        className={s.btn3}
                        onClick={() => {
                          setEventTab("조퇴");
                        }}
                        style={{
                          border:
                            eventTab === "조퇴"
                              ? "1px solid #374151"
                              : "1px solid #D1D5DB",
                        }}
                      >
                        <img
                          src={
                            eventTab === " 조퇴"
                              ? "/Log Out (2).png"
                              : "/Log Out (1).png"
                          }
                          alt=""
                        />
                        <span
                          style={{
                            fontWeight: eventTab === "조퇴" ? "bold" : "normal",
                            color: eventTab === "조퇴" ? "#374151" : "#9CA3AF",
                          }}
                        >
                          조퇴
                        </span>
                      </button>
                      <button className={s.btn4}>
                        <img src="/X (1).png" alt="" />
                        <span>결근</span>
                      </button>
                      <button
                        className={s.btn3}
                        onClick={() => {
                          setEventTab("연차");
                        }}
                        style={{
                          backgroundColor:
                            eventTab === "연차" ? "#F0FDF4" : "white",
                          border:
                            eventTab === "연차"
                              ? "1px solid #16A34A"
                              : "1px solid #BBF7D0",
                        }}
                      >
                        <img src="/Calendar Check (1).png" alt="" />
                        <span
                          style={{
                            fontWeight: eventTab === "연차" ? "bold" : "normal",
                            color: "#16A34A",
                          }}
                        >
                          연차
                        </span>
                      </button>
                      <button className={s.btn6}>
                        <img src="/Calendar (1).png" alt="" />
                        <span>반차</span>
                      </button>
                      <button
                        className={s.btn7}
                        onClick={() => {
                          setEventTab("퇴근");
                        }}
                        style={{
                          backgroundColor:
                            eventTab === "퇴근"
                              ? "rgb(223, 205, 255)"
                              : "white",
                          border:
                            eventTab === "퇴근"
                              ? "1px solid #7C3AED"
                              : "1px solid #DDD6FE",
                        }}
                      >
                        <img src="/Plane (1).png" alt="" />
                        <span
                          style={{
                            fontWeight: eventTab === "퇴근" ? "bold" : "normal",
                            color: "#7C3AED ",
                          }}
                        >
                          퇴근
                        </span>
                      </button>
                      <button className={s.btn8}>
                        <img src="/Book Open.png" alt="" />
                        <span>교육</span>
                      </button>
                      <button
                        className={s.btn3}
                        onClick={() => {
                          setEventTab("공가");
                        }}
                        style={{
                          backgroundColor:
                            eventTab === "공가" ? "#1B3A6B" : "white",
                          border:
                            eventTab === "공가"
                              ? "1px solid #1B3A6B"
                              : "1px solid #D1D5DB",
                        }}
                      >
                        <img
                          src={
                            eventTab === "공가"
                              ? "/Shield Check (3).png"
                              : "/Shield Check (1).png"
                          }
                          alt=""
                        />
                        <span
                          style={{
                            fontWeight: eventTab === "공가" ? "bold" : "normal",
                            color: eventTab === "공가" ? "white" : "#9CA3AF",
                          }}
                        >
                          공가
                        </span>
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      display: eventTab === "출근" ? "block" : "none",
                    }}
                  >
                    <div className={s.upload_time} style={{ width: "308px" }}>
                      <div>
                        <label>출근 시간</label>
                        <div className={s.time_box}>
                          <span>09:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                      <div>
                        <label>퇴근 시간</label>
                        <div className={s.time_box}>
                          <span>18:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={s.upload_work}
                      style={{ marginTop: "14px" }}
                    >
                      <div className={s.work_head}>
                        <label>초과근무(OT)</label>
                        <label className={s.work_toggle}>
                          <input role="switch" type="checkbox" id="toggle" />
                        </label>
                        <p>적용</p>
                      </div>
                      <div className={s.upload_time}>
                        <div>
                          <div className={s.time_box2}>
                            <span>18:00</span>
                            <img src="/Clock (3).png" alt="" />
                          </div>
                        </div>
                        <span className={s.time_span}>~</span>
                        <div>
                          <div className={s.time_box2}>
                            <span>20:30</span>
                            <img src="/Clock (3).png" alt="" />
                          </div>
                        </div>
                        <div className={s.time_over}>2.5h</div>
                      </div>
                    </div>
                    <div className={s.time_write}>
                      <label>비고</label>
                      <input type="text" placeholder="특이사항을 입력하세요" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: eventTab === "지각" ? "block" : "none",
                    }}
                  >
                    <div className={s.late_info}>
                      <img src="/Circle Alert.png" alt="" />
                      <p>지각 시간이 자동으로 계산됩니다.</p>
                    </div>
                    <div className={s.upload_time}>
                      <div>
                        <label>
                          출근 시간{" "}
                          <span
                            style={{
                              backgroundColor: "#FFF7ED",
                              borderRadius: "50px",
                              padding: "0 6px",
                              color: "#EA580C",
                              fontSize: "10px",
                            }}
                          >
                            지각
                          </span>
                        </label>
                        <div
                          className={s.time_box}
                          style={{
                            border: "1px solid #EA580C",
                            color: "#EA580C",
                          }}
                        >
                          <span>10:30</span>
                          <img src="/Clock (7).png" alt="" />
                        </div>
                      </div>
                      <div>
                        <label>퇴근 시간</label>
                        <div className={s.time_box}>
                          <span>18:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={s.upload_work}
                      style={{ marginTop: "14px" }}
                    >
                      <div className={s.work_head}>
                        <label>지각 사유</label>
                      </div>
                      <select
                        style={{
                          border: "1px solid #D1D5DB",
                          width: "308px",
                          borderRadius: "6px",
                          padding: " 0 12px",
                          height: "36px",
                          fontSize: "13px",
                        }}
                      >
                        <option value="교통 지연">교통 지연</option>
                      </select>
                    </div>
                    <div className={s.time_write}>
                      <label>비고</label>
                      <input type="text" placeholder="특이사항을 입력하세요" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: eventTab === "조퇴" ? "block" : "none",
                    }}
                  >
                    <div
                      className={s.late_info}
                      style={{ backgroundColor: "#F8FAFC" }}
                    >
                      <img src="/Info1.png" alt="" />
                      <p style={{ color: "#6B7280" }}>
                        조퇴 시간 이후는 결근으로 처리됩니다.
                      </p>
                    </div>
                    <div className={s.upload_time}>
                      <div>
                        <label>출근 시간</label>
                        <div className={s.time_box}>
                          <span>09:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                      <div>
                        <label style={{ marginLeft: "8px" }}>
                          조퇴 시간{" "}
                          <span
                            style={{
                              backgroundColor: "#F1F5F9",
                              borderRadius: "50px",
                              padding: "0 6px",
                              color: "#374151",
                              fontSize: "10px",
                            }}
                          >
                            필수
                          </span>{" "}
                        </label>
                        <input
                          type="text"
                          placeholder="예: 14:00"
                          style={{
                            fontSize: "12px",
                            border: "1px solid #374151",
                            width: "150px",
                            height: "36px",
                            borderRadius: "6px",
                            padding: "0 12px",
                            marginLeft: "8px",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className={s.upload_work}
                      style={{ marginTop: "14px" }}
                    >
                      <div className={s.work_head}>
                        <label>조퇴 사유</label>
                      </div>
                      <select
                        style={{
                          border: "1px solid #D1D5DB",
                          width: "308px",
                          borderRadius: "6px",
                          padding: " 0 12px",
                          height: "36px",
                          fontSize: "13px",
                        }}
                      >
                        <option value="개인 사정">개인 사정</option>
                      </select>
                    </div>
                    <div className={s.time_write}>
                      <label>비고</label>
                      <input type="text" placeholder="특이사항을 입력하세요" />
                    </div>
                  </div>

                  <div
                    style={{
                      display: eventTab === "퇴근" ? "block" : "none",
                    }}
                  >
                    <div className={s.upload_time} style={{ width: "308px" }}>
                      <div>
                        <label>출근 시간</label>
                        <div className={s.time_box}>
                          <span>09:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                      <div>
                        <label>퇴근 시간</label>
                        <div className={s.time_box}>
                          <span>18:00</span>
                          <img src="/Clock (3).png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={s.upload_work}
                      style={{ marginTop: "14px" }}
                    >
                      <div className={s.work_head}>
                        <label>초과근무(OT)</label>
                        <label className={s.work_toggle}>
                          <input role="switch" type="checkbox" id="toggle" />
                        </label>
                        <p>적용</p>
                      </div>
                      <div className={s.upload_time}>
                        <div>
                          <div className={s.time_box2}>
                            <span>18:00</span>
                            <img src="/Clock (3).png" alt="" />
                          </div>
                        </div>
                        <span className={s.time_span}>~</span>
                        <div>
                          <div className={s.time_box2}>
                            <span>20:30</span>
                            <img src="/Clock (3).png" alt="" />
                          </div>
                        </div>
                        <div className={s.time_over}>2.5h</div>
                      </div>
                    </div>
                    <div className={s.time_write}>
                      <label>비고</label>
                      <input type="text" placeholder="특이사항을 입력하세요" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: eventTab === "공가" ? "block" : "none",
                    }}
                  >
                    <div className={s.upload_time}>
                      <div>
                        <label style={{ display: "flex" }}>
                          공가 구분 <p style={{ color: "#EF4444" }}>*</p>
                        </label>
                        <select
                          style={{
                            border: "1px solid #D1D5DB",
                            width: "308px",
                            borderRadius: "6px",
                            padding: " 0 12px",
                            height: "36px",
                            fontSize: "13px",
                            marginBottom: "8px",
                          }}
                        >
                          <option value="예비군 훈련">예비군 훈련</option>
                        </select>
                      </div>
                    </div>
                    <div className={s.upload_time}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label style={{ display: "flex" }}>
                          공가 기간 <p style={{ color: "#EF4444" }}>*</p>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            width: "100%",
                          }}
                        >
                          <input
                            type="date"
                            style={{
                              width: "142px",
                              border: "1px solid #D1D5DB",
                              padding: "0 10px",
                              borderRadius: "6px",
                              height: "36px",
                              lineHeight: "36px",
                              fontSize: "12px",
                            }}
                          />
                          <p style={{ color: "#9CA3AF", lineHeight: "36px" }}>
                            ~
                          </p>
                          <input
                            type="date"
                            style={{
                              width: "142px",
                              border: "1px solid #D1D5DB",
                              padding: "0 10px",
                              borderRadius: "6px",
                              height: "36px",
                              lineHeight: "36px",
                              fontSize: "12px",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            display: "flex",
                            backgroundColor: "#EFF6FF",
                            padding: "0 10px",
                            borderRadius: "6px",
                            color: "#1D4ED8",
                            fontSize: "12px",
                            marginTop: "6px",
                            height: "27px",
                            lineHeight: "27px",
                            fontWeight: "bold",
                          }}
                        >
                          <img
                            src="/Clock (8).png"
                            alt=""
                            style={{
                              width: "12px",
                              height: "12px",
                              marginTop: "6px",
                              marginRight: "5px",
                            }}
                          />
                          총 <p>2</p>일
                        </span>
                      </div>
                    </div>
                    <div style={{ marginTop: "14px" }}>
                      <label style={{ display: "flex" }}>
                        증빙서류{" "}
                        <p style={{ color: "#6B7280", fontSize: "12px" }}>
                          (필수)
                        </p>
                      </label>
                      <div className={s.vac_receipt}>
                        <img src="/Paperclip1.png" alt="" />
                        <p>훈련소집통지서</p>
                        <span>.pdf</span>
                        <div className={s.vac_receipt_btn}>
                          <button className={s.receipt_del}>
                            <img src="/Trash 2.png" alt="" />
                            <p>삭제</p>
                          </button>
                          <button className={s.receipt_add}>
                            <img src="/Plus (3).png" alt="" />
                            <p>추가</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={s.time_write}>
                      <label>비고</label>
                      <input type="text" placeholder="특이사항을 입력하세요" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: eventTab === "연차" ? "block" : "none",
                    }}
                  >
                    <div className={s.rest_status}>
                      <div className={s.rest_status_head}>
                        <img src="/Calendar Check (1).png" alt="" />
                        <p>연차 현황</p> <span>2025년 기준</span>
                      </div>
                      <ul className={s.rest_status_cont}>
                        <li>
                          <span>15일</span>
                          <p>총 부여</p>
                        </li>
                        <li>
                          <span>8일</span>
                          <p>사용</p>
                        </li>
                        <li>
                          <span style={{ color: "#16A34A" }}>7일</span>
                          <p style={{ color: "#16A34A" }}>잔여</p>
                        </li>
                        <li>
                          <span style={{ color: "#2563EB" }}>2일</span>
                          <p style={{ color: "#2563EB" }}>이번 신청</p>
                        </li>
                      </ul>
                    </div>
                    <div className={s.upload_time}>
                      <div>
                        <label style={{ display: "flex" }}>
                          연차 구분 <p style={{ color: "#EF4444" }}>*</p>
                        </label>

                        <ul className={s.rest_type}>
                          <li
                            onClick={() => {
                              setRestType("종일");
                            }}
                            style={{
                              backgroundColor:
                                restType === "종일" ? "#16A34A" : "white",
                              border:
                                restType === "종일"
                                  ? "1px solid  #16A34A"
                                  : "1px solid #D1D5DB",
                            }}
                          >
                            <img
                              style={{ marginLeft: "25px" }}
                              src={
                                restType === "종일"
                                  ? "/Sun (2).png"
                                  : "/Sun22.png"
                              }
                              alt=""
                            />
                            <p
                              style={{
                                fontWeight:
                                  restType === "종일" ? "bold" : "normal",
                                color:
                                  restType === "종일" ? "white" : "#9CA3AF",
                              }}
                            >
                              종일
                            </p>
                          </li>
                          <li
                            onClick={() => {
                              setRestType("오전반차");
                            }}
                            style={{
                              backgroundColor:
                                restType === "오전반차" ? "#16A34A" : "white",
                              border:
                                restType === "오전반차"
                                  ? "1px solid  #16A34A"
                                  : "1px solid #D1D5DB",
                            }}
                          >
                            <img
                              src={
                                restType === "오전반차"
                                  ? "/Sunrise.png"
                                  : "/Sunset.png"
                              }
                              alt=""
                            />
                            <p
                              style={{
                                fontWeight:
                                  restType === "오전반차" ? "bold" : "normal",
                                color:
                                  restType === "오전반차" ? "white" : "#9CA3AF",
                              }}
                            >
                              오전반차
                            </p>
                          </li>
                          <li
                            onClick={() => {
                              setRestType("오후반차");
                            }}
                            style={{
                              backgroundColor:
                                restType === "오후반차" ? "#16A34A" : "white",
                              border:
                                restType === "오후반차"
                                  ? "1px solid  #16A34A"
                                  : "1px solid #D1D5DB",
                            }}
                          >
                            <img
                              src={
                                restType === "오후반차"
                                  ? "/Sunrise.png"
                                  : "/Sunset.png"
                              }
                              alt=""
                            />
                            <p
                              style={{
                                fontWeight:
                                  restType === "오후반차" ? "bold" : "normal",
                                color:
                                  restType === "오후반차" ? "white" : "#9CA3AF",
                              }}
                            >
                              오후반차
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={s.upload_time}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <label style={{ display: "flex" }}>
                          연차 기간 <p style={{ color: "#EF4444" }}>*</p>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            width: "100%",
                          }}
                        >
                          <input
                            type="date"
                            style={{
                              width: "142px",
                              border: "1px solid #16A34A",
                              padding: "0 10px",
                              borderRadius: "6px",
                              height: "36px",
                              lineHeight: "36px",
                              fontSize: "12px",
                            }}
                          />
                          <p style={{ color: "#9CA3AF", lineHeight: "36px" }}>
                            ~
                          </p>
                          <input
                            type="date"
                            style={{
                              width: "142px",
                              border: "1px solid #16A34A",
                              padding: "0 10px",
                              borderRadius: "6px",
                              height: "36px",
                              lineHeight: "36px",
                              fontSize: "12px",
                            }}
                          />
                        </div>
                        <span
                          style={{
                            display: "flex",
                            backgroundColor: "#F0FDF4",
                            padding: "0 10px",
                            borderRadius: "6px",
                            color: "#16A34A",
                            fontSize: "12px",
                            marginTop: "6px",
                            height: "27px",
                            lineHeight: "27px",
                            fontWeight: "bold",
                          }}
                        >
                          <img
                            src="/Clock (9).png"
                            alt=""
                            style={{
                              width: "12px",
                              height: "12px",
                              marginTop: "6px",
                              marginRight: "5px",
                            }}
                          />
                          총 <p> 2</p>일 차감
                        </span>
                      </div>
                    </div>
                    <div className={s.time_write}>
                      <label>연차 사유</label>
                      <input type="text" placeholder="연차 사유를 입력하세요" />
                    </div>
                  </div>

                  <div className={s.upload_btn}>
                    <button className={s.restore}>
                      <img src="/Rotate Ccw (1).png" alt="" />
                      <span>초기화</span>
                    </button>
                    <button
                      className={s.save}
                      onClick={() => {
                        if (eventTab === "퇴근") {
                          퇴근처리하기();
                        } else if (eventTab === "출근") {
                          출근처리하기();
                        } else if (eventTab === "조퇴") {
                          goAttend();
                        }
                      }}
                    >
                      <img src="/Save.png" alt="" />
                      <span>저장</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={s.cont_workList}>
                <div className={s.workBox}>
                  <div className={s.workBox_head}>
                    <img src="/List Checks.png" alt="" />
                    <p>2025.07.01 근태목록</p>
                    <div>
                      <p className={s.workBox_num}>총 23명</p>
                      <span
                        style={{
                          display: "flex",
                          color: "#16A34A",
                          fontSize: "12px",
                          lineHeight: "30px",
                          fontWeight: "700",
                        }}
                        className={s.workBox_span}
                      >
                        <img src="/Users (1).png" alt="" />
                        일괄등록
                      </span>
                    </div>
                  </div>

                  <WorkBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={downOpen} onOpenChange={setDownOpen}>
        <DialogContent className="w-[400px]" showCloseButton={false}>
          <div className={s.pdf_cont}>
            <span className={s.pdf_img}>
              <img src="/Download (1).png" alt="" />
            </span>
            <div className={s.pdf_text}>
              <p>PDF 다운로드</p>
              <span>
                선택한 데이터를 PDF 파일로 다운로드합니다. <br />
                계속 진행하시겠습니까?
              </span>
            </div>
            <div className={s.pdf_button}>
              <button className={s.pdf_cancel}>취소</button>
              <button className={s.pdf_select}>확인</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
