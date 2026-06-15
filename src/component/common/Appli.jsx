"use client";

import s from "./Appli.module.css";
import baseApi from "@/api/baseApi";
import { useEffect, useState } from "react";

export default function Appli() {
  const [appliInfo, setAppliInfo] = useState();
  const [eventType, setEventType] = useState("본인결혼");
  const [eventTargetInfo, setEventTargetInfo] = useState("");

  const 경조비신청리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    경조비신청리스트조회();
  }, []);

  useEffect(() => {
    const 사원번호 = localStorage.getItem("employeeNo");
    const 이름 = localStorage.getItem("name");
    const 부서 = localStorage.getItem("departmentName");
    const 직급 = localStorage.getItem("position");

    const 신청연도 = new Date().getFullYear();
    const 신청월 = new Date().getMonth() + 1;
    const 신청일 = new Date().getDate();

    const 신청전체일자 = `${신청연도}.${신청월}.${신청일}`;

    setAppliInfo({
      employeeNo: 사원번호,
      name: 이름,
      departmentName: 부서,
      position: 직급,
      신청전체일자,
    });
  }, []);

  const 경조사비신청하기 = async () => {
    const token = localStorage.getItem("accessToken");

    //경조구분 확인하기
    if (!eventType) {
      alert("경조구분은 필수입니다.");
      return;
    }
    if (!eventTargetInfo?.targetName) {
      alert("대상자 성명은 필수입니다.");
      return;
    }
    if (!eventTargetInfo?.familyRelation) {
      alert("관계 작성은 필수입니다.");
      return;
    }
    // if (!eventTargetInfo?.targetName) {
    //   alert("경조일 입력은 필수입니다.");
    //   return;
    // }

    if (!eventTargetInfo?.bankName) {
      alert("은행 선택은 필수입니다.");
      return;
    }
    if (!eventTargetInfo?.accountNumber) {
      alert("계좌번호는 필수입니다.");
      return;
    }
    if (
      !(
        10 <= eventTargetInfo?.accountNumber.length &&
        12 >= eventTargetInfo?.accountNumber.length
      )
    ) {
      alert("올바른 계좌번호가 아닙니다.");
      return;
    }
    if (!eventTargetInfo?.accountHolder) {
      alert("예금주 작성은 필수입니다.");
      return;
    }
    const res = await baseApi.post(
      "/api/v1/support",
      {
        eventType: eventType,
        familyRelation: eventTargetInfo?.familyRelation,
        targetName: eventTargetInfo?.targetName,
        applicationDate: "2026-06-12",
        eventDate: "2026-06-12",
        requestedAmount: 50000,
        eventLocation: eventTargetInfo?.eventLocation,
        bankName: eventTargetInfo?.bankName,
        accountNumber: eventTargetInfo?.accountNumber,
        accountHolder: eventTargetInfo?.accountHolder,
        approvalStatus: "확인",
        memo: "string",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  };

  return (
    <div className={s.appli_container}>
      <div className={s.appli_head}>
        <img src="/Heart Handshake1.png" alt="" />
        <p>경조비신청 입력</p>
        <div className={s.head_ess}>
          <span>*</span>
          <p>필수 입력 항목</p>
        </div>
      </div>
      <div className={s.appli_cont}>
        <div className={s.cont_info}>
          <div className={s.info_head}>
            <span></span>
            <p>신청자 정보</p>
          </div>
          <div className={s.info_main}>
            <div className={s.main_cont}>
              <label>사원번호</label>
              <div>
                <p>{appliInfo?.employeeNo}</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.main_cont}>
              <label>성명</label>
              <div>
                <p>{appliInfo?.name}</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.main_cont}>
              <label>부서</label>
              <div>
                <p>{appliInfo?.departmentName}</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.main_cont}>
              <label>직급</label>
              <div>
                <p>{appliInfo?.position}</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.main_cont}>
              <label>신청일</label>
              <div>
                <p>{appliInfo?.신청전체일자}</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
          </div>

          <span className={s.appli_hr}></span>

          <div className={s.info_head}>
            <span></span>
            <p>경조 구분</p>
            <p style={{ color: "#EF4444" }}>*</p>
          </div>

          <div className={s.info_main}>
            <button
              className={s.marry}
              onClick={() => {
                setEventType("본인결혼");
              }}
            >
              <img src="/Heart.png" alt="" />
              <p style={{ color: "white" }}>본인결혼</p>
            </button>
            <button
              style={{ border: "1px solid #D1D5DB" }}
              onClick={() => {
                setEventType("자녀결혼");
              }}
            >
              <img src="/Heart (1).png" alt="" />
              <p>자녀결혼</p>
            </button>
            <button
              style={{ border: "1px solid #D1D5DB", borderLeft: "0" }}
              onClick={() => {
                setEventType("출산");
              }}
            >
              <img src="/Baby.png" alt="" />
              <p>출산</p>
            </button>
            <button
              style={{ border: "1px solid #D1D5DB", borderLeft: "0" }}
              onClick={() => {
                setEventType("부모사망");
              }}
            >
              <img src="/Flower 2.png" alt="" />
              <p>부모사망</p>
            </button>
            <button
              style={{ border: "1px solid #D1D5DB", borderLeft: "0" }}
              onClick={() => {
                setEventType("배우자사망");
              }}
            >
              <img src="/Flower 2.png" alt="" />
              <p>배우자사망</p>
            </button>
            <button
              style={{ border: "1px solid #D1D5DB", borderLeft: "0" }}
              onClick={() => {
                setEventType("부모회갑");
              }}
            >
              <img src="/Cake Slice.png" alt="" />
              <p>부모회갑</p>
            </button>
            <button
              style={{
                border: "1px solid #D1D5DB",
                borderLeft: "0",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }}
              onClick={() => {
                setEventType("기타");
              }}
            >
              <img src="/Ellipsis.png" alt="" />
              <p>기타</p>
            </button>
          </div>

          <div className={s.selected}>
            <img src="/Info.png" alt="" />
            <span>본인결혼 선택됨 · 지급기준액:</span>
            <p>500,000원</p>
          </div>

          <span className={s.appli_hr}></span>

          <div className={s.info_head}>
            <span></span>
            <p>경조 대상자 정보</p>
          </div>

          <div className={s.info_main}>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>
                대상자 성명 <p className={s.star}> *</p>
              </label>
              <input
                style={{ fontSize: "13px" }}
                type="text"
                placeholder="성명을 입력하세요"
                onChange={(e) =>
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      targetName: e.target.value,
                    };
                  })
                }
              />
            </div>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>
                관계<p className={s.star}> *</p>
              </label>
              <select
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      familyRelation: e.target.value,
                    };
                  });
                }}
              >
                <option value="본인">본인</option>
                <option value="부모">부모</option>
                <option value="자녀">자녀</option>
              </select>
            </div>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>
                경조일<p className={s.star}> *</p>
              </label>
              <input
                style={{ fontSize: "13px" }}
                type="date"
                placeholder=""
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      eventDate: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>경조장소</label>
              <input
                type="text"
                placeholder="장소를 입력하세요 (선택)"
                style={{ width: "220px", fontSize: "13px" }}
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      eventLocation: e.target.value,
                    };
                  });
                }}
              />
            </div>
          </div>

          <span className={s.appli_hr}></span>

          <div className={s.info_head}>
            <span></span>
            <p>지급 계좌</p>
            <p style={{ color: "#EF4444" }}>*</p>
          </div>

          <div className={s.info_main}>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>은행</label>
              <select
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      bankName: e.target.value,
                    };
                  });
                }}
              >
                <option value="국민은행">국민은행</option>
                <option value="신한은행">신한은행</option>
                <option value="농협은행">농협은행</option>
              </select>
            </div>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>계좌번호</label>
              <input
                type="number"
                placeholder="-없이 숫자만 입력"
                style={{ width: "240px", fontSize: "13px" }}
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      accountNumber: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className={s.main_cont}>
              <label style={{ display: "flex" }}>예금주</label>
              <input
                style={{ fontSize: "13px" }}
                type="text"
                placeholder="성명을 입력하세요"
                onChange={(e) => {
                  setEventTargetInfo((prev) => {
                    return {
                      ...prev,
                      accountHolder: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className={s.main_cont}>
              <button className={s.correct}>
                <img src="/Check.png" alt="" />
                <p>계좌 확인</p>
              </button>
            </div>
          </div>

          <span className={s.appli_hr}></span>

          <div className={s.info_head}>
            <span></span>
            <p>첨부파일</p>
          </div>

          <div className={s.info_file}>
            <img src="/Paperclip.png" alt="" />
            <div className={s.file_text}>
              <span>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</span>
              <p>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</p>
            </div>
            <button className={s.selectfile}>
              <img src="/Upload.png" alt="" />
              <p>파일 선택</p>
            </button>
          </div>
          <div className={s.add_contents}>
            <label>비고</label>
            <input type="text" placeholder="추가 사항을 입력하세요. (선택)" />
          </div>
          <div className={s.appli_btn}>
            <button className={s.cancel_btn}>
              <img src="/X.png" alt="" />
              <span>취소</span>
            </button>
            <button
              className={s.app_btn}
              onClick={() => {
                경조사비신청하기();
                경조비신청리스트조회();
              }}
            >
              <img src="/Send Horizontal.png" alt="" />
              <span>신청하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
