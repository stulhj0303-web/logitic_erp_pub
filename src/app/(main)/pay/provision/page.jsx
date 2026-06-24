"use client";
import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import { useEffect, useState } from "react";
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
                { headli3: "급여지급" },
                { headinfo: "월별 직원 급여 지급 내역을 관리하고 확정합니다." },
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
                /Printer (3).png"
                />
                급여명세서 출력
              </button>
              <button className={s.plus}>
                <img src="/Check Check (3).png" />
                급여확정
              </button>
            </div>

            <ul className={s.appoint_card}>
              <li>
                <p style={{ display: "flex", marginLeft: "110px" }}>
                  <img src="/Trending Up (1).png" alt="" />
                  지급합계
                </p>
                <span>28,640,000원</span>
                <p className={s.lighter} style={{ color: "#60A5FA" }}>
                  전월 대비 +240,000원
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "110px" }}>
                  <img src="/Trending Down.png" alt="" />
                  공제합계
                </p>
                <span>4,128,000원</span>
                <p className={s.lighter} style={{ color: "#E11D48" }}>
                  전월 대비 +34,000원
                </p>
              </li>
              <li>
                <p style={{ display: "flex", marginLeft: "100px" }}>
                  <img src="/Banknote (4).png" alt="" />
                  실지급 합계
                </p>
                <span>24,512,000원</span>
                <p className={s.lighter}>대상인원 8명</p>
              </li>
              <li>
                <p
                  style={{
                    display: "flex",
                    marginLeft: "110px",
                    marginTop: "10px",
                  }}
                >
                  <img src="/Clock (5).png" alt="" />
                  지급상태
                </p>
                <div>
                  <span style={{ color: "#CA8A04" }}>미확정 8건</span>
                  <p style={{ color: "#16A34A" }}>확정 0건</p>
                </div>
                <p className={s.lighter} style={{ color: "#9CA3AF" }}>
                  2025년 7월분
                </p>
              </li>
            </ul>

            <div className={s.status_search}>
              <div>
                <div className={s.search_day}>
                  <button className={s.left}>
                    <img src="/Chevron Left (1).png" alt="" />
                  </button>
                  <div>
                    <img src="/Calendar (2).png" alt="" />
                    <p>2025년 7월</p>
                  </div>
                  <button className={s.right}>
                    <img src="/Chevron Right (1).png" alt="" />
                  </button>
                </div>
              </div>
              <div>
                <label>부서</label>
                <select>
                  <option value="전체 부서">전체 부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
              </div>

              <input type="text" placeholder="사원명 검색" />
              <button className={s.search_btn}>
                <img src="/Search (1).png" alt="" />
                <span>조회</span>
              </button>
              <button className={s.rotate_btn}>
                <img src="/Rotate Ccw.png" alt="" />
                <span>초기화</span>
              </button>
            </div>

            <div className={s.status_head}>
              <img src="/Table.png" alt="" />
              <span>2025년 7월 급여 지급 내역</span>
              <div>
                <ul className={s.head_list}>
                  <li>
                    <span style={{ backgroundColor: "#DBEAFE" }}></span>지급항목
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#FEE2E2" }}></span>공제항목
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#DCFCE7" }}></span>실지급
                  </li>
                </ul>
              </div>
            </div>

            <ul className={s.payinfo_cont}>
              <li>
                <input type="checkbox" checked />
              </li>
              <li>사원번호</li>
              <li>성명</li>
              <li>부서</li>
              <li>기본급</li>
              <li>식대</li>
              <li>교통비</li>
              <li>야근수당</li>
              <li>지급소계</li>
              <li>국민연금</li>
              <li>건강보험</li>
              <li>고용보험</li>
              <li>소득세</li>
              <li>공제소계</li>
              <li>실지급액</li>
            </ul>

            <ul className={s.status_sum}>
              <li>
                <img src="/Sigma.png" alt="" />
                <span>합계 (8명)</span>
              </li>
              <li>25,760,000</li>
              <li>1,600,000</li>
              <li>1,000,000</li>
              <li>1,280,000</li>
              <li>28,640,000</li>
              <li>1,152,000</li>
              <li>1,018,800</li>
              <li>277,260</li>
              <li>720,000</li>
              <li>4,128,060</li>
              <li>24,511,940</li>
            </ul>

            <div className={s.status_result}>
              <p>총 8명 · 2025년 7월분 급여</p>
              <span></span>
              <div className={s.result_span}>
                <img src="/Clock (5).png" alt="" />
                <p>미확정 8건 - 급여확정 후 명세서 발송 가능</p>
              </div>

              <div className={s.result_button}>
                <button className={s.left}>
                  <img src="/Chevron Left.png" alt="" />
                </button>
                <span>1</span>
                <span
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    color: "#6B7280",
                  }}
                >
                  2
                </span>
                <button className={s.right}>
                  <img
                    src="/Chevron Right.png"
                    alt=""
                    style={{ marginLeft: "8px" }}
                  />
                </button>
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[560px]">
          <DialogHeader>
            <DialogTitle>
              {" "}
              <div className={s.modal_header}>
                <img src="/Receipt Text (3).png" alt="" />
                <div className={s.modal_header_text}>
                  <span>급여명세서</span>
                  <p>Salary Statement</p>
                </div>
                <div className={s.modal_header_date}>2025년 7월분</div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className={s.modal_cont}>
            <div className={s.modal_company}>
              <img src="/Logo Mark.png" alt="" />
              <div className={s.modal_company_text}>
                <span>주식회사 HRSystem</span>
                <p>사업자등록번호: 123-45-67890 | 대표: 홍길동</p>
              </div>
              <p className={s.modal_company_p}>
                # PAY-2025-07-0008 | <img src="/Calendar (4).png" alt="" />
                2025.08.01
              </p>
            </div>
            <div className={s.modal_info}>
              <div className={s.modal_info_head}>
                <span></span>
                <p>수급자 정보</p>
              </div>
              <div className={s.modal_info_box}>
                <ul className={s.modal_info_list}>
                  <li>성명</li>
                  <li style={{ display: "flex" }}>
                    <span>박</span>
                    <p>박민준</p>
                  </li>
                  <li>사원번호</li>
                  <li>EMP-003</li>
                </ul>
                <ul className={s.modal_info_list}>
                  <li>부서</li>
                  <li>개발팀</li>
                  <li>직급</li>
                  <li>대리</li>
                </ul>
                <ul className={s.modal_info_list}>
                  <li>지급연월</li>
                  <li>2025.07 (7.25 지급)</li>
                  <li>근속연수</li>
                  <li>3년 11개월</li>
                </ul>
              </div>
            </div>
            <div className={s.modal_pay}>
              <ul className={s.modal_pay1}>
                <li
                  style={{
                    backgroundColor: "#EFF6FF",
                    borderBottom: " 1px solid #BFDBFE",
                    position: "relative",
                    borderRight: "1px solid #BFDBFE",
                  }}
                >
                  <img src="/Trending Up (4).png" alt="" />
                  <span>지급항목</span>
                  <p
                    style={{
                      position: "absolute",
                      right: "12px",
                      fontSize: "11px",
                      color: "#93C5FD",
                    }}
                  >
                    금액(원)
                  </p>
                </li>
                <li>
                  <p className={s.modal_pay1_circle}></p>
                  <p style={{ fontSize: "12px" }}>기본급</p>
                  <span style={{ position: "absolute", right: "12px" }}>
                    3,500,000
                  </span>
                </li>
                <li>
                  <p className={s.modal_pay1_circle}></p>
                  <p style={{ fontSize: "12px" }}>식대</p>
                  <span style={{ position: "absolute", right: "12px" }}>
                    200,000
                  </span>
                </li>
                <li>
                  <p className={s.modal_pay1_circle}></p>
                  <p style={{ fontSize: "12px" }}>교통비</p>
                  <span style={{ position: "absolute", right: "12px" }}>
                    150,000
                  </span>
                </li>
                <li>
                  <p className={s.modal_pay1_circle}></p>
                  <p style={{ fontSize: "12px" }}>야근수당</p>
                  <span style={{ position: "absolute", right: "12px" }}>
                    350,000
                  </span>
                </li>
                <li style={{ borderBottom: "1px solid #BFDBFE" }}>
                  <p className={s.modal_pay1_circle}></p>
                  <p style={{ fontSize: "12px" }}>직책수당</p>
                  <span style={{ position: "absolute", right: "12px" }}>-</span>
                </li>
                <li
                  style={{
                    backgroundColor: "#EFF6FF",
                    borderRight: "1px solid #BFDBFE",
                  }}
                >
                  <span>지급합계</span>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#1E40AF",
                      fontSize: "13px",
                    }}
                  >
                    4,200,000
                  </span>
                </li>
              </ul>
              <ul className={s.modal_pay1}>
                <li
                  style={{
                    backgroundColor: "#FFF0F0",
                    borderBottom: " 1px solid #FECACA",
                    position: "relative",
                    borderRight: "none",
                  }}
                >
                  <img src="/Trending Down.png" alt="" />
                  <span style={{ color: "#DC2626" }}>공제항목</span>
                  <p
                    style={{
                      position: "absolute",
                      right: "12px",
                      fontSize: "11px",
                      color: "#FCA5A5",
                    }}
                  >
                    금액(원)
                  </p>
                </li>
                <li style={{ borderRight: "none" }}>
                  <p className={s.modal_pay1_circle1}></p>
                  <p style={{ fontSize: "12px" }}>국민연금 (4.5%)</p>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#DC2626",
                    }}
                  >
                    157,500
                  </span>
                </li>
                <li style={{ backgroundColor: "#FFF8F8", borderRight: "none" }}>
                  <p className={s.modal_pay1_circle1}></p>
                  <p style={{ fontSize: "12px" }}>건강보험 (3.98%)</p>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#DC2626",
                    }}
                  >
                    139,300
                  </span>
                </li>
                <li style={{ borderRight: "none" }}>
                  <p className={s.modal_pay1_circle1}></p>
                  <p style={{ fontSize: "12px" }}>고용보험 (0.9%)</p>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#DC2626",
                    }}
                  >
                    37,800
                  </span>
                </li>
                <li style={{ backgroundColor: "#FFF8F8", borderRight: "none" }}>
                  <p className={s.modal_pay1_circle1}></p>
                  <p style={{ fontSize: "12px" }}>소득세</p>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#DC2626",
                    }}
                  >
                    88,000
                  </span>
                </li>
                <li
                  style={{
                    borderBottom: "1px solid #FECACA",
                    borderRight: "none",
                  }}
                >
                  <p className={s.modal_pay1_circle1}></p>
                  <p style={{ fontSize: "12px" }}>지방소득세 (10%)</p>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#DC2626",
                    }}
                  >
                    8,800
                  </span>
                </li>
                <li style={{ backgroundColor: "#FFF0F0" }}>
                  <span style={{ color: "#991B1B" }}>지급합계</span>
                  <span
                    style={{
                      position: "absolute",
                      right: "12px",
                      color: "#991B1B",
                      fontSize: "13px",
                    }}
                  >
                    4,200,000
                  </span>
                </li>
              </ul>
            </div>
            <div className={s.modal_krw}>
              <div className={s.modal_krw1}>
                <div className={s.modal_krw1_box}>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <span>
                      <img src="/Banknote (7).png" alt="" />
                    </span>
                    <p>실 지급액</p>
                  </div>
                  <p
                    style={{
                      color: "#60A5FA",
                      fontSize: "11px",
                      fontWeight: "normal",
                    }}
                  >
                    4,200,000 - 431,400
                  </p>
                </div>
                <div className={s.modal_krw1_text}>
                  <span>3,768,600</span>
                  <p>원 (KRW)</p>
                </div>
              </div>
              <div className={s.modal_krw2}>
                <span>
                  <img src="/Quote.png" alt="" />
                  <p>삼백칠십육만팔천육백원정 (₩3,768,600)</p>
                </span>
              </div>
              <div className={s.modal_krw3}>
                <div
                  className={s.modal_krw3_box1}
                  style={{ marginLeft: "50px" }}
                >
                  <img src="/Arrow Up.png" alt="" />
                  <p>지급 4,200,000원</p>
                </div>
                <span>-</span>
                <div className={s.modal_krw3_box1}>
                  <img src="/Arrow Down.png" alt="" />
                  <p style={{ color: "#FCA5A5" }}>공제 431,400원</p>
                </div>
                <span>=</span>
                <div
                  className={s.modal_krw3_box1}
                  style={{ backgroundColor: "white" }}
                >
                  <img src="/Check11.png" alt="" />
                  <p style={{ color: "#1B3A6B", fontWeight: "bold" }}>
                    실지급 3,768,600원
                  </p>
                </div>
              </div>
            </div>
            <div className={s.modal_month}>
              <div className={s.modal_month_title}>
                <img src="/Calendar Check.png" alt="" />
                <p>7월 근태 요약</p>
              </div>
              <ul className={s.modal_month_list}>
                <li>
                  <span style={{ backgroundColor: "#3B82F6" }}></span>{" "}
                  <p>출근 20일</p>
                </li>
                <li>
                  <span style={{ backgroundColor: "#16A34A" }}></span>{" "}
                  <p>연차 1일</p>
                </li>
                <li>
                  <span style={{ backgroundColor: "#7C3AED" }}></span>{" "}
                  <p>야근 7시간</p>
                </li>
                <li>
                  <span style={{ backgroundColor: "#EA580C" }}></span>{" "}
                  <p>지각 0회</p>
                </li>
              </ul>
            </div>
            <div className={s.modal_check}>
              <div className={s.modal_check_head}>
                <span></span>
                <p>확인 및 직인</p>
              </div>
              <div className={s.modal_check_cont}>
                <div className={s.modal_check_text}>
                  <p>위 금액을 급여로 지급함을 확인합니다.</p>
                  <p>지급일: 2025년 7월 25일</p>
                  <span>주식회사 HRSystem 대표이사 홍 길 동 (인)</span>
                </div>
                <img src="/Seal Circle.png" alt="" />
              </div>
              <div className={s.modal_alert}>
                <img src="/Circle Alert (1).png" alt="" />
                <p>
                  본 명세서는 전자문서로 발행되었으며 위변조 시 법적 처벌을 받을
                  수 있습니다.
                </p>
              </div>
            </div>
            <div className={s.modal_footer}>
              <div className={s.modal_footer_text}>
                <span>
                  <img src="/Shield Check (4).png" alt="" />
                  <p>전자문서 인증완료</p>
                </span>
                <p className={s.modal_footer_text_p}>CERT-2025-0089</p>
              </div>
              <div className={s.modal_footer_btn}>
                <button className={s.email_btn}>
                  <img src="/Mail (1).png" alt="" />
                  <p>이메일 발송</p>
                </button>
                <button className={s.print_btn}>
                  <img src="/Printer.png" alt="" />
                  <p>인쇄</p>
                </button>
                <button className={s.close_btn}>
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
