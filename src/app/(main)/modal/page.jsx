import s from "./page.module.css";

export default function page() {
  return (
    <div className={s.modal}>
      <div className={s.modal_header}>
        <span className={s.modal_header_span}>
          <img src="/File Text.png" alt="" />
        </span>
        <div className={s.modal_header_text}>
          <span>4대보험 취득신고서 출력</span>
          <p>Health & Employment Insurance Acquisition Report</p>
        </div>
        <div className={s.modal_header_date}>
          <span></span>미신고 · D-5
        </div>
      </div>
      <div className={s.modal_cont}>
        <div className={s.modal_emp}>
          <div className={s.modal_emp_info}>
            <span className={s.modal_emp_info_span}>강</span>
            <div className={s.modal_emp_text}>
              <div style={{ fontSize: "11px", lineHeight: "18px" }}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>강다은</p>
                <span
                  style={{
                    display: "flex",
                    gap: "4px",
                    backgroundColor: "#DCFCE7",
                    borderRadius: "50px",
                    padding: "0 10px",
                    height: "18px",
                    color: "#16A34A",
                    fontWeight: "bold",
                  }}
                >
                  취득대상
                </span>
                <span
                  style={{
                    display: "flex",
                    gap: "4px",
                    backgroundColor: "#FFF1F2",
                    border: "1px solid #FECACA",
                    borderRadius: "50px",
                    padding: "0 10px",
                    height: "18px",
                  }}
                >
                  <img src="/Alert Circle (1).png" alt="" />{" "}
                  <p style={{ color: "#E11D48", fontWeight: "bold" }}>
                    신고기한 임박
                  </p>
                </span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "15px",
                  color: "#6B7280",
                }}
              >
                <p>EMP-009</p> <span></span> <p>개발팀</p>
                <span className={s.modal_emp_text_span}></span>
                <p>사원</p>
                <span className={s.modal_emp_text_span}></span>
                <p>입사일 2025.07.10</p>
              </div>
            </div>
          </div>
          <div className={s.modal_emp_day}>
            <div className={s.modal_emp_day1}>
              <img src="/Clock (5).png" alt="" />
              <span>신고기한</span>
            </div>
            <span className={s.modal_emp_day_span}></span>
            <div className={s.modal_emp_day1}>
              <p>D-5</p>
              <span>2025.07.14</span>
            </div>
          </div>
        </div>
        <div className={s.modal_emp} style={{ backgroundColor: "white" }}>
          <div className={s.modal_select_head}>
            <span></span> <p>신고서 선택</p>
            <p
              style={{
                color: "#9CA3AF",
                fontWeight: "normal",
                fontSize: "12px",
              }}
            >
              복수 선택 가능
            </p>
          </div>
          <div className={s.modal_select}>
            <div
              className={s.select_box}
              style={{ border: "1px solid #BFDBFE" }}
            >
              <div className={s.select_box1}>
                <input type="checkbox" />
                <span
                  style={{
                    backgroundColor: "#DBEAFE",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    marginTop: "7px",
                    position: "relative",
                  }}
                >
                  <img
                    src="/Shield.png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </span>
                <div className={s.select_box_text}>
                  <p>국민연금 취득신고서</p>
                  <span>국민연금공단 제출용 · 취득일로부터 14일 이내</span>
                </div>
              </div>
              <div className={s.select_box1_right}>
                <span style={{ backgroundColor: "#DBEAFE", color: "#1D4ED8" }}>
                  NPS-001
                </span>
                <img src="/Chevron Right (4).png" alt="" />
              </div>
            </div>
            <div
              className={s.select_box}
              style={{
                border: "1px solid #99F6E4",
                backgroundColor: "#F0FDFA",
              }}
            >
              <div className={s.select_box1}>
                <input type="checkbox" />
                <span
                  style={{
                    backgroundColor: "#CCFBF1",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    marginTop: "7px",
                    position: "relative",
                  }}
                >
                  <img
                    src="/Heart Pulse (1).png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </span>
                <div className={s.select_box_text}>
                  <p>건강보험 취득신고서</p>
                  <span>국민건강보험공단 제출용 · 취득일로부터 14일 이내</span>
                </div>
              </div>
              <div className={s.select_box1_right}>
                <span style={{ backgroundColor: "#CCFBF1", color: "#0F766E" }}>
                  NHIS-001
                </span>
                <img src="/Chevron Right (5).png" alt="" />
              </div>
            </div>
            <div
              className={s.select_box}
              style={{
                border: "1px solid #FDE68A",
                backgroundColor: "#FFFBEB",
              }}
            >
              <div className={s.select_box1}>
                <input type="checkbox" />
                <span
                  style={{
                    backgroundColor: "#FEF9C3",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    marginTop: "7px",
                    position: "relative",
                  }}
                >
                  <img
                    src="/Briefcase.png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </span>
                <div className={s.select_box_text}>
                  <p>고용보험 취득신고서</p>
                  <span>
                    근로복지공단 제출용 · 취득일이 속한 달 다음달 15일까지
                  </span>
                </div>
              </div>
              <div className={s.select_box1_right}>
                <span style={{ backgroundColor: "#FEF9C3", color: "#D97706" }}>
                  KCOMWEL-001
                </span>
                <img src="/Chevron Right (6).png" alt="" />
              </div>
            </div>
            <div
              className={s.select_box}
              style={{
                border: "1px solid #E5E7EB",
                backgroundColor: "#F8FAFC",
                opacity: "60%",
              }}
            >
              <div className={s.select_box1}>
                <input type="checkbox" />
                <span
                  style={{
                    backgroundColor: "#F1F5F9",
                    borderRadius: "8px",
                    width: "32px",
                    height: "32px",
                    marginTop: "7px",
                    position: "relative",
                  }}
                >
                  <img
                    src="/Hard Hat.png"
                    alt=""
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                    }}
                  />
                </span>
                <div className={s.select_box_text}>
                  <p>산재보험 취득신고서</p>
                  <span>
                    근로복지공단 제출용 · 사업장 취득 시 신고 (해당없음)
                  </span>
                </div>
              </div>
              <div className={s.select_box1_right}>
                <span
                  style={{
                    backgroundColor: "#F1F5F9",
                    color: "#9CA3AF",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  미해당
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={s.modal_emp}
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div className={s.modal_select_head}>
            <span></span> <p>직원정보 자동입력</p>
            <p
              style={{
                color: "#16A34A",
                fontWeight: "bold",
                fontSize: "12px",
                display: "flex",
                backgroundColor: "#DCFCE7",
                borderRadius: "50px",
                padding: "0 10px",
                height: "18px",
                lineHeight: "18px",
              }}
            >
              <img
                src="/Zap.png"
                alt=""
                style={{
                  width: "10px",
                  height: "10px",
                  marginTop: "3px",
                  marginRight: "2px",
                }}
              />
              자동완성
            </p>
          </div>
          <div className={s.modal_select_input}>
            <div className={s.select_input_box}>
              <label>성명</label>
              <div className={s.select_input_text}>
                <p>강다은</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.select_input_box}>
              <label>성별</label>
              <div className={s.select_input_text}>
                <p>여</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
          </div>
          <div className={s.modal_select_input}>
            <div className={s.select_input_box}>
              <label style={{ display: "flex", gap: "4px" }}>
                주민등록번호 <p style={{ color: "#EF4444" }}>*</p>
              </label>
              <input type="password" />
            </div>
            <div className={s.select_input_box}>
              <label>국적</label>
              <div className={s.select_input_text}>
                <p>대한민국</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
          </div>
          <div className={s.modal_select_input}>
            <div className={s.select_input_box}>
              <label style={{ display: "flex", gap: "4px" }}>
                취득일 (입사일) <p style={{ color: "#EF4444" }}>*</p>
              </label>
              <div className={s.select_input_text}>
                <p>2025.07.10</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.select_input_box}>
              <label style={{ display: "flex", gap: "4px" }}>
                기준소득월액 <p style={{ color: "#EF4444" }}>*</p>
              </label>
              <input type="text" />
            </div>
          </div>
          <div className={s.modal_select_input}>
            <div className={s.select_input_box}>
              <label>직종</label>
              <div className={s.select_input_text}>
                <p>일반직</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
            <div className={s.select_input_box}>
              <label>고용형태</label>
              <div className={s.select_input_text}>
                <p>정규직</p>
                <img src="/Lock.png" alt="" />
              </div>
            </div>
          </div>
          <div className={s.modal_select_info}>
            <img src="/Info.png" alt="" />
            <p>
              자물쇠 항목은 인사정보에서 자동 불러온 값입니다. 기준소득월액은
              직접 수정할 수 있습니다.
            </p>
          </div>
        </div>
        <div className={s.modal_emp} style={{ backgroundColor: "white" }}>
          <div className={s.modal_select_head}>
            <span></span> <p>신고기관 정보</p>
          </div>
          <ul className={s.modal_select_card}>
            <li>
              <div className={s.select_card_head}>
                <span></span>
                <p>국민 연금공단</p>
                <span className={s.card_span}>팩스 가능</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
