"use client";

import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import baseApi from "@/api/baseApi";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export default function page() {
  // const [date, setDate] = useState(new Date());

  const [open, setOpen] = useState(false);
  const [downOpen, setDownOpen] = useState(false);

  const [fileInfo, setFileInfo] = useState({});
  const [fileId, setFileId] = useState("");

  const fileUpload = async (fileList) => {
    const url = "http://localhost:33000/api/v1/files/upload";
    const token = localStorage.getItem("accessToken");

    const 파일 = fileList[0];

    const 파일명 = 파일?.name;
    const 사이즈 = 파일?.size;
    setFileInfo({
      name: 파일명,
      size: 사이즈,
    });

    const formData = new FormData();
    formData.append("file", 파일);
    formData.append("refType", "1");
    const res = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setFileId(res.data.data);
  };

  const fileUploaderRef = useRef(null);

  const 파일업로드 = async () => {
    const token = localStorage.getItem("accessToken");
    {
      const res = await baseApi.post(
        "/api/v1/support",
        {
          filIdList: [fileId],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    }
  };

  useEffect(() => {
    파일업로드();
  }, []);

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
                { headli3: "기본수당외수당관리" },
                {
                  headinfo:
                    "기본급 외 수당 종류를 정의하고 직원별 지급 내역을 관리합니다.",
                },
              ]}
            />

            <div className={s.mainRtitle}>
              <button
                className={s.download}
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
                className={s.plus}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <img src="/Plus.png" />
                수당 추가
              </button>
            </div>

            <ul className={s.appoint_card}>
              <li>
                <p>등록 수당 종류</p>
                <span>7종</span>
                <p className={s.lighter} style={{ color: "#60A5FA" }}>
                  활성 6 · 비활성 1
                </p>
              </li>
              <li>
                <p>과세 수당</p>
                <span>4종</span>
                <p className={s.card_box} style={{ color: "#CA8A04" }}>
                  소득세 적용
                </p>
              </li>
              <li>
                <p>비과세 수당</p>
                <span>3종</span>
                <p className={s.card_box1}>소득세 면제</p>
              </li>
              <li>
                <p>이번달 수당 총액</p>
                <span>3,340,000원</span>
                <p className={s.lighter}>8명 대상</p>
              </li>
              <li>
                <p>전월 대비</p>
                <span style={{ color: "#92400E" }}>+120,000원</span>
                <p className={s.lighter} style={{ color: "#D97706" }}>
                  야근수당 증가
                </p>
              </li>
            </ul>

            <div className={s.manage_main}>
              <div className={s.manage_list}>
                <div className={s.appoint_vac_head}>
                  <img src="/Layers.png" alt="" />
                  <span>수당 종류 목록</span>
                  <div>
                    <p>7종</p>
                  </div>
                </div>
                <ul className={s.type_list}>
                  <li
                    style={{
                      backgroundColor: "#EFF6FF",
                      borderBottom: "1px solid #BFDBFE",
                    }}
                  >
                    <span style={{ backgroundColor: "#DBEAFE" }}>
                      <img src="/Moon Star (1).png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>야근수당</p>
                        <span>활성</span>
                      </div>
                      시간당 10,000원 · 과세
                    </div>
                    <div className={s.type_right}>
                      <span>과세</span>
                      <img src="/Chevron Right (2).png" alt="" />
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src="/Award.png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>직책수당</p>
                        <span>활성</span>
                      </div>
                      직책별 고정 지급 · 과세
                    </div>
                    <div className={s.type_right}>
                      <span>과세</span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src="/Badge Check.png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>자격증수당</p>
                        <span>활성</span>
                      </div>
                      자격증 보유 시 월 50,000원 · 비과세
                    </div>
                    <div className={s.type_right}>
                      <span
                        style={{
                          width: "44px",
                          backgroundColor: "#DCFCE7",
                          color: "#16A34A",
                        }}
                      >
                        비과세
                      </span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src="/Users Round.png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>가족수당</p>
                        <span>활성</span>
                      </div>
                      부양가족 1인당 30,000원 · 비과세
                    </div>
                    <div className={s.type_right}>
                      <span
                        style={{
                          width: "44px",
                          backgroundColor: "#DCFCE7",
                          color: "#16A34A",
                        }}
                      >
                        비과세
                      </span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src="/Trending Up (2).png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>장기근속수당</p>
                        <span>활성</span>
                      </div>
                      5년 이상 월 100,000원 · 과세
                    </div>
                    <div className={s.type_right}>
                      <span>과세</span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                  <li>
                    <span>
                      <img src="/Star (2).png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>특별성과수당</p>
                        <span>활성</span>
                      </div>
                      비정기 지급 · 과세
                    </div>
                    <div className={s.type_right}>
                      <span>과세</span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                  <li style={{ opacity: "0.4", borderBottom: "none" }}>
                    <span>
                      <img src="/Calendar (3).png" alt="" />
                    </span>
                    <div className={s.type_text} style={{ color: "#6B7280" }}>
                      <div>
                        <p>휴일근무수당</p>
                        <span
                          style={{
                            width: "44px",
                            backgroundColor: "#F1F5F9",
                            color: "#9CA3AF",
                            border: "1px solid #E5E7EB",
                          }}
                        >
                          비활성
                        </span>
                      </div>
                      일 1.5배 지급 · 과세
                    </div>
                    <div className={s.type_right}>
                      <span
                        style={{
                          backgroundColor: "#F1F5F9",
                          color: "#9CA3AF",
                          border: "1px solid #E5E7EB",
                        }}
                      >
                        과세
                      </span>
                      <img src="/Chevron Right (1).png" alt="" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className={s.manage_set_acc}>
                <div className={s.manage_set_sta}>
                  <div className={s.appoint_vac_head}>
                    <span className={s.sett_tit}>
                      <img src="/Moon Star (1).png" alt="" />
                    </span>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "-3px",
                      }}
                    >
                      야근수당 상세설정
                      <p>Overtime Allowance</p>
                    </span>

                    <div>
                      <span></span>
                      <p>활성</p>
                    </div>

                    <ul className={s.chart_toggle}>
                      <label className={s.work_toggle}>
                        <input
                          role="switch"
                          type="checkbox"
                          id="toggle"
                          checked
                        />
                      </label>
                    </ul>
                  </div>
                  <div className={s.setting_cont}>
                    <div className={s.setting_box}>
                      <div className={s.setting_tit}>
                        <span></span>
                        <p>기본 설정</p>
                      </div>
                      <div className={s.setting_list}>
                        <div className={s.setting_li}>
                          <label>수당 명</label>
                          <input
                            type="text"
                            style={{
                              border: "1px solid #2563EB",
                              backgroundColor: "white",
                            }}
                          />
                        </div>
                        <div className={s.setting_li}>
                          <label>수당 코드</label>
                          <input type="text" />
                        </div>
                        <div className={s.setting_li}>
                          <label style={{ display: "flex", gap: "2px" }}>
                            계산 방식 <p style={{ color: "#EF4444" }}>*</p>
                          </label>
                          <div className={s.setting_btn}>
                            <button className={s.time}>
                              <img
                                src="/Clock (6).png"
                                alt=""
                                style={{ marginLeft: "35px" }}
                              />
                              <span>시간당</span>
                            </button>
                            <button className={s.day}>
                              <img
                                src="/Calendar (3).png"
                                alt=""
                                style={{ marginLeft: "43px" }}
                              />
                              <span>일당</span>
                            </button>
                            <button className={s.pay}>
                              <img src="/Bookmark.png" alt="" />
                              <span>고정금액</span>
                            </button>
                          </div>
                        </div>
                        <div className={s.setting_li}>
                          <label style={{ display: "flex", gap: "2px" }}>
                            시간당 단가<p style={{ color: "#EF4444" }}>*</p>
                          </label>
                          <input
                            type="text"
                            style={{ backgroundColor: "white" }}
                          />
                        </div>
                        <div className={s.setting_li}>
                          <label>과세 여부</label>
                          <div className={s.setting_btn}>
                            <button className={s.y_btn}>
                              <img
                                src="/Receipt Text (2).png"
                                alt=""
                                style={{ marginLeft: "35px" }}
                              />
                              <span>과세</span>
                            </button>
                            <button className={s.n_btn}>
                              <img src="/Shield Check (1).png" alt="" />
                              <span>비과세</span>
                            </button>
                          </div>
                        </div>
                        <div className={s.setting_li}>
                          <label>급여 자동반영</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>

                    <span className={s.hr}></span>

                    <div className={s.setting_box}>
                      <div className={s.setting_tit}>
                        <span></span>
                        <p>적용 직급 범위</p>
                      </div>
                      <ul className={s.lev_btn}>
                        <li
                          style={{
                            backgroundColor: "#F1F5F9",
                            border: "1px solid #E5E7EB",
                          }}
                        >
                          <span style={{ backgroundColor: "#D1D5DB" }}></span>
                          <p style={{ color: "#9CA3AF" }}>임원</p>
                        </li>
                        <li>
                          <span></span>
                          <p>부장</p>
                        </li>
                        <li>
                          <span></span>
                          <p>차장</p>
                        </li>
                        <li>
                          <span></span>
                          <p>과장</p>
                        </li>
                        <li>
                          <span></span>
                          <p>대리</p>
                        </li>
                        <li>
                          <span></span>
                          <p>사원</p>
                        </li>
                      </ul>
                    </div>

                    <span className={s.hr}></span>

                    <div className={s.setting_box}>
                      <div className={s.setting_tit}>
                        <span></span>
                        <p>한도 및 조건 설정</p>
                      </div>

                      <div className={s.setting_info}>
                        <div className={s.info_cont}>
                          <label>월 최대 시간</label>
                          <div>
                            <input type="text" />
                            <p>시간</p>
                          </div>
                        </div>
                        <div className={s.info_cont}>
                          <label>최소 인정 시간</label>
                          <div>
                            <input type="text" />
                            <p>시간</p>
                          </div>
                        </div>
                        <div className={s.info_cont}>
                          <label>계산 단위</label>
                          <div>
                            <select>
                              <option value="30분 단위">30분 단위</option>
                              <option value="60분 단위">60분 단위</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className={s.info_alram}>
                        <img src="/Alert Circle.png" alt="" />
                        <span>
                          월 최대 52시간 이상 입력 시 경고 알림이 발송됩니다.
                        </span>
                      </div>
                    </div>

                    <span className={s.hr}></span>

                    <div className={s.set_useBtn}>
                      <button className={s.del_btn}>
                        <img src="/Trash 2.png" alt="" />
                        <p>삭제</p>
                      </button>
                      <button className={s.cancel_btn}>
                        <img src="/X.png" alt="" />
                        <p>취소</p>
                      </button>
                      <button className={s.save_btn}>
                        <img src="/Save.png" alt="" />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={s.sett_payStatus}>
                  <div className={s.appoint_vac_head}>
                    <img src="/Clock (1).png" alt="" />
                    <span>이번달 야근수당 지급 현황 (2025.07)</span>
                    <div className={s.payStatus_head}>
                      <select>
                        <option value="2025.07">2025.07</option>
                        <option value="2025.08">2025.08</option>
                        <option value="2025.09">2025.09</option>
                      </select>
                      <span className={s.payStatus_span}>5명 지급액</span>
                      <button className={s.add_btn}>
                        <img src="/Plus.png" alt="" />
                        <p>지급추가</p>
                      </button>
                    </div>
                  </div>
                  <ul className={s.payStatus_cont}>
                    <li>성명</li>
                    <li>부서</li>
                    <li>직급</li>
                    <li>야근시간</li>
                    <li>단가 (원/h)</li>
                    <li>지급액 (원)</li>
                    <li>과세구분</li>
                    <li>처리상태</li>
                    <li>관리</li>
                  </ul>
                  <ul className={s.status_sum}>
                    <li>
                      <img src="/Sigma.png" alt="" />
                      <span>합계</span>
                    </li>
                    <li>1,170h</li>
                    <li>-</li>
                    <li>1,170,000</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={downOpen} onOpenChange={setDownOpen}>
        <DialogContent className="w-[400px]" showCloseButton={false}>
          <div className={s.pdf_cont}>
            <span className={s.pdf_img}>
              <img src="/Download (1).png" alt="" />
            </span>
            <div className={s.pdf_text}>
              <p>PDF 다운로드</p>
              <span>
                선택한 데이터를 PDF 파일로 다운로드합니다. <br />
                계속 진행하시겠습니까?
              </span>
            </div>
            <div className={s.pdf_button}>
              <button className={s.pdf_cancel}>취소</button>
              <button className={s.pdf_select}>확인</button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[600px] max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <DialogHeader>
            <DialogTitle>
              <div className={s.modal_header}>
                <span className={s.modal_header_span}>
                  <img src="/Star (3).png" alt="" />
                </span>
                <div className={s.modal_header_text}>
                  <span>특별성과수당 지급등록</span>
                  <p>Special Performance Allowance</p>
                </div>
                <div className={s.modal_header_date}>2025년 7월</div>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className={s.modal_cont}>
            <div className={s.modal_cont_status}>
              <div className={s.modal_cont_status_box}>
                <span>1</span>
                <p>지급 기본정보</p>
                <span className={s.hr}></span>
                <span>2</span>
                <p>지급 대상 선택</p>
                <span
                  className={s.hr}
                  style={{ backgroundColor: "#E5E7EB" }}
                ></span>
                <span style={{ backgroundColor: "#E5E7EB", color: "#9CA3AF" }}>
                  3
                </span>
                <p style={{ color: "#9CA3AF" }}>첨부파일</p>
              </div>
            </div>
            <div className={s.modal_info}>
              <div className={s.modal_info_head}>
                <span></span>
                <p>지급 기본정보</p>
              </div>
              <div className={s.modal_info_box}>
                <div className={s.info_box_cont}>
                  <label>
                    지급월 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <input type="date" />
                </div>
                <div className={s.info_box_cont}>
                  <label>수당 유형</label>
                  <div className={s.info_box_cont1}>
                    <p>특별성과수당</p>
                    <img src="/Lock.png" alt="" />
                  </div>
                </div>
              </div>
              <div className={s.modal_info_box}>
                <div className={s.info_box_cont}>
                  <label>
                    지급 금액 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <div className={s.info_box_cont2}>
                    <div className={s.info_box_cont3}>500,000</div>
                    <div className={s.info_box_cont4}>원</div>
                  </div>
                  <div className={s.info_box_cont5}>
                    <img src="/Info1.png" alt="" />
                    <p>일괄 동일 금액 지급 · 개별 설정은 직원 목록에서 변경</p>
                  </div>
                </div>
                <div
                  className={s.info_box_cont}
                  style={{ alignItems: "flex-start" }}
                >
                  <label>
                    과세 여부 <p style={{ color: "#EF4444" }}>*</p>
                  </label>
                  <div className={s.info_box_btn}>
                    <button className={s.tax}>
                      <img
                        src="/Receipt Text (4).png"
                        alt=""
                        style={{ marginLeft: "40px" }}
                      />
                      <p>과세</p>
                    </button>
                    <button className={s.no_tax}>
                      <img src="/Shield Check (1).png" alt="" />
                      <p>비과세</p>
                    </button>
                  </div>
                  <div className={s.info_box_btn_info}>
                    <span></span>
                    <p>과세 선택 시 소득세가 자동 공제됩니다</p>
                  </div>
                </div>
              </div>
              <div
                className={s.modal_info_box}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <label>
                  지급 사유 <p style={{ color: "#EF4444" }}>*</p>
                </label>
                <input
                  type="text"
                  placeholder="지급 사유를 입력하세요. (예: 2025년 2분기 성과 우수 직원 포상)"
                  style={{ height: "64px" }}
                />
              </div>
            </div>
            <div className={s.modal_info}>
              <div
                className={s.modal_info_head}
                style={{ position: "relative" }}
              >
                <span></span>
                <p>지급 대상 직원 선택</p>
                <div className={s.modal_info_head_box}>
                  <span>
                    <img src="/Users (2).png" alt="" />
                    3명 선택됨
                  </span>
                  <p className={s.modal_checkbox}>
                    <input type="checkbox" /> <label>전체선택</label>
                  </p>
                </div>
              </div>
              <div className={s.modal_input}>
                <select>
                  <option value="전체 부서">전체 부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
                <input type="text" placeholder="사원명 검색" />
              </div>

              <div>
                <ul
                  className={s.modal_user_list}
                  style={{
                    backgroundColor: "#F1F5F9",
                    color: "#6B7280",
                    fontWeight: "bold",
                    height: "36px",
                    lineHeight: "36px",
                  }}
                >
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>성명</li>
                  <li>사원번호</li>
                  <li>부서</li>
                  <li>직급</li>
                  <li>개별 지급금액 (원)</li>
                </ul>
                <ul className={s.modal_user_list}>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li style={{ display: "flex", gap: "7px" }}>
                    <span style={{ backgroundColor: "#DBEAFE" }}>김</span>김철수
                  </li>
                  <li>EMP-001</li>
                  <li>인사팀</li>
                  <li>
                    <p style={{ backgroundColor: "#EDE9FE" }}>팀장</p>
                  </li>
                  <li>
                    <div className={s.user_money}>500,000</div>
                  </li>
                </ul>
                <div className={s.user_select}>
                  <p>전체 5명 중 3명 선택</p>
                  <div className={s.user_select_text}>
                    <p style={{ color: "#374151" }}>총 지급예정액</p>
                    <span>1,700,000원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.modal_info}>
              <div
                className={s.modal_info_head}
                style={{ position: "relative" }}
              >
                <span></span>
                <p>첨부파일</p>
                <p
                  style={{
                    color: "#9CA3AF",
                    fontSize: "12px",
                    fontWeight: "normal",
                  }}
                >
                  선택사항
                </p>
              </div>
              <div className={s.info_file}>
                <img src="/Uploadbig.png" alt="" />
                <div className={s.file_text}>
                  <span>결재문서·지급증빙 파일을 첨부하세요</span>
                  <p>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</p>
                </div>
                <input
                  type="file"
                  hidden
                  ref={fileUploaderRef}
                  onChange={(e) => {
                    fileUpload(e.target.files);
                  }}
                />
                <button
                  className={s.selectfile}
                  onClick={() => {
                    fileUploaderRef.current.click();
                  }}
                >
                  <img src="/Paperclip1.png" alt="" />
                  <p>파일 선택</p>
                </button>
              </div>

              {fileInfo?.name && (
                <div className={s.info_file_cont}>
                  <img src="/File Text (3).png" alt="" />
                  <div className={s.info_file_name}>
                    <p>{fileInfo?.name}</p>
                    <span style={{ display: "flex" }}>
                      {fileInfo?.size} KB |{" "}
                      <img
                        src="Check.png"
                        alt=""
                        style={{
                          width: "10px",
                          height: "10px",
                          margin: "3px 5px 0 5px",
                        }}
                      />
                      <p style={{ color: "#16A34A", fontSize: "10px" }}>
                        업로드 완료
                      </p>
                    </span>
                  </div>
                  <button
                    className={s.file_delete}
                    onClick={() => {
                      setFileInfo({});
                    }}
                  >
                    <img src="/X (1).png" alt="" />
                    <p>삭제</p>
                  </button>
                </div>
              )}
            </div>
            <div className={s.info_alert}>
              <img src="/Circle Alert (1).png" alt="" />
              <div className={s.info_alert_text}>
                <p>저장 전 확인사항</p>
                <span>
                  저장 후 급여계산 시 해당 수당이 자동 반영됩니다. 확정 전
                  급여담당자 검토를 권장합니다.
                </span>
              </div>
            </div>
            <div className={s.info_footer}>
              <div className={s.info_footer_text}>
                <p style={{ color: "#EF4444" }}>*</p>
                <p style={{ color: "#9CA3AF" }}>필수 입력 항목</p>
                <span
                  style={{
                    backgroundColor: "#E5E7EB",
                    width: "1px",
                    height: "16px",
                  }}
                ></span>
                <span className={s.info_footer_text_span}>
                  <img
                    src="/Users (3).png"
                    alt=""
                    style={{ width: "12px", height: "12px" }}
                  />
                  <p>3명 · 총 1,700,000원</p>
                </span>
              </div>
              <div className={s.info_footer_btn}>
                <button className={s.foot_preview}>
                  <img src="/Eye (1).png" alt="" />
                  <p>미리보기</p>
                </button>
                <button className={s.foot_cancel}>
                  <img src="/X.png" alt="" />
                  <p>취소</p>
                </button>
                <button
                  className={s.foot_save}
                  style={{ backgroundColor: "#1B3A6B" }}
                >
                  <img src="/Printer.png" alt="" />
                  <p>저장하기</p>
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
