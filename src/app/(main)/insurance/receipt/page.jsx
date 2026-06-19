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
    </div>
  );
}
