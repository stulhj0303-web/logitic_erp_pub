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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
