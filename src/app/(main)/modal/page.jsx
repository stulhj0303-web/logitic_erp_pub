import { HelpingHand } from "lucide-react";
import s from "./page.module.css";
export default function page() {
  return (
    <div className={s.modal}>
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
          <div className={s.modal_info_head} style={{ position: "relative" }}>
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
          <ul className={s.modal_user_list}>
            <li>
              <input type="checkbox" />
            </li>
            <li>성명</li>
            <li>사원번호</li>
            <li>부서</li>
            <li>직급</li>
            <li>개별 지급금액 (원)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
