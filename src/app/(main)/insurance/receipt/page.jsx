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
                { headli3: "4대보험취득/상실" },
                {
                  headinfo:
                    "입사·퇴사에 따른 4대보험 취득·상실 내역을 조회하고 신고서를 출력합니다.",
                },
              ]}
            />
            <div className={s.mainRtitle}>
              <button className={s.download}>
                <img
                  src="
                /Download.png"
                />
                PDF 다운로드
              </button>
              <button className={s.download}>
                <img
                  src="
                /File Text (2).png"
                />
                신고서 일괄출력
              </button>
              <button className={s.plus}>
                <img src="/Plus.png" />
                취득/상실 등록
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
    </div>
  );
}
