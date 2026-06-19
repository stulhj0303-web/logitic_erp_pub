"use client";
import style from "./page.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import Appli from "@/component/common/Appli";
import AppliDB from "@/component/common/AppliDB";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function page() {
  const [downOpen, setDownOpen] = useState(false);
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
              submenuList: [{ name: "경조비신청", path: "/money/application" }],
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

            <div className={style.mainRtitle}>
              <button
                className={style.download}
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
              <button className={style.plus}>
                <img src="/Plus.png" />
                신규신청
              </button>
            </div>

            <Appli />

            <div className={style.database}>
              <img src="/Clock (1).png" alt="" />
              <span>나의 경조비 신청 현황</span>
            </div>
            <AppliDB />
          </div>
        </div>
      </div>
      <Dialog open={downOpen} onOpenChange={setDownOpen}>
        <DialogContent className="w-[400px]" showCloseButton={false}>
          <div className={style.pdf_cont}>
            <span className={style.pdf_img}>
              <img src="/Download (1).png" alt="" />
            </span>
            <div className={style.pdf_text}>
              <p>PDF 다운로드</p>
              <span>
                선택한 데이터를 PDF 파일로 다운로드합니다. <br />
                계속 진행하시겠습니까?
              </span>
            </div>
            <div className={style.pdf_button}>
              <button className={style.pdf_cancel}>취소</button>
              <button className={style.pdf_select}>확인</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
