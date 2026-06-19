"use client";

import style from "./test.module.css";
import Nav from "@/component/common/Nav";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import Search from "@/component/common/Search";
import DB from "@/component/common/DB";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function page() {
  const [keyword, setKeyword] = useState();
  const [employees, setEmployees] = useState([]);
  const [registerInfo, setRegisterInfo] = useState();

  // 모달 오픈
  const [open, setOpen] = useState(false);
  const [downOpen, setDownOpen] = useState(false);

  // 다음 주소 찾기 api
  const openPostcode = () => {
    if (!window || window === undefined) return;

    const postCode = new window.daum.Postcode({
      oncomplete(data) {
        // 여기에 주소 검색 완료시에 데이터 내려옴.
        // setter를 이용해 설정하자
        const 우편번호 = data?.zonecode;
        const 주소 = data?.address;

        setRegisterInfo((prev) => ({
          ...prev,
          postCode: 우편번호,
          address: 주소,
        }));
      },
    });

    postCode.open();
  };

  const getEmployees = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });
    setEmployees(res.data.data);

    console.log(res.data.data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

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
                { headli2: "인사정보" },
                { headli3: "인사정보등록" },
                { headinfo: "직원의 인사정보를 등록하고 관리합니다." },
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
              <button
                className={style.plus}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <img src="/Plus.png" />
                신규등록
              </button>
            </div>

            <Search />

            <DB employees={employees} />
          </div>
        </div>
      </div>

      {/*모달*/}
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
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[600px]">
          <DialogHeader>
            <DialogTitle>
              <div className={style.modal_head}>
                <img src="/User Round Plus.png" alt="" />
                <p>인사정보등록</p>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div>
            <div className={style.modal_cont}>
              <div className={style.modal_box}>
                <div className={style.modalC_head}>
                  <span></span>
                  <p>기본정보</p>
                </div>
                <div className={style.modalC_cont}>
                  <div className={style.modalC_cont_box}>
                    <label>
                      사원번호<p>*</p>
                    </label>
                    <div
                      className={style.box_cont}
                      style={{
                        color: "#9CA3AF",
                        backgroundColor: "#F9FAFB",
                      }}
                    >
                      자동생성
                    </div>
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>
                      성명<p>*</p>
                    </label>
                    <input type="text" placeholder="홍길동" />
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>
                      부서<p>*</p>
                    </label>
                    <select name="" id="">
                      <option value="부서를 선택하세요">
                        부서를 선택하세요
                      </option>
                      <option value="영업팀">영업팀</option>
                      <option value="개발팀">개발팀</option>
                    </select>
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>
                      직급<p>*</p>
                    </label>
                    <select name="" id="">
                      <option value="직급을 선택하세요">
                        직급을 선택하세요
                      </option>
                      <option value="부장">부장</option>
                      <option value="대리">대리</option>
                      <option value="사원">사원</option>
                    </select>
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>
                      입사일<p>*</p>
                    </label>
                    <input type="date" />
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>
                      재직상태<p>*</p>
                    </label>
                    <div className={style.modalC_radio}>
                      <form>
                        <div>
                          <input type="radio" id="work" name="info" />
                          <label for="work">재직중</label>
                        </div>
                        <div>
                          <input type="radio" id="vacation" name="info" />
                          <label for="vacation">휴직중</label>
                        </div>
                        <div>
                          <input type="radio" id="nowork" name="info" />
                          <label for="nowork">퇴직</label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.modal_box}>
                <div className={style.modalC_head}>
                  <span></span>
                  <p>연락처</p>
                </div>
                <div className={style.modalC_cont}>
                  <div className={style.modalC_cont_box}>
                    <label>
                      휴대폰<p>*</p>
                    </label>
                    <input type="text" placeholder="010-0000-0000" />
                  </div>
                  <div className={style.modalC_cont_box}>
                    <label>이메일</label>
                    <input type="text" placeholder="example@company.com" />
                  </div>
                </div>
              </div>
              <div className={style.modal_box}>
                <div className={style.modalC_head}>
                  <span></span>
                  <p>주소</p>
                </div>
                <div
                  className={style.modalC_cont}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className={style.modalC_cont_box2}>
                    <label>우편번호</label>
                    <div className={style.address_box}>
                      <input
                        type="number"
                        placeholder="우편번호"
                        value={registerInfo?.postCode}
                      />
                      <button
                        onClick={() => {
                          openPostcode();
                        }}
                      >
                        <img src="/Search (1).png" alt="" />
                        주소검색
                      </button>
                    </div>
                  </div>
                  <div className={style.modalC_cont_box2}>
                    <label>도로명주소</label>
                    <div className={style.address_box}>
                      <input
                        type="text"
                        className={style.address_box2}
                        placeholder="주소검색 후 자동입력"
                        value={registerInfo?.address}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className={style.modalC_cont_box2}>
                    <label>상세주소</label>
                    <div className={style.address_box}>
                      <input
                        type="text"
                        placeholder="상세주소를 입력하세요"
                        style={{ width: "100%", backgroundColor: "white" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.modal_footer}>
                <p>
                  *<span>필수 입력 항목입니다</span>
                </p>
                <div className={style.modal_footer_button}>
                  <button className={style.md_cancel}>
                    <img src="/X.png" alt="" />
                    <p>취소</p>
                  </button>
                  <button className={style.md_save}>
                    <img src="/Save.png" alt="" />
                    <p>저장</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
