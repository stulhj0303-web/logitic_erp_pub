import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";

export default function page() {
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
                { headli2: "4대보험관리" },
                { headli3: "4대보험요율표설정" },
                {
                  headinfo:
                    "연도별 4대보험 요율을 설정하고 직원별 예상 보험료를 시뮬레이션합니다.",
                },
              ]}
            />

            <div className={s.setting_search}>
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
              <p className={s.setting_span}>
                <span></span>2025년 요율 적용중
              </p>
              <p className={s.setting_edit}>
                <img src="/Clock (3).png" alt="" />
                <span>최종수정: 2025.01.01 · 홍길동</span>
              </p>
              <div className={s.setting_btn}>
                <button className={s.set_btn1}>2023</button>
                <button className={s.set_btn2}>2024</button>
                <button className={s.set_btn3}>2025</button>
              </div>
            </div>

            <div className={s.app_card}>
              <div className={s.appcard_list}>
                <div className={s.appcard_head}>
                  <span></span>
                  <p>국민연금</p>
                  <div className={s.apphead_per} style={{ color: "#1B3A6B" }}>
                    9.0%
                  </div>
                </div>
                <div className={s.appcard_cont}>
                  <div className={s.appcard_info}>
                    <img src="/Info.png" alt="" />
                    <span>표준소득월액 기준 · 상한 590만원 / 하한 37만원</span>
                  </div>
                  <div className={s.appcard_user}>
                    <div className={s.appcard_emp}>
                      <div className={s.appcard_text}>
                        <span></span>
                        <p>근로자</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div className={s.appcard_box1}>4.5</div>
                        <div className={s.appcard_box2}>%</div>
                      </div>
                      <div className={s.appcard_input}>
                        <input type="text" placeholder="예: 3,500,000원 기준" />
                      </div>
                    </div>
                    <div className={s.appcard_bus}>
                      <div className={s.appcard_text}>
                        <span></span>
                        <p>사업자</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div className={s.appcard_box1}>4.5</div>
                        <div className={s.appcard_box2}>%</div>
                      </div>
                      <div className={s.appcard_input}>
                        <input type="text" placeholder="예: 3,500,000원 기준" />
                      </div>
                    </div>
                  </div>
                  <div className={s.appcard_sum}>
                    <img src="/Sigma (1).png" alt="" />
                    <p>합산 부담률</p>
                    <span>9.0%</span>
                  </div>
                </div>
              </div>

              <div className={s.appcard_list}>
                <div
                  className={s.appcard_head}
                  style={{
                    backgroundImage:
                      "linear-gradient(-170deg, #0F766E 25%, #14B8A6 75%)",
                  }}
                >
                  <span></span>
                  <p>건강보험</p>
                  <div className={s.apphead_per} style={{ color: "#0F766E" }}>
                    7.09%
                  </div>
                </div>
                <div className={s.appcard_cont}>
                  <div
                    className={s.appcard_info}
                    style={{ backgroundColor: "#F0FDFA", height: "39px" }}
                  >
                    <img
                      src="/Info (2).png"
                      alt=""
                      style={{ marginTop: "15px" }}
                    />
                    <span
                      style={{
                        color: "#0F766E",
                        lineHeight: "15px",
                        padding: "5px 0 0 5px",
                      }}
                    >
                      보수월액 기준 · 상한 110,332,800원 / 하한 279,360원
                    </span>
                  </div>
                  <div className={s.appcard_user}>
                    <div className={s.appcard_emp}>
                      <div className={s.appcard_text}>
                        <span style={{ backgroundColor: "#14B8A6" }}></span>
                        <p>근로자</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div
                          className={s.appcard_box1}
                          style={{
                            border: "1px solid #14B8A6",
                            color: "#0F766E",
                          }}
                        >
                          3.545
                        </div>
                        <div
                          className={s.appcard_box2}
                          style={{
                            border: "1px solid #14B8A6",
                            borderLeft: "0",
                            color: "#0F766E",
                            backgroundColor: "#F0FDFA",
                          }}
                        >
                          %
                        </div>
                      </div>
                      <div className={s.appcard_input}>
                        <input
                          type="text"
                          placeholder="예: 3,500,000원 기준"
                          style={{ color: "#0F766E" }}
                        />
                      </div>
                    </div>
                    <div className={s.appcard_bus}>
                      <div className={s.appcard_text}>
                        <span></span>
                        <p>사업자</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div className={s.appcard_box1}>3.545</div>
                        <div className={s.appcard_box2}>%</div>
                      </div>
                      <div className={s.appcard_input}>
                        <input type="text" placeholder="예: 3,500,000원 기준" />
                      </div>
                    </div>
                  </div>
                  <div className={s.appcard_per}>
                    <div className={s.appcard_per_head}>
                      <span></span>
                      <p>장기요양보험 (건강보험료의 %)</p>
                      <span className={s.head_per}>12.95%</span>
                    </div>
                    <div className={s.appcard_per_cont}>
                      <div className={s.appcard_per_box}>
                        <div className={s.appcard_per1}>12.95</div>
                        <div className={s.appcard_per2}>%</div>
                      </div>
                      <img src="/×.png" alt="" />
                      <div className={s.appcard_per_box}>
                        <div
                          className={s.appcard_per1}
                          style={{
                            border: "1px solid #D1D5DB",
                            color: "black",
                          }}
                        >
                          12.95
                        </div>
                        <div
                          className={s.appcard_per2}
                          style={{
                            color: "black",
                            backgroundColor: "#F1F5F9",
                            border: "1px solid #D1D5DB",
                            borderLeft: "0",
                          }}
                        >
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={s.appcard_sum}
                    style={{ backgroundColor: "#F0FDFA" }}
                  >
                    <img src="/Sigma (2).png" alt="" />
                    <p>합산 부담률 (장기요양 포함)</p>
                    <span style={{ color: "#0F766E" }}>7.09%</span>
                  </div>
                </div>
              </div>
              <div className={s.appcard_list}>
                <div
                  className={s.appcard_head}
                  style={{
                    backgroundImage:
                      "linear-gradient(-170deg, #92400E 25%, #D97706 75%)",
                  }}
                >
                  <span></span>
                  <p>국민연금</p>
                  <div className={s.apphead_per} style={{ color: "#92400E" }}>
                    2.05%
                  </div>
                </div>
                <div className={s.appcard_cont}>
                  <div
                    className={s.appcard_info}
                    style={{ backgroundColor: "#FFFBEB" }}
                  >
                    <img src="/Info (1).png" alt="" />
                    <span style={{ color: "#92400E" }}>
                      실업급여 기준 · 사업자는 규모별 추가부담
                    </span>
                  </div>
                  <div className={s.appcard_user}>
                    <div className={s.appcard_emp}>
                      <div className={s.appcard_text}>
                        <span style={{ backgroundColor: "#F59E0B" }}></span>
                        <p>근로자 (실업급여)</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div
                          className={s.appcard_box1}
                          style={{
                            border: "1px solid #FDE68A",
                            color: "#D97706",
                          }}
                        >
                          0.9
                        </div>
                        <div
                          className={s.appcard_box2}
                          style={{
                            border: "1px solid #FDE68A",
                            borderLeft: "0",
                            backgroundColor: "#FFFBEB",
                            color: "#D97706",
                          }}
                        >
                          %
                        </div>
                      </div>
                      <div className={s.appcard_input}>
                        <input
                          type="text"
                          placeholder="예: 3,500,000원 기준"
                          style={{ color: "#D97706" }}
                        />
                      </div>
                    </div>
                    <div className={s.appcard_bus}>
                      <div className={s.appcard_text}>
                        <span></span>
                        <p>사업자 (실업+안정)</p>
                      </div>
                      <div className={s.appcard_box}>
                        <div className={s.appcard_box1}>1.15</div>
                        <div className={s.appcard_box2}>%</div>
                      </div>
                      <div className={s.appcard_input}>
                        <input type="text" placeholder="예: 3,500,000원 기준" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={s.appcard_sum}
                    style={{ backgroundColor: "#FFFBEB" }}
                  >
                    <img src="/Sigma (3).png" alt="" />
                    <p>합산 부담률</p>
                    <span style={{ color: "#D97706" }}>2.05%</span>
                  </div>
                </div>
              </div>
              <div className={s.appcard_list}>
                <div
                  className={s.appcard_head}
                  style={{
                    backgroundImage:
                      "linear-gradient(-170deg, #991B1B 25%, #DC2626 75%)",
                  }}
                >
                  <span></span>
                  <p>국민연금</p>
                  <div className={s.apphead_per} style={{ color: "#991B1B" }}>
                    업종별
                  </div>
                </div>
                <div className={s.appcard_cont}>
                  <div
                    className={s.appcard_info}
                    style={{ backgroundColor: "#FFF5F5" }}
                  >
                    <img src="/Info (3).png" alt="" />
                    <span style={{ color: "#991B1B" }}>
                      실업급여 기준 · 사업자는 규모별 추가부담
                    </span>
                  </div>
                  <div className={s.appcard_cont4}>
                    <div className={s.appcard_cont4_head}>
                      <span></span>
                      <p>근로자 부담</p>
                    </div>
                    <div className={s.appcard_not}>
                      <img src="/Minus.png" alt="" />
                      <p>해당없음 (근로자 부담 없음)</p>
                    </div>
                  </div>
                  <div className={s.appcard_cont4}>
                    <div className={s.appcard_cont4_head}>
                      <span style={{ backgroundColor: "#DC2626" }}></span>
                      <p style={{ color: "black", fontWeight: "bold" }}>
                        사업자 (업종별 적용)
                      </p>
                    </div>
                    <div className={s.appcard_business}>
                      <div className={s.appcard_not1}>1.43</div>
                      <div className={s.appcard_not2}>%</div>
                    </div>
                    <div className={s.appcard_ex4}>
                      <p>예: 3,500,000원 기준</p>
                      <span>50,050원</span>
                    </div>
                    <div className={s.appcard_job}>
                      <img src="/Building 2 (1).png" alt="" />
                      <p>현재 업종:</p>
                      <span>IT서비스업 (1.43%)</span>
                    </div>
                    <div
                      className={s.appcard_sum}
                      style={{ backgroundColor: "#FFF5F5" }}
                    >
                      <img src="/Sigma (4).png" alt="" />
                      <p>사업자 전액 부담</p>
                      <span style={{ color: "#DC2626" }}>1.43%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.summary}>
              <div className={s.summary_text}>
                <img src="/Calculator (2).png" alt="" />
                <p>2025년 4대보험 합산 요율 요약</p>
              </div>
              <div className={s.summary_box}>
                <div className={s.summary_box1}>
                  <div className={s.summary_box_text}>
                    <p>근로자 합계</p>
                    <span>8.945%</span>
                  </div>
                  <div className={s.summary_box_info}>
                    <p>국민연금 4.5% · 건강+장기 3.545%+α</p>
                    <span>고용 0.9%</span>
                  </div>
                </div>
                <p className={s.plus}>+</p>
                <div className={s.summary_box1}>
                  <div className={s.summary_box_text}>
                    <p>사업자 합계</p>
                    <span style={{ color: "#FCD34D" }}>10.635%</span>
                  </div>
                  <div className={s.summary_box_info}>
                    <p>국민연금 4.5% · 건강+장기 3.545%+α</p>
                    <span>고용 1.15% · 산재 1.43%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.status_head}>
              <img src="/Calculator.png" alt="" />
              <span>직원별 예상 보험료 시뮬레이션 (2025년 기준)</span>
              <div>
                <p
                  className={s.receipt_span}
                  style={{ color: "#2563EB", fontWeight: "bold" }}
                >
                  총 8명
                </p>
                <ul className={s.head_list}>
                  <li>
                    <span style={{ backgroundColor: "#DBEAFE" }}></span>근로자
                    부담
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#EDE9FE" }}></span>사업자
                    부담
                  </li>
                </ul>
              </div>
            </div>
            <ul className={s.payStatus_cont}>
              <li>사원번호</li>
              <li>성명</li>
              <li>기준보수</li>
              <li>국민연금</li>
              <li>건강+장기</li>
              <li>고용보험</li>
              <li>근로자계</li>
              <li>국민연금</li>
              <li>건강+장기</li>
              <li>고용보험</li>
              <li>산재보험</li>
              <li>사업자계</li>
            </ul>
            <ul className={s.status_sum}>
              <li>
                <img src="/Sigma.png" alt="" />
                <span>합계 (8명)</span>
              </li>
              <li>29,300,000</li>
              <li>1,318,500</li>
              <li>1,319,110</li>
              <li>263,700</li>
              <li>3,408,060</li>
              <li>1,318,500</li>
              <li>1,319,110</li>
              <li>336,950</li>
              <li>418,990</li>
              <li>4,219,890</li>
            </ul>
            <div className={s.status_result}>
              <p>8명 기준 월 예상 보험료 합계</p>
              <span></span>
              <div className={s.result_span}>
                <img src="/Banknote (5).png" alt="" />
                <p>총 부담 (근로자+사업자)</p>
                <p className={s.p_css}>7,627,950원</p>
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
    </div>
  );
}
