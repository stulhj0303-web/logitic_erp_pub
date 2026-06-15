import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Header from "@/component/common/Header";
import Aside from "@/component/common/Aside";
import Certificate from "@/component/common/Certificate";

export default function page() {
  return (
    <div className={s.container}>
      <Nav />

      <div className={s.main}>
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

        <div className={s.InfoMain}>
          <div className={s.mainContainer}>
            <Header
              headList={[
                { headli1: "인사관리" },
                { headli2: "증명서관리" },
                { headli3: "증명서발급" },
                {
                  headinfo:
                    "필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요.",
                },
              ]}
            />

            <div className={s.certifiC}>
              <div className={s.certifi_Head}>
                <img src="/File Check.png" alt="" />
                <p>증명서 종류 선택</p>
                <p style={{ color: "#EF4444" }}>*</p>
                <span>필수 선택</span>
              </div>
              <div className={s.certifi_Cont}>
                <div className={s.certifi_card}>
                  <p className={s.img}>
                    <img src="/Briefcase Business (1).png" alt="" />
                  </p>
                  <p style={{ paddingTop: "7px" }}>재직증명서</p>
                  <span>현재 재직 중임을 증명합니다</span>
                  <p className={s.selected}>
                    <img src="/Check2.png" alt="" />
                    <p>선택됨</p>
                  </p>
                </div>
                <div className={s.certifi_card2}>
                  <p className={s.img}>
                    <img src="/Award.png" alt="" />
                  </p>
                  <p style={{ paddingTop: "7px" }}>경력증명서</p>
                  <span>경력 사항을 증명합니다</span>
                  <p className={s.nselected}>
                    <p>선택하기</p>
                  </p>
                </div>
                <div className={s.certifi_card2}>
                  <p className={s.img}>
                    <img src="/Banknote (1).png" alt="" />
                  </p>
                  <p style={{ paddingTop: "7px" }}>급여확인서</p>
                  <span>급여 내역을 확인합니다</span>
                  <p className={s.nselected}>
                    <p>선택하기</p>
                  </p>
                </div>
                <div className={s.certifi_card2}>
                  <p className={s.img}>
                    <img src="/Receipt Text.png" alt="" />
                  </p>
                  <p style={{ paddingTop: "7px" }}>근로소득원천징수</p>
                  <span>원천징수 내역 확인서</span>
                  <p className={s.nselected}>
                    <p>선택하기</p>
                  </p>
                </div>
              </div>
            </div>
            <div className={s.certifi_input}>
              <div className={s.cerIn_head}>
                <img src="/Clipboard Pen.png" alt="" />
                <p>발급 정보 입력</p>
                <span className={s.cerIn_ing}>
                  <img src="/File Text (1).png" alt="" />
                  <p>재직증명서 발급 중</p>
                </span>
              </div>
              <div className={s.cerIn_cont}>
                <div className={s.cerIn_tit}>
                  <span></span>
                  <p>신청자 정보</p>
                </div>
                <div className={s.cerIn_list}>
                  <div className={s.cerIn_li}>
                    <label>사원번호</label>
                    <input type="text" placeholder="사원번호" />
                  </div>
                  <div className={s.cerIn_li}>
                    <label>성명</label>
                    <input type="text" placeholder="성명" />
                  </div>
                  <div className={s.cerIn_li}>
                    <label>부서</label>
                    <input type="text" placeholder="부서" />
                  </div>
                  <div className={s.cerIn_li}>
                    <label>직급</label>
                    <input type="text" placeholder="직급" />
                  </div>
                  <div className={s.cerIn_li}>
                    <label>입사일</label>
                    <input type="text" placeholder="입사일" />
                  </div>
                </div>
                <span className={s.hr}></span>
                <div className={s.cerIn_tit}>
                  <span></span>
                  <p>발급 상세 정보</p>
                </div>
                <div className={s.cerIn_list}>
                  <div className={s.cerIn_li}>
                    <label style={{ display: "flex" }}>
                      용도<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <select>
                      <option value="전체">전체</option>
                      <option value="관공서 제출용">관공서 제출용</option>
                    </select>
                  </div>
                  <div className={s.cerIn_li}>
                    <label style={{ display: "flex" }}>
                      제출처<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <input
                      type="text"
                      placeholder="예:국민은행 OO지점"
                      style={{ backgroundColor: "white" }}
                    />
                  </div>
                  <div className={s.cerIn_li}>
                    <label style={{ display: "flex" }}>
                      발급부수<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <div className={s.cerIn_btn}>
                      <button className={s.cerIn_min}>-</button>
                      <span>1</span>
                      <button className={s.cerIn_plu}>+</button>
                    </div>
                  </div>
                  <div className={s.cerIn_li}>
                    <label style={{ display: "flex" }}>
                      언어선택<p style={{ color: "#EF4444" }}>*</p>
                    </label>
                    <div className={s.cerIn_button}>
                      <button className={s.cerIn_kor}>
                        <img src="/Languages (1).png" alt="" />
                        <p>국문</p>
                      </button>
                      <button className={s.cerIn_eng}>
                        <img src="/Languages.png" alt="" />
                        <p>영문</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={s.cerIn_list} style={{ marginTop: "-13px" }}>
                  <div className={s.cerIn_li}>
                    <label>기준일</label>
                    <input
                      type="text"
                      style={{ backgroundColor: "white", width: "180px" }}
                    />
                  </div>
                  <div className={s.cerIn_li}>
                    <label>발급목적 (선택)</label>
                    <input
                      type="text"
                      placeholder="발급 목적을 간략히 입력하세요"
                      style={{ backgroundColor: "white", width: "958px" }}
                    />
                  </div>
                </div>
                <span className={s.hr}></span>
                <div className={s.cerIn_preview}>
                  <img src="/Eye.png" alt="" />
                  <div className={s.cerIn_preText}>
                    <p>출력 전 미리보기를 확인하세요</p>
                    <span>
                      발급된 증명서는 위변조 방지 마크가 포함됩니다. 내용을
                      반드시 확인한 후 출력해 주세요.
                    </span>
                  </div>
                  <button className={s.preview}>
                    <img src="/Eye.png" alt="" />
                    <p>미리보기</p>
                  </button>
                </div>
                <div className={s.cerIn_print}>
                  <button className={s.cancel}>
                    <p>x 취소</p>
                  </button>
                  <button className={s.prev}>
                    <img src="/Eye (1).png" alt="" />
                    <p>미리보기</p>
                  </button>
                  <button className={s.print}>
                    <img src="/Printer.png" alt="" />
                    <p>출력하기</p>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Certificate
                cer={[
                  {
                    date: "발급일시",
                    type: "증명서 종류",
                    use: "용도",
                    submmit: "제출처",
                    lang: "언어",
                    page: "부수",
                    number: "발급번호",
                    manage: "관리",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
