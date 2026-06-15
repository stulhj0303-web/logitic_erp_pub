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
                { headli2: "휴가관리" },
                { headli3: "휴가사용현황" },
                { headinfo: "전체 직원의 연도별 휴가 사용 현황을 조회합니다." },
              ]}
            />

            <ul className={s.appoint_card}>
              <li>
                <p>대상 인원</p>
                <span>8명</span>
              </li>
              <li>
                <p>평균 부여일수</p>
                <span>16.1일</span>
              </li>
              <li>
                <p>평균 사용일수</p>
                <span>10.4일</span>
              </li>
              <li>
                <p>평균 잔여일수</p>
                <span>5.6일</span>
              </li>
              <li>
                <p>잔여 3일 이하</p>
                <span>3명</span>
              </li>
              <li>
                <p>휴가 미사용</p>
                <span>0명</span>
              </li>
            </ul>

            <div className={s.status_search}>
              <div>
                <label>기준연도</label>
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
              <div>
                <label>정렬</label>
                <select>
                  <option value="잔여일수 오름차순">잔여일수 오름차순</option>
                  <option value="잔여일수 내림차순">잔여일수 내림차순</option>
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
              <div className={s.status_info}>
                <img src="/Alert Circle (1).png" alt="" />
                <span>잔여 3일 이하 경고</span>
              </div>
            </div>

            <div className={s.status_head}>
              <img src="/Table.png" alt="" />
              <span>직원별 휴가 사용 현황 (2025년)</span>
              <div>
                <p
                  className={s.receipt_span}
                  style={{ color: "#2563EB", fontWeight: "bold" }}
                >
                  총 8명
                </p>
                <ul className={s.head_list}>
                  <li>
                    <span style={{ backgroundColor: "#DBEAFE" }}></span>사용일수
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#BBF7D0" }}></span>잔여일수
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#FECACA" }}></span>3일 이하
                    경고
                  </li>
                </ul>
              </div>
            </div>

            <ul className={s.status_title}>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>사원번호</li>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>성명</li>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>부서</li>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>직급</li>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>총 부여</li>
              <li>
                <p style={{ fontWeight: "bold", color: "#1D4ED8" }}>연차</p>
                <span style={{ fontWeight: "lighter", color: "#93C5FD" }}>
                  사용
                </span>
              </li>
              <li>
                <p style={{ fontWeight: "bold", color: "#0369A1" }}>반차</p>
                <span style={{ fontWeight: "lighter", color: "#7DD3FC" }}>
                  사용
                </span>
              </li>
              <li>
                <p style={{ fontWeight: "bold", color: "#DC2626" }}>병가</p>
                <span style={{ fontWeight: "lighter", color: "#FCA5A5" }}>
                  사용
                </span>
              </li>
              <li>
                <p style={{ fontWeight: "bold", color: "#D97706" }}>특별휴가</p>
                <span style={{ fontWeight: "lighter", color: "#FCD34D" }}>
                  사용
                </span>
              </li>
              <li>
                <p style={{ fontWeight: "bold", color: "#6B7280" }}>기타</p>
                <span style={{ fontWeight: "lighter", color: "#9CA3AF" }}>
                  사용
                </span>
              </li>
              <li style={{ fontWeight: "bold", color: "#374151" }}>총 사용</li>
              <li style={{ fontWeight: "bold", color: "#15803D" }}>잔여일수</li>
              <li style={{ fontWeight: "bold", color: "#6B7280" }}>사용률</li>
            </ul>

            <ul className={s.status_sum}>
              <li>
                <img src="/Sigma.png" alt="" />
                <span>합계 / 평균</span>
              </li>
              <li>120일</li>
              <li>66일</li>
              <li>4일</li>
              <li>2일</li>
              <li>8일</li>
              <li>-</li>
              <li>80일</li>
              <li>
                40일
                <p
                  style={{
                    fontWeight: "lighter",
                    color: "#16A34A",
                    fontSize: "10px",
                  }}
                >
                  평균 5.0일
                </p>
              </li>
              <li></li>
            </ul>

            <div className={s.status_result}>
              <p>총 8명</p>
              <span className={s.result_hr}></span>
              <div className={s.result_info}>
                <img src="/Alert Circle (1).png" alt="" />
                <span>잔여 3일 이하 3명 (박민준·정수빈·오준혁)</span>
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
    </div>
  );
}
