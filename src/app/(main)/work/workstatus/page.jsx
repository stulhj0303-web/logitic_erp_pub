"use client";
import Nav from "@/component/common/Nav";
import s from "./page.module.css";
import Aside from "@/component/common/Aside";
import Header from "@/component/common/Header";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function page() {
  const [downOpen, setDownOpen] = useState(false);
  return (
    <div className={s.container}>
      <Nav />

      <div className={s.main}>
        <Aside
          dummy={[
            {
              titleInfo: { iconPath: "/Clock (2).png", titleName: "근태관리" },
              submenuList: [
                { name: "일일근태등록", path: "/work/workday" },
                { name: "월근태현황", path: "/work/workstatus" },
              ],
            },

            {
              titleInfo: { iconPath: "/Calendar.png", titleName: "휴가관리" },
              submenuList: [
                { name: "휴가일수설정", path: "/vacation/setting" },
                { name: "휴가일수계산", path: "/vacation/calculate" },
                { name: "휴가일수신청", path: "/vacation/appoint" },
                { name: "휴가사용현황", path: "/vacation/status" },
              ],
            },
          ]}
        />

        <div className={s.InfoMain}>
          <div className={s.mainContainer}>
            <Header
              headList={[
                { headli1: "근태관리" },
                { headli2: "근태관리" },
                { headli3: "월근태현황" },
                {
                  headinfo:
                    "부서별·직원별 월간 근태 현황을 조회하고 관리합니다.",
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
              <button className={s.plus}>
                <img src="/Printer.png" />
                인쇄
              </button>
            </div>

            <div className={s.work_search}>
              <div className={s.search_cont}>
                <div className={s.search_day}>
                  <button className={s.left}>
                    <img src="/Chevron Left (1).png" alt="" />
                  </button>
                  <span>2025년 7월</span>
                  <button className={s.right}>
                    <img src="/Chevron Right (1).png" alt="" />
                  </button>
                </div>
                <label>부서</label>
                <select>
                  <option value="전체 부서">전체부서</option>
                  <option value="인사팀">인사팀</option>
                  <option value="경영지원팀">경영지원팀</option>
                  <option value="개발팀">개발팀</option>
                  <option value="영업팀">영업팀</option>
                </select>
                <button className={s.search}>
                  <img src="/Search (1).png" alt="" />
                  <span>조회</span>
                </button>
                <div className={s.search_status}>
                  <div>
                    <span style={{ backgroundColor: "#E2E8F0" }}></span>
                    <p>출근</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#FED7AA" }}></span>
                    <p>지각</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#BBF7D0" }}></span>
                    <p>연차</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#BAE6FD" }}></span>
                    <p>반차</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#DDD6FE" }}></span>
                    <p>출장</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#FECACA" }}></span>
                    <p>결근</p>
                  </div>
                  <div>
                    <span style={{ backgroundColor: "#CBD5E1" }}></span>
                    <p>휴일</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.work_status}>
              <div className={s.work_header}>
                <img src="/Table.png" alt="" />
                <span>2025년 7월 근태현황</span>
                <div>
                  <>
                    <span style={{ backgroundColor: "#64748B" }}></span>
                    <p>총 근무일 23일</p>
                  </>
                  <span
                    style={{
                      width: "1px",
                      height: "14px",
                      display: "block",
                      backgroundColor: "#E5E7EB",
                      marginTop: "15px",
                    }}
                  ></span>
                  <>
                    <span style={{ backgroundColor: "#3B82F6" }}></span>
                    <p>대상 인원 5명</p>
                  </>
                </div>
              </div>
              <div className={s.work_cont}>
                <ul className={s.cont_list}>
                  <li>성명</li>
                  <li>부서</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                  <li>13</li>
                  <li>14</li>
                  <li>15</li>
                  <li>16</li>
                  <li>17</li>
                  <li>18</li>
                  <li>19</li>
                  <li>20</li>
                  <li>21</li>
                  <li>22</li>
                  <li>23</li>
                  <li>24</li>
                  <li>25</li>
                  <li>26</li>
                  <li>27</li>
                  <li>28</li>
                  <li>29</li>
                  <li>30</li>
                  <li>31</li>
                  <li>출근</li>
                  <li>지각</li>
                  <li>연차</li>
                  <li>결근</li>
                </ul>
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
    </div>
  );
}
