"use client";
import baseApi from "@/api/baseApi";
import style from "./AppliDB.module.css";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AppliDB() {
  const [tableList, setTableList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getEmployees = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.get("/api/v1/employees", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
    };
    getEmployees();
  }, []);

  const 경조비신청리스트조회 = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("res?.data?.data", res?.data?.data);
    setTableList(res?.data?.data || []);
    event;
  };

  useEffect(() => {
    경조비신청리스트조회();
  }, []);

  return (
    <div className={style.mainDB}>
      <ul className={style.maindbList}>
        <li>NO</li>
        <li>신청일</li>
        <li>경조구분</li>
        <li>대상자</li>
        <li>관계</li>
        <li>경조일</li>
        <li>지급금액</li>
        <li>지급계좌</li>
        <li>처리상태</li>
        <li>관리</li>
      </ul>

      {tableList.length > 0 &&
        tableList.map((item, index) => (
          <ul
            className={style.maindbList}
            style={{ backgroundColor: "white" }}
            key={index}
          >
            <li>{index + 1}</li>
            <li>{item.applicationDate}</li>
            <li>{item.eventType}</li>
            <li>{item.targetName}</li>
            <li>{item.familyRelation}</li>
            <li>{item.eventDate}</li>
            <li>{item.requestedAmount}</li>
            <li>{item.accountNumber}</li>
            <li>{item.approvalStatus}</li>
            <li>
              <button
                style={{ cursor: "pointer" }}
                className={style.more_data}
                onClick={() => {
                  setOpen(true);
                }}
              >
                상세
              </button>
            </li>
          </ul>
        ))}

      <ul className={style.maindbListlast}>
        <li>총 5건</li>
        <li>
          <img src="/Chevron Left.png" alt="" />
        </li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>
          <img src="/Chevron Right.png" alt="" />
        </li>
      </ul>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[520px]">
          <DialogTitle>
            <div className={style.money_modal}>
              <img src="/Gift (1).png" alt="" />
              <div className={style.money_header}>
                <p>경조비 신청 상세</p>
                <span>Welfare Benefit Detail</span>
              </div>
              <span className={style.header_ing}>검토중</span>
            </div>
          </DialogTitle>
          <div className={style.money_cont}>
            <div className={style.money_status}>
              <div className={style.status_head}>
                # 신청번호: <p> WEL-2025-07-001</p>
              </div>
              <div className={style.status_head1}>
                <img src="/Calendar (3).png" alt="" /> 신청일:
                <p> 2025.07.01</p>
              </div>
              <div className={style.status_ing}>
                <div className={style.status_ing1}>
                  <img src="/Step Dot Done.png" alt="" />
                  <span style={{ color: "#1B3A6B" }}>신청완료</span>
                </div>
                <p></p>
                <div className={style.status_ing1}>
                  <img src="/Step Dot Active.png" alt="" />
                  <span style={{ color: "#CA8A04" }}>검토중</span>
                </div>
                <p></p>
                <div className={style.status_ing1}>
                  <img src="/Step Dot Pending.png" alt="" />
                  <span>승인</span>
                </div>
                <p></p>
                <div className={style.status_ing1}>
                  <img src="/Step Dot Pending.png" alt="" />
                  <span>지급완료</span>
                </div>
              </div>
            </div>
            <div className={style.money_info}>
              <div className={style.info_head}>
                <span></span>
                <p>경조 정보</p>
              </div>
              <div className={style.info_cont}>
                <ul className={style.info_list}>
                  <li>경조구분</li>
                  <li>
                    <span
                      style={{
                        padding: "0 10px",
                        height: "20px",
                        borderRadius: "50px",
                        backgroundColor: "#FFF0F6",
                        color: "#DB2777",
                        lineHeight: "20px",
                        marginTop: "8px",
                        marginRight: "5px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      본인결혼
                    </span>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#9CA3AF",
                        lineHeight: "36px",
                      }}
                    >
                      경조비 지급 규정 3조 1항
                    </p>
                  </li>
                  <li>대상자 / 관계</li>
                  <li>
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: "#FCE7F3",
                        color: "#DB2777",
                        lineHeight: "22px",
                        textAlign: "center",
                        fontWeight: "bold",
                        marginTop: "7px",
                        marginRight: "5px",
                      }}
                    >
                      이
                    </span>
                    <p style={{ fontWeight: "bold" }}>이영희</p>
                    <span
                      style={{
                        backgroundColor: "#F3F4F6",
                        marginLeft: "5px",
                        height: "18px",
                        borderRadius: "50px",
                        padding: "0 8px",
                        lineHeight: "18px",
                        fontSize: "11px",
                        marginTop: "10px",
                      }}
                    >
                      본인
                    </span>
                  </li>
                  <li>경조일</li>
                  <li>
                    <img src="/Calendar (3).png" alt="" />
                    <p>2025년 7월 20일 (일)</p>
                  </li>
                  <li style={{ borderBottom: "none" }}>경조 장소</li>
                  <li style={{ borderBottom: "none" }}>
                    <img src="/Map Pin.png" alt="" />{" "}
                    <span>더케이서울호텔 그랜드볼룸</span>
                  </li>
                </ul>
              </div>
              <div className={style.info_head}>
                <span></span>
                <p>지급 정보</p>
              </div>
              <div className={style.info_cont}>
                <ul className={style.info_list}>
                  <li>지급금액</li>
                  <li>
                    <img src="/Banknote (6).png" alt="" />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#1B3A6B",
                        lineHeight: "36px",
                        fontWeight: "bold",
                      }}
                    >
                      500,000원
                    </span>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#9CA3AF",
                        lineHeight: "36px",
                        marginLeft: "5px",
                      }}
                    >
                      (오십만원정)
                    </p>
                  </li>
                  <li>지급계좌</li>
                  <li>
                    <img src="/Credit Card.png" alt="" />
                    <span>국민은행</span>
                    <p style={{ marginLeft: "5px" }}>12****-34</p>
                    <span
                      style={{
                        marginLeft: "5px",
                        fontSize: "12px",
                      }}
                    >
                      (이영희)
                    </span>
                  </li>
                  <li style={{ borderBottom: "none" }}>예상 지급일</li>
                  <li style={{ borderBottom: "none" }}>
                    <img src="/Clock (3).png" alt="" />
                    <p>승인 후 3영업일 이내</p>
                  </li>
                </ul>
              </div>
              <div className={style.info_head}>
                <span></span>
                <p>첨부 서류</p>
              </div>
              <div className={style.info_cont}>
                <ul className={style.info_file_list}>
                  <li style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <span className={style.file_img}>
                      <img src="/File Text (1).png" alt="" />
                    </span>
                    <div className={style.file_text}>
                      <p>결혼확인서_이영희_20250701.pdf</p>
                      <span>PDF · 245 KB · 2025.07.01 업로드</span>
                    </div>
                    <img
                      src="/Download (2).png"
                      alt=""
                      style={{
                        width: "15px",
                        height: "15px",
                        marginTop: "10px",
                      }}
                    />
                  </li>
                  <li>
                    <span
                      className={style.file_img}
                      style={{ backgroundColor: "#FEF2F2" }}
                    >
                      <img src="/File Image.png" alt="" />
                    </span>
                    <div className={style.file_text}>
                      <p>청첩장_스캔본.jpg</p>
                      <span>JPG · 1.2 MB · 2025.07.01 업로드</span>
                    </div>
                    <img
                      src="/Download (2).png"
                      alt=""
                      style={{
                        width: "15px",
                        height: "15px",
                        marginTop: "10px",
                      }}
                    />
                  </li>
                </ul>
              </div>
              <div className={style.info_head}>
                <span style={{ backgroundColor: "#CA8A04" }}></span>
                <p style={{ color: "#CA8A04" }}>검토 의견</p>
              </div>
              <div className={style.opinion}>
                <img src="/Message Square Text.png" alt="" />
                <div className={style.opinion_text}>
                  <p>
                    서류 확인 중입니다. 추가 서류 제출이 필요할 수 있습니다.
                  </p>
                  <span>
                    <img src="/User (1).png" alt="" />
                    검토자: 김인사 (인사팀장) · 2025.07.02
                  </span>
                </div>
              </div>
              <div className={style.footer}>
                <img src="/Clock (3).png" alt="" />
                <div className={style.footer_text}>
                  <p>최종 수정:</p>
                  <span>2025.07.02</span>
                  <p>·</p>
                  <span>인사팀</span>
                </div>
                <div className={style.footer_button}>
                  <button className={style.apply_cancel}>
                    <img src="/X (1).png" alt="" />
                    <span>신청취소</span>
                  </button>
                  <button className={style.apply_close}>
                    <img src="/X (3).png" alt="" />
                    <span>닫기</span>
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
