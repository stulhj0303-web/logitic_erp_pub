import style from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import Appli from "@/component/common/Appli";
import AppliDB from "@/component/common/AppliDB";

export default function page() {
  return (
    <div className={style.container}>
      <Nav />

      <div className={style.main}>
        <Aside
          dummy={[
            {
              titleInfo: { iconPath: "/User.png", titleName: "인사정보" },
              submenuList: [
                { name: "인사정보등록", path: "/info/appointment" },
                { name: "사원명수/인사기록카드" },
                { name: "인사발령등록", path: "/info/register" },
              ],
            },
            {
              titleInfo: {
                iconPath: "/Heart Handshake.png",
                titleName: "경조비관리",
              },
              submenuList: [
                { name: "경조비신청", path: "/money/application" },
                { name: "경조비신청현황" },
              ],
            },
            {
              titleInfo: {
                iconPath: "/File Text.png",
                titleName: "증명서관리",
              },
              submenuList: [{ name: "증명서발급", path: "/certificate" }],
            },
          ]}
        />

        <div className={style.InfoMain}>
          <div className={style.mainContainer}>
            <Header
              headList={[
                { headli1: "인사관리" },
                { headli2: "경조비관리" },
                { headli3: "경조비신청" },
                {
                  headinfo:
                    "경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다.",
                },
              ]}
            />

            <Appli />

            <div className={style.database}>
              <img src="/Clock (1).png" alt="" />
              <span>나의 경조비 신청 현황</span>
            </div>
            <AppliDB />
          </div>
        </div>
      </div>
    </div>
  );
}
