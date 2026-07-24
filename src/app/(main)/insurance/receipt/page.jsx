"use client";
import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function page() {
  // const [date, setDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const [downOpen, setDownOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className={s.container}>
      <Nav />

      <div className={s.main}>
        <Aside
          dummy={[
            {
              titleInfo: {
                iconPath: "/Banknote (3).png",
                titleName: "급여관리",
              },
              submenuList: [
                { name: "급여기본정보관리", path: "/pay/payInfo" },
                { name: "급여지급", path: "/pay/provision" },
                { name: "기본수당외수당관리", path: "/pay/manage" },
                { name: "급여계산", path: "/pay/calculate" },
                { name: "급여조회", path: "/pay/search" },
              ],
            },
            {
              titleInfo: {
                iconPath: "/Shield Check (2).png",
                titleName: "4대보험관리",
              },
              submenuList: [
                { name: "4대보험요율표설정", path: "/insurance/setting" },
                { name: "국민연금관리" },
                { name: "건강보험관리" },
                { name: "고용보험관리" },
                { name: "4대보험취득/상실", path: "/insurance/receipt" },
              ],
            },
          ]}
        />

        <div className={s.InfoMain}>
          <div className={s.mainContainer}>
            <Header
              headList={[
                { headli1: "급여관리" },
                { headli2: "4대보험관리" },
                { headli3: "4대보험취득/상실" },
                {
                  headinfo:
                    "입사·퇴사에 따른 4대보험 취득·상실 내역을 조회하고 신고서를 출력합니다.",
                },
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
              <button
                className={s.download}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <img
                  src="
                /File Text (2).png"
                />
                신고서 일괄출력
              </button>
              <button
                className={s.plus}
                onClick={() => {
                  setRegisterOpen(true);
                }}
              >
                <img src="/Plus.png" />
                신규등록
              </button>
            </div>

            <ul className={s.appoint_card}>
              <li>
                <p style={{ display: "flex", marginLeft: "60px" }}>
                  <img src="/User Round Plus.png" alt="" />
                  이달 취득
                </p>
                <span>3명</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#1E40AF",
                    backgroundColor: "#DBEAFE",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  신고완료 2 · 미신고 1
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "60px" }}>
                  <img src="/User Round Minus.png" alt="" />
                  이달 상실
                </p>
                <span>1명</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#DC2626",
                    backgroundColor: "#FEE2E2",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  신고완료 1 · 미신고 0
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "60px" }}>
                  <img src="/Alert Circle (1).png" alt="" />
                  미신고 건수
                </p>
                <span>1건</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#E11D48",
                    backgroundColor: "#FFF1F2",
                    border: "1px solid #FECACA",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  신고기한 임박 확인
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "60px" }}>
                  <img src="/Clock (5).png" alt="" />
                  신고기한
                </p>
                <span>1명</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#CA8A04",
                    backgroundColor: "#FEF9C3",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  2025.07.14 마감
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "45px" }}>
                  <img src="/Trending Up (3).png" alt="" />
                  연간 누적 취득
                </p>
                <span>1명</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#16A34A",
                    backgroundColor: "#DCFCE7",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  2025년 1~7월 기준
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "45px" }}>
                  <img src="/Trending Down (1).png" alt="" />
                  연간 누적 상실
                </p>
                <span>4명</span>
                <p
                  className={s.lighter}
                  style={{
                    color: "#7C3AED",
                    backgroundColor: "#EDE9FE",
                    width: "112px",
                    borderRadius: "50px",
                    marginLeft: "42px",
                  }}
                >
                  2025년 1~7월 기준
                </p>
              </li>
            </ul>
            <div className={s.receipt_search}>
              <div className={s.search_box}>
                <label>기간</label>
                <input type="date" />
                <p>~</p>
                <input type="date" />
              </div>
              <div className={s.search_box}>
                <div className={s.search_button}>
                  <button className={s.month1}>1개월</button>
                  <button className={s.month2}>3개월</button>
                  <button className={s.month3}>올해</button>
                </div>
              </div>
              <div className={s.search_box}>
                <label>유형</label>
                <div className={s.search_button}>
                  <button className={s.month4}>전체</button>
                  <button className={s.month5}>
                    {" "}
                    <span style={{ backgroundColor: "#16A34A" }}></span> 취득
                  </button>
                  <button className={s.month6}>
                    {" "}
                    <span style={{ backgroundColor: "#E11D48" }}></span> 상실
                  </button>
                </div>
              </div>
              <div className={s.search_box}>
                <label>신고여부</label>
                <select name="" id="">
                  <option value="전체">전체</option>
                  <option value="미신고">미신고</option>
                  <option value="신고완료">신고완료</option>
                </select>
              </div>
              <input type="text" placeholder="사원명 검색" />
            </div>
            <div className={s.insurance_DB}>
              <div className={s.insurance_DB_header}>
                <div className={s.DB_box}>
                  <img src="/Table.png" alt="" />
                  <p>4대보험 취득/상실 이력 (2025년)</p>
                </div>
                <div className={s.DB_select}>
                  <span
                    style={{
                      borderRadius: "50px",
                      height: "22px",
                      lineHeight: "22px",
                      marginTop: "12px",
                    }}
                  >
                    총 16건
                  </span>
                  <p style={{ lineHeight: "22px", paddingTop: "3px" }}>
                    <input type="checkbox" /> <label>전체선택</label>
                  </p>
                  <span className={s.DB_span}>
                    <img src="/Printer (1).png" alt="" />
                    <label>선택 신고서출력</label>
                  </span>
                </div>
              </div>{" "}
              <ul
                className={s.DB_list}
                style={{ height: "38px", lineHeight: "38px" }}
              >
                <li>
                  <input type="checkbox" />
                </li>
                <li>취득/상실</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서/직급</li>
                <li>취득일</li>
                <li>상실일 </li>
                <li>보험 종류</li>
                <li>취득/상실 사유</li>
                <li>신고여부</li>
                <li>신고일</li>
                <li>관리</li>
              </ul>
              <ul className={s.DB_list}>
                <li>
                  <input type="checkbox" />
                </li>
                <li>
                  <p>
                    <span></span>취득
                  </p>
                </li>
                <li>EMP-009</li>
                <li>강다은</li>
                <li style={{ lineHeight: "15px" }}>
                  <p style={{ marginTop: "5px" }}>개발팀</p>
                  <p
                    style={{
                      color: "#9CA3AF",
                      fontSize: "10px",
                      fontWeight: "400",
                    }}
                  >
                    사원
                  </p>
                </li>
                <li>2025.07.10</li>
                <li>- </li>
                <li
                  style={{
                    display: "flex",
                    fontSize: "8px",
                    gap: "4px",
                    fontWeight: "bold",
                    paddingLeft: "6px",
                    paddingTop: "15px",
                  }}
                >
                  <p
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#DBEAFE",
                      height: "12px",
                      lineHeight: "12px",
                      padding: "2px 4px",
                      color: "#1D4ED8",
                    }}
                  >
                    국민연금
                  </p>
                  <p
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#CCFBF1",
                      height: "12px",
                      lineHeight: "12px",
                      padding: "2px 4px",
                      color: "#0F766E",
                    }}
                  >
                    건강보험
                  </p>
                  <p
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#FEF9C3",
                      height: "12px",
                      lineHeight: "12px",
                      padding: "2px 4px",
                      color: "#CA8A04",
                    }}
                  >
                    고용보험
                  </p>
                  <p
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#FEE2E2",
                      height: "12px",
                      lineHeight: "12px",
                      padding: "2px 4px",
                      color: "#DC2626",
                    }}
                  >
                    산재보험
                  </p>
                </li>
                <li>신규입사</li>
                <li>
                  <p
                    style={{
                      display: "flex",
                      color: "#E11D48",
                      backgroundColor: "#FFF1F2",
                      height: "20px",
                      borderRadius: "50px",
                      width: "61px",
                      border: "1px solid #FECACA",
                      lineHeight: "20px",
                      margin: "12px 0 0 13px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#E11D48",
                        display: "block",
                        marginTop: "6px",
                        marginLeft: "6px",
                        marginRight: "5px",
                      }}
                    ></span>
                    미신고
                  </p>
                </li>
                <li>
                  <p
                    style={{
                      display: "flex",
                      backgroundColor: "#FEF9C3",
                      height: "18px",
                      borderRadius: "50px",
                      width: "52px",
                      color: "#D97706",
                      lineHeight: "18px",
                      margin: "13px 0 0 23px",
                    }}
                  >
                    <img
                      src="/Clock (5).png"
                      alt=""
                      style={{
                        width: "9px",
                        height: "9px",
                        marginTop: "4px",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                    />
                    D-5
                  </p>
                </li>
                <li style={{ display: "flex", gap: "4px" }}>
                  <button
                    className={s.db_receipt}
                    onClick={() => setOpen(true)}
                  >
                    <img src="/File Text (4).png" alt="" />
                    <p>신고서</p>
                  </button>
                  <button className={s.db_edit}>
                    <img src="/Pencil.png" alt="" />
                    <p>수정</p>
                  </button>
                </li>
              </ul>
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
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="w-[640px]">
          <DialogHeader>
            <DialogTitle>
              <div className={s.register_head}>
                <img src="/User Plus (1).png" alt="" />
                <p>급여정보등록</p>
                <div className={s.head_status}>
                  <span className={s.head_bg}>1</span>
                  <span>사원 검색</span>
                  <img src="/Chevron Right.png" alt="" />
                  <span
                    className={s.head_bg}
                    style={{ backgroundColor: "#D1D5DB", color: "#6B7280" }}
                  >
                    2
                  </span>
                  <span style={{ color: "#6B7280" }}>급여 입력</span>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className={s.register_cont}>
            <div className={s.register_cont_box}>
              <div className={s.cont_box_head}>
                <span></span>
                <p>신규입사자 검색</p>
              </div>
              <div className={s.cont_box_input}>
                <select>
                  <option value="전체 부서">전체 부서</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                  <option value="디자인팀">디자인팀</option>
                </select>
                <input type="text" placeholder="사원명 또는 사번 입력" />
                <button className={s.box_search_btn}>
                  <img src="/Search (1).png" alt="" />
                  <span>검색</span>
                </button>
              </div>
              <ul className={s.cont_box_chart}>
                <li>선택</li>
                <li>사번</li>
                <li>사원명</li>
                <li>부서</li>
                <li>직급</li>
                <li>입사일</li>
              </ul>
            </div>
            <span className={s.hr}></span>
            <div className={s.register_cont_box}>
              <div className={s.cont_box_head} style={{ position: "relative" }}>
                <span></span>
                <p>급여 정보 입력</p>
                <div className={s.box_head_user}>
                  <span className={s.user_span}>이</span>
                  <p>이수연</p>
                  <p>·</p>
                  <p>인사팀</p>
                  <img src="/Circle Check (1).png" alt="" />
                </div>
              </div>
              <div className={s.user_cont}>
                <div className={s.user_cont_box}>
                  <label>
                    기본급 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <input type="text" />
                </div>
                <div className={s.user_cont_box}>
                  <label>
                    직급수당 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <input type="text" />
                </div>
                <div className={s.user_cont_box}>
                  <label>식대</label>
                  <input type="text" />
                </div>
                <div className={s.user_cont_box}>
                  <label>교통비</label>
                  <input type="text" />
                </div>
                <div className={s.user_cont_box}>
                  <label>지급방식</label>
                  <select>
                    <option value="계좌이체">계좌이체</option>
                  </select>
                </div>
                <div className={s.user_cont_box}>
                  <label>
                    급여 지급일 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <select>
                    <option value="매월 25일">매월 25일</option>
                  </select>
                </div>
                <div className={s.user_cont_box}>
                  <label>국민연금</label>
                  <div className={s.user_cont_auto}>
                    <p>126,000</p>
                    <span>자동</span>
                  </div>
                </div>
                <div className={s.user_cont_box}>
                  <label>건강보험</label>
                  <div className={s.user_cont_auto}>
                    <p>98,210</p>
                    <span>자동</span>
                  </div>
                </div>
                <div className={s.user_cont_box}>
                  <label>소득세</label>
                  <div className={s.user_cont_auto}>
                    <p>52,300</p>
                    <span>자동</span>
                  </div>
                </div>
                <div className={s.pay_info_result}>
                  <div className={s.info_result_text}>
                    <div className={s.info_result_text_sum}>
                      <span>총 지급액</span>
                      <p>3,200,000원</p>
                    </div>
                    <img src="/Minus Icon.png" alt="" />
                    <div className={s.info_result_text_sum}>
                      <span>총 공제액</span>
                      <p style={{ color: "#374151" }}>276,510원</p>
                    </div>
                    <img src="/Equal Icon.png" alt="" />
                    <div className={s.info_result_text_sum}>
                      <span>실 수령액</span>
                      <p style={{ color: "#1B3A6B", fontSize: "15px" }}>
                        2,923,490원
                      </p>
                    </div>
                  </div>
                  <div className={s.info_result_info}>
                    <img src="/Info (4).png" alt="" />
                    <span>공제액은 자동 계산됩니다.</span>
                  </div>
                </div>
                <div className={s.register_footer}>
                  <div className={s.register_footer_text}>
                    <img src="/Info1.png" alt="" />
                    <span>등록 후 급여 대장에 자동 반영됩니다.</span>
                  </div>
                  <div className={s.register_footer_button}>
                    <button className={s.register_cancel}>
                      <img src="/X.png" alt="" />
                      <span>취소</span>
                    </button>
                    <button className={s.register_select}>
                      <img src="/User Plus.png" alt="" />
                      <span style={{ fontWeight: "bold" }}>급여정보 등록</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[600px] max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>
              <div className={s.modal_header}>
                <span className={s.modal_header_span}>
                  <img src="/File Text.png" alt="" />
                </span>
                <div className={s.modal_header_text}>
                  <span>4대보험 취득신고서 출력</span>
                  <p>Health & Employment Insurance Acquisition Report</p>
                </div>
                <div className={s.modal_header_date}>
                  <span></span>미신고 · D-5
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className={s.modal_cont}>
            <div className={s.modal_emp}>
              <div className={s.modal_emp_info}>
                <span className={s.modal_emp_info_span}>강</span>
                <div className={s.modal_emp_text}>
                  <div style={{ fontSize: "11px", lineHeight: "18px" }}>
                    <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                      강다은
                    </p>
                    <span
                      style={{
                        display: "flex",
                        gap: "4px",
                        backgroundColor: "#DCFCE7",
                        borderRadius: "50px",
                        padding: "0 10px",
                        height: "18px",
                        color: "#16A34A",
                        fontWeight: "bold",
                      }}
                    >
                      취득대상
                    </span>
                    <span
                      style={{
                        display: "flex",
                        gap: "4px",
                        backgroundColor: "#FFF1F2",
                        border: "1px solid #FECACA",
                        borderRadius: "50px",
                        padding: "0 10px",
                        height: "18px",
                      }}
                    >
                      <img src="/Alert Circle (1).png" alt="" />{" "}
                      <p style={{ color: "#E11D48", fontWeight: "bold" }}>
                        신고기한 임박
                      </p>
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#6B7280",
                    }}
                  >
                    <p>EMP-009</p> <span></span> <p>개발팀</p>
                    <span className={s.modal_emp_text_span}></span>
                    <p>사원</p>
                    <span className={s.modal_emp_text_span}></span>
                    <p>입사일 2025.07.10</p>
                  </div>
                </div>
              </div>
              <div className={s.modal_emp_day}>
                <div className={s.modal_emp_day1}>
                  <img src="/Clock (5).png" alt="" />
                  <span>신고기한</span>
                </div>
                <span className={s.modal_emp_day_span}></span>
                <div className={s.modal_emp_day1}>
                  <p>D-5</p>
                  <span>2025.07.14</span>
                </div>
              </div>
            </div>
            <div className={s.modal_emp} style={{ backgroundColor: "white" }}>
              <div className={s.modal_select_head}>
                <span></span> <p>신고서 선택</p>
                <p
                  style={{
                    color: "#9CA3AF",
                    fontWeight: "normal",
                    fontSize: "12px",
                  }}
                >
                  복수 선택 가능
                </p>
              </div>
              <div className={s.modal_select}>
                <div
                  className={s.select_box}
                  style={{ border: "1px solid #BFDBFE" }}
                >
                  <div className={s.select_box1}>
                    <input type="checkbox" />
                    <span
                      style={{
                        backgroundColor: "#DBEAFE",
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                        marginTop: "7px",
                        position: "relative",
                      }}
                    >
                      <img
                        src="/Shield.png"
                        alt=""
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    </span>
                    <div className={s.select_box_text}>
                      <p>국민연금 취득신고서</p>
                      <span>국민연금공단 제출용 · 취득일로부터 14일 이내</span>
                    </div>
                  </div>
                  <div className={s.select_box1_right}>
                    <span
                      style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}
                    >
                      NPS-001
                    </span>
                    <img src="/Chevron Right (4).png" alt="" />
                  </div>
                </div>
                <div
                  className={s.select_box}
                  style={{
                    border: "1px solid #99F6E4",
                    backgroundColor: "#F0FDFA",
                  }}
                >
                  <div className={s.select_box1}>
                    <input type="checkbox" />
                    <span
                      style={{
                        backgroundColor: "#CCFBF1",
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                        marginTop: "7px",
                        position: "relative",
                      }}
                    >
                      <img
                        src="/Heart Pulse (1).png"
                        alt=""
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    </span>
                    <div className={s.select_box_text}>
                      <p>건강보험 취득신고서</p>
                      <span>
                        국민건강보험공단 제출용 · 취득일로부터 14일 이내
                      </span>
                    </div>
                  </div>
                  <div className={s.select_box1_right}>
                    <span
                      style={{ backgroundColor: "#CCFBF1", color: "#0F766E" }}
                    >
                      NHIS-001
                    </span>
                    <img src="/Chevron Right (5).png" alt="" />
                  </div>
                </div>
                <div
                  className={s.select_box}
                  style={{
                    border: "1px solid #FDE68A",
                    backgroundColor: "#FFFBEB",
                  }}
                >
                  <div className={s.select_box1}>
                    <input type="checkbox" />
                    <span
                      style={{
                        backgroundColor: "#FEF9C3",
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                        marginTop: "7px",
                        position: "relative",
                      }}
                    >
                      <img
                        src="/Briefcase.png"
                        alt=""
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    </span>
                    <div className={s.select_box_text}>
                      <p>고용보험 취득신고서</p>
                      <span>
                        근로복지공단 제출용 · 취득일이 속한 달 다음달 15일까지
                      </span>
                    </div>
                  </div>
                  <div className={s.select_box1_right}>
                    <span
                      style={{ backgroundColor: "#FEF9C3", color: "#D97706" }}
                    >
                      KCOMWEL-001
                    </span>
                    <img src="/Chevron Right (6).png" alt="" />
                  </div>
                </div>
                <div
                  className={s.select_box}
                  style={{
                    border: "1px solid #E5E7EB",
                    backgroundColor: "#F8FAFC",
                    opacity: "60%",
                  }}
                >
                  <div className={s.select_box1}>
                    <input type="checkbox" />
                    <span
                      style={{
                        backgroundColor: "#F1F5F9",
                        borderRadius: "8px",
                        width: "32px",
                        height: "32px",
                        marginTop: "7px",
                        position: "relative",
                      }}
                    >
                      <img
                        src="/Hard Hat.png"
                        alt=""
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      />
                    </span>
                    <div className={s.select_box_text}>
                      <p>산재보험 취득신고서</p>
                      <span>
                        근로복지공단 제출용 · 사업장 취득 시 신고 (해당없음)
                      </span>
                    </div>
                  </div>
                  <div className={s.select_box1_right}>
                    <span
                      style={{
                        backgroundColor: "#F1F5F9",
                        color: "#9CA3AF",
                        border: "1px solid #E5E7EB",
                      }}
                    >
                      미해당
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={s.modal_emp}
              style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div className={s.modal_select_head}>
                <span></span> <p>직원정보 자동입력</p>
                <p
                  style={{
                    color: "#16A34A",
                    fontWeight: "bold",
                    fontSize: "12px",
                    display: "flex",
                    backgroundColor: "#DCFCE7",
                    borderRadius: "50px",
                    padding: "0 10px",
                    height: "18px",
                    lineHeight: "18px",
                  }}
                >
                  <img
                    src="/Zap.png"
                    alt=""
                    style={{
                      width: "10px",
                      height: "10px",
                      marginTop: "3px",
                      marginRight: "2px",
                    }}
                  />
                  자동완성
                </p>
              </div>
              <div className={s.modal_select_input}>
                <div className={s.select_input_box}>
                  <label>성명</label>
                  <div className={s.select_input_text}>
                    <p>강다은</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
                <div className={s.select_input_box}>
                  <label>성별</label>
                  <div className={s.select_input_text}>
                    <p>여</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={s.modal_select_input}>
                <div className={s.select_input_box}>
                  <label style={{ display: "flex", gap: "4px" }}>
                    주민등록번호 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <input type="password" />
                </div>
                <div className={s.select_input_box}>
                  <label>국적</label>
                  <div className={s.select_input_text}>
                    <p>대한민국</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={s.modal_select_input}>
                <div className={s.select_input_box}>
                  <label style={{ display: "flex", gap: "4px" }}>
                    취득일 (입사일) <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <div className={s.select_input_text}>
                    <p>2025.07.10</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
                <div className={s.select_input_box}>
                  <label style={{ display: "flex", gap: "4px" }}>
                    기준소득월액 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <input type="text" />
                </div>
              </div>
              <div className={s.modal_select_input}>
                <div className={s.select_input_box}>
                  <label>직종</label>
                  <div className={s.select_input_text}>
                    <p>일반직</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
                <div className={s.select_input_box}>
                  <label>고용형태</label>
                  <div className={s.select_input_text}>
                    <p>정규직</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={s.modal_select_info}>
                <img src="/Info.png" alt="" />
                <p>
                  자물쇠 항목은 인사정보에서 자동 불러온 값입니다.
                  기준소득월액은 직접 수정할 수 있습니다.
                </p>
              </div>
            </div>
            <div className={s.modal_emp} style={{ backgroundColor: "white" }}>
              <div className={s.modal_select_head}>
                <span></span> <p>신고기관 정보</p>
              </div>
              <ul className={s.modal_select_card}>
                <li
                  style={{
                    backgroundColor: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                  }}
                >
                  <div
                    className={s.select_card_head}
                    style={{ borderBottom: "1px solid #BFDBFE" }}
                  >
                    <span style={{ backgroundColor: "#1D4ED8" }}></span>
                    <p>국민 연금공단</p>
                    <span
                      className={s.card_span}
                      style={{ color: "#1D4ED8", backgroundColor: "#DBEAFE" }}
                    >
                      팩스 가능
                    </span>
                  </div>
                  <div className={s.select_card_cont}>
                    <div>
                      <img src="/Map Pin (1).png" alt="" />
                      <p>서울강남지사</p>
                    </div>
                    <div>
                      <img src="/Phone.png" alt="" />
                      <p>1355</p>
                    </div>
                    <div>
                      <img src="/Printer (4).png" alt="" />
                      <p>02-123-4567</p>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    backgroundColor: "#F0FDFA",
                    border: "1px solid #99F6E4",
                  }}
                >
                  <div
                    className={s.select_card_head}
                    style={{ borderBottom: "1px solid #99F6E4" }}
                  >
                    <span style={{ backgroundColor: "#0F766E" }}></span>
                    <p style={{ color: "#0F766E" }}>국민건강보험공단</p>
                    <span
                      className={s.card_span}
                      style={{ color: "#0F766E", backgroundColor: "#CCFBF1" }}
                    >
                      팩스 가능
                    </span>
                  </div>
                  <div className={s.select_card_cont}>
                    <div>
                      <img src="/Map Pin (1).png" alt="" />
                      <p>강남지사</p>
                    </div>
                    <div>
                      <img src="/Phone.png" alt="" />
                      <p>1577-1000</p>
                    </div>
                    <div>
                      <img src="/Printer (4).png" alt="" />
                      <p>02-234-5678</p>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    backgroundColor: "#FFFBEB",
                    border: "1px solid #FDE68A",
                  }}
                >
                  <div
                    className={s.select_card_head}
                    style={{ borderBottom: "1px solid #FDE68A" }}
                  >
                    <span style={{ backgroundColor: "#D97706" }}></span>
                    <p style={{ color: "#D97706" }}>근로복지공단</p>
                    <span
                      className={s.card_span}
                      style={{ color: "#D97706", backgroundColor: "#FEF9C3" }}
                    >
                      팩스 가능
                    </span>
                  </div>
                  <div className={s.select_card_cont}>
                    <div>
                      <img src="/Map Pin (1).png" alt="" />
                      <p>서울남부지사</p>
                    </div>
                    <div>
                      <img src="/Phone.png" alt="" />
                      <p>1588-0075</p>
                    </div>
                    <div>
                      <img src="/Printer (4).png" alt="" />
                      <p>02-345-6789</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={s.modal_emp} style={{ backgroundColor: "white" }}>
              <div className={s.modal_select_head}>
                <span></span> <p>팩스 전송 설정</p>
              </div>
              <div className={s.modal_fax}>
                <div className={s.modal_fax_cont}>
                  <label>수신 팩스번호</label>
                  <select>
                    <option value="기관 선택 후 자동입력">
                      기관 선택 후 자동입력
                    </option>
                    <option value="서울 강남지사">서울 강남지사</option>
                    <option value="강남지사">강남지사</option>
                    <option value="서울 남부지사">서울 남부지사</option>
                  </select>
                </div>
                <div className={s.modal_fax_cont}>
                  <label>발신 팩스번호</label>
                  <div className={s.modal_fax_cont_num}>02-000-0000</div>
                </div>
              </div>
              <div className={s.modal_fax_info}>
                <img src="/Info1.png" alt="" />
                <p>
                  팩스 전송 시 신고서는 PDF로 자동 변환되어 해당 기관 팩스로
                  즉시 발송됩니다.
                </p>
              </div>
            </div>
            <div className={s.modal_alert}>
              <img src="/Info (1).png" alt="" />
              <div className={s.modal_alert_text}>
                <p>신고기한 주의</p>
                <span>
                  취득신고 기한은 2025.07.14(월)입니다. 기한 초과 시 과태료(최대
                  10만원)가 부과될 수 있습니다.
                </span>
              </div>
            </div>
            <div className={s.modal_footer}>
              <div className={s.modal_footer_text}>
                <p
                  style={{
                    display: "flex",
                    color: "#1D4ED8",
                    fontWeight: "bold",
                    fontSize: "12px",
                    backgroundColor: "#EFF6FF",
                    height: "23px",
                    lineHeight: "23px",
                    borderRadius: "50px",
                    marginTop: "17px",
                    padding: "0 14px",
                  }}
                >
                  <img
                    src="/File Text (3).png"
                    alt=""
                    style={{ marginTop: "5px", marginRight: "2px" }}
                  />
                  3종 신고서 선택됨
                </p>
                {/* <span
              style={{
                width: "1px",
                height: "16px",
                backgroundColor: "#E5E7EB",
                margin: "20px 8px 0 8px",
              }}
            ></span>
            <p
              style={{ color: "#EF4444", fontSize: "12px", lineHeight: "58px" }}
            >
              *{" "}
              <span style={{ color: "#9CA3AF" }}>
                필수항목 확인 후 출력하세요
              </span>
            </p> */}
              </div>
              <div className={s.modal_footer_btn}>
                <button className={s.fax_transport}>
                  <img src="/Send.png" alt="" />
                  <p>팩스 전송</p>
                </button>
                <button
                  className={s.fax_print}
                  style={{ backgroundColor: "#1B3A6B", color: "white" }}
                >
                  <img src="/Printer.png" alt="" />
                  <p>신고서 출력</p>
                </button>
                <button className={s.fax_close}>
                  <img src="/X.png" alt="" />
                  <p>닫기</p>
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
