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
  const [downOpen, setDownOpen] = useState(false);
  // const [date, setDate] = useState(new Date());

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
                { headli3: "급여조회" },
                {
                  headinfo:
                    "연도별 급여 수령 내역 및 월별 명세서를 조회합니다.",
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
              <button className={s.plus}>
                <img src="/Printer.png" />
                전체 명세서 출력
              </button>
            </div>
            <div className={s.status_head}>
              <img src="/Chart Bar.png" alt="" />
              <span>2025년 월별 실지급액 추이</span>
              <p>2025년</p>
              <div>
                <ul className={s.head_list}>
                  <li>
                    <span style={{ backgroundColor: "#1B3A6B" }}></span>실지급액
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#3B82F6" }}></span>이번달
                    (7월)
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#E2E8F0" }}></span>미지급
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.search_cont}>
              <img src="/Bar Chart.png" alt="" />
              <div className={s.search_cont_box}>
                <div
                  className={s.search_box}
                  style={{
                    backgroundColor: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    width: "122px",
                  }}
                >
                  <p style={{ color: "#3B82F6" }}>2025년 누적</p>
                  <span style={{ color: "#1E40AF" }}>17,023,590</span>
                  <p style={{ color: "#3B82F6" }}>원</p>
                </div>
                <div
                  className={s.search_box}
                  style={{
                    backgroundColor: "#F0FDF4",
                    border: "1px solid #BBF7D0",
                    width: "97px",
                  }}
                >
                  <p style={{ color: "#16A34A" }}>최고 지급월</p>
                  <span style={{ color: "#15803D" }}>5월</span>
                  <p style={{ color: "#16A34A" }}>2,490,000원</p>
                </div>
                <div
                  className={s.search_box}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    width: "112px",
                  }}
                >
                  <p style={{ color: "#9CA3AF" }}>월 평균</p>
                  <span style={{ color: "#374151" }}>2,432,000</span>
                  <p style={{ color: "#9CA3AF" }}>원</p>
                </div>
              </div>
            </div>
            <div className={s.cal_box}>
              <label>조회연도</label>
              <div className={s.search_day}>
                <button className={s.left}>
                  <img src="/Chevron Left (1).png" alt="" />
                </button>
                <div>
                  <img src="/Calendar (2).png" alt="" />
                  <p>2025년</p>
                </div>
                <button className={s.right}>
                  <img src="/Chevron Right (1).png" alt="" />
                </button>
              </div>
              <label>조회대상</label>
              <div className={s.search_user}>
                <span>박</span>
                <p>박민준 (본인)</p>
                <img src="/Lock.png" alt="" />
              </div>
              <div className={s.search_dept}>
                <img src="/Building 2.png" alt="" />
                <p>개발팀 · 대리</p>
              </div>
              <div className={s.search_year}>
                <button className={s.year_btn1}>2023</button>
                <button className={s.year_btn2}>2024</button>
                <button className={s.year_btn3}>2025</button>
              </div>
            </div>

            <div className={s.status_head}>
              <img src="/Table.png" alt="" />
              <span>2025년 월별 급여 수령 이력</span>
              <div>
                <p
                  className={s.receipt_span}
                  style={{ color: "#2563EB", fontWeight: "bold" }}
                >
                  7개월 조회
                </p>
                <ul className={s.head_list}>
                  <li>
                    <span style={{ backgroundColor: "#DBEAFE" }}></span>지급
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#FEE2E2" }}></span>공제
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#D1FAE5" }}></span>실지급
                  </li>
                </ul>
              </div>
            </div>
            <ul className={s.payStatus_cont}>
              <li>지급연월</li>
              <li>기본급</li>
              <li>수당합계</li>
              <li>지급소계</li>
              <li>공제합계</li>
              <li>실지급액</li>
              <li>지급일</li>
              <li>상태</li>
              <li>명세서</li>
            </ul>
            <ul className={s.status_sum}>
              <li>
                <img src="/Sigma.png" alt="" />
                <span>7개월 합계</span>
              </li>
              <li>24,500,000</li>
              <li>2,660,000</li>
              <li>27,160,000</li>
              <li>3,136,410</li>
              <li>24,023,590</li>
              <li>-</li>
              <li>-</li>
              <li>-</li>
            </ul>

            <div className={s.status_result}>
              <p>2025년 1~7월 표시 · 8~12월 미지급</p>
              <span></span>
              <div className={s.result_span}>
                <img src="/Trending Up (1).png" alt="" />
                <p>월평균 실지급 3,431,942원</p>
              </div>

              <div className={s.result_button}>
                <button className={s.left}>
                  <img src="/Chevron Left.png" alt="" />
                </button>
                <span>1</span>
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
    </div>
  );
}
