import style from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import Search1 from "@/component/common/Search1";
import FormInput from "@/component/common/FormInput";

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
                { headli2: "인사정보" },
                { headli3: "인사발령등록" },
                {
                  headinfo:
                    "사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.",
                },
              ]}
            />

            <div className={style.mainRtitle}>
              <button className={style.download}>
                <img
                  src="
                /Download.png"
                />
                PDF 다운로드
              </button>
              <button className={style.plus}>
                <img src="/Plus.png" />
                발령등록
              </button>
            </div>

            <Search1 />

            <FormInput />
          </div>
        </div>
      </div>
    </div>
  );
}
