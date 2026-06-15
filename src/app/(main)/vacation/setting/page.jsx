import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";

export default function page() {
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
              titleInfo: { iconPath: "/Plane.png", titleName: "출장관리" },
              submenuList: [
                { name: "출장신청" },
                { name: "출장정산" },
                { name: "출장사용현황" },
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
                { headli3: "휴가일수설정" },
                {
                  headinfo:
                    "연도별 휴가 정책 및 직급별 기준 일수를 설정합니다.",
                },
              ]}
            />

            <div className={s.work_search}>
              <div className={s.search_cont}>
                <div className={s.search_day}>
                  <button className={s.left}>
                    <img src="/Chevron Left (1).png" alt="" />
                  </button>
                  <span>2025년</span>
                  <button className={s.right}>
                    <img src="/Chevron Right (1).png" alt="" />
                  </button>
                </div>
                <div className={s.search_date}>
                  <img src="/Info.png" alt="" />
                  <span>화계연도 기준 (1월~12월)</span>
                </div>
                <button className={s.setting_btn}>
                  <img src="/Copy.png" alt="" />
                  <span>전년도 설정 복사</span>
                </button>
              </div>
            </div>
            <div className={s.vacation_chart}>
              <div className={s.chart_day}>
                <div className={s.chart_day_header}>
                  <img src="/Layers.png" alt="" />
                  <span>직급별 기준 휴가일수</span>
                  <button className={s.chart_row_add}>
                    <img src="/Plus (2).png" alt="" />
                    <span>행 추가</span>
                  </button>
                </div>
                <ul className={s.chart_list}>
                  <li>직급</li>
                  <li>기준 일수</li>
                  <li>최대 이월</li>
                  <li>반차 허용</li>
                  <li>비고</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>임원</li>
                  <li>
                    <div>25</div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>10</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input
                        role="switch"
                        type="checkbox"
                        id="toggle"
                        checked
                      />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>최고 직급 기준</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>부장</li>
                  <li>
                    <div>21</div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>10</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input
                        role="switch"
                        type="checkbox"
                        id="toggle"
                        checked
                      />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>-</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>차장</li>
                  <li>
                    <div>18</div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>5</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input
                        role="switch"
                        type="checkbox"
                        id="toggle"
                        checked
                      />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>-</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>과장</li>
                  <li>
                    <div>15</div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>5</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input
                        role="switch"
                        type="checkbox"
                        id="toggle"
                        checked
                      />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>-</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>대리</li>
                  <li>
                    <div>12</div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>5</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input
                        role="switch"
                        type="checkbox"
                        id="toggle"
                        checked
                      />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>-</li>
                </ul>
                <ul
                  className={s.chart_list}
                  style={{ color: "black", backgroundColor: "white" }}
                >
                  <li>사원</li>
                  <li>
                    <div
                      style={{ border: "1px solid #2563EB", color: "#2563EB" }}
                    >
                      11
                    </div>
                  </li>
                  <li>
                    <div style={{ fontWeight: "400" }}>0</div>
                  </li>
                  <li className={s.chart_toggle}>
                    <label className={s.work_toggle}>
                      <input role="switch" type="checkbox" id="toggle" />
                    </label>
                  </li>
                  <li className={s.chart_list_last}>신입 기준</li>
                </ul>
              </div>
              <div className={s.chart_box}>
                <div className={s.chart_politic}>
                  <div className={s.chart_day_header}>
                    <img src="/Star.png" alt="" />
                    <span>특별 휴가 정책</span>
                  </div>
                  <div className={s.chart_poli_cont}>
                    <div>
                      <label>결혼 휴가</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                    <div>
                      <label>출산 휴가 (여)</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <label>배우자 출산 휴가</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <label>부모 사망</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <label>배우자/자녀 사망</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                    <div style={{ marginTop: "12px" }}>
                      <label>형제/자매 사망</label>
                      <input type="text" />
                      <span>일</span>
                    </div>
                  </div>
                </div>
                <div className={s.chart_year}>
                  <div className={s.chart_day_header}>
                    <img src="/Trending Up.png" alt="" />
                    <span>근속 가산 일수</span>
                  </div>
                  <div className={s.year_cont}>
                    <div className={s.year_info}>
                      <img src="/Info (1).png" alt="" />
                      <span>
                        근속 2년 초과 시 매 2년마다 1일씩 최대 25일까지
                        가산됩니다.
                      </span>
                    </div>
                    <ul className={s.year_chart}>
                      <li>근속 연수</li>
                      <li>가산 일수</li>
                      <li>최종 일수 (사원 기준)</li>
                    </ul>
                    <ul className={s.year_chart_cont}>
                      <li>1년 미만</li>
                      <li style={{ fontWeight: "400", color: "#9CA3AF" }}>
                        +0일
                      </li>
                      <li>11일</li>
                    </ul>
                    <ul className={s.year_chart_cont}>
                      <li>1년 이상 ~ 3년 미만</li>
                      <li>+1일</li>
                      <li>12일</li>
                    </ul>
                    <ul className={s.year_chart_cont}>
                      <li>3년 이상 ~ 5년 미만</li>
                      <li>+2일</li>
                      <li>13일</li>
                    </ul>
                    <ul className={s.year_chart_cont}>
                      <li>5년 이상 ~ 10년 미만</li>
                      <li>+3일</li>
                      <li>14일</li>
                    </ul>
                    <ul className={s.year_chart_cont}>
                      <li>10년 이상</li>
                      <li>+5일</li>
                      <li>16일</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
