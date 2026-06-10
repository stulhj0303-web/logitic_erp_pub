import Nav from '@/component/common/Nav';
import s from './page.module.css';
import Aside from '@/component/common/Aside';
import Header from '@/component/common/Header';

export default function page(){
    return(
            <div className={s.container}>

                <Nav/>

                    <div className={s.main}>

                        <Aside
                                dummy = {
                                    [
                                        {
                                            titleInfo: { iconPath: "/Clock (2).png", titleName:"근태관리"},
                                            submenuList: [ "일일근태등록", "월근태현황"],
                                        },
                                        {
                                            titleInfo: { iconPath: "/Plane.png", titleName:"출장관리"},
                                            submenuList: [ "출장신청", "출장정산","출장사용현황"],
                                        },
                                        {
                                            titleInfo: { iconPath: "/Calendar.png", titleName:"휴가관리"},
                                            submenuList: [ "휴가일수설정","휴가일수계산","휴가일수신청","휴가사용현황"],
                                        }
                                    ]
                                }
                            />

                        <div className={s.InfoMain}>

                            <div className={s.mainContainer}>

                                <Header
                                    headList={[
                                        { headli1: "근태관리" },
                                        { headli2: "근태관리" },
                                        { headli3: "휴가일수계산" },
                                        { headinfo: "입사일 기준으로 직원별 발생 휴가일수를 자동 계산합니다."}
                                    ]}
                                />

                                <div className={s.calculate_search}>
                                    <div>
                                        <label>기준년도</label>
                                        <select>
                                            <option value="2026년">2026년</option>
                                            <option value="2025년">2025년</option>
                                            <option value="2024년">2024년</option>
                                            <option value="2023년">2023년</option>
                                            <option value="2022년">2022년</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>부서</label>
                                        <select style={{width:"160px"}}>
                                            <option value="전체 부서">전체 부서</option>
                                            <option value="인사팀">인사팀</option>
                                            <option value="경영지원팀">경영지원팀</option>
                                            <option value="개발팀">개발팀</option>
                                            <option value="영업팀">영업팀</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>직급</label>
                                        <select  style={{width:"140px"}}>
                                            <option value="전체 직급">전체 직급</option>
                                            <option value="부장">부장</option>
                                            <option value="과장">과장</option>
                                            <option value="대리">대리</option>
                                            <option value="사원">사원</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder='사원명 검색'/>
                                    <button className={s.search_btn}>
                                        <img src="/Search (1).png" alt="" />
                                        <span>조회</span>
                                    </button>
                                    <button className={s.rotate_btn}>
                                        <img src="/Rotate Ccw.png" alt="" />
                                        <span>초기화</span>
                                    </button>
                                </div>

                                <div className={s.calculate_result}>
                                    <div className={s.result_head}>
                                        <img src="/Calculator.png" alt="" />
                                        <span>직원별 휴가 계산 결과</span>
                                        <p>총 5명</p>
                                    </div>
                                    <ul className={s.result_list}>
                                        <li>사원번호</li>
                                        <li>성명</li>
                                        <li>부서</li>
                                        <li>직급</li>
                                        <li>입사일</li>
                                        <li>근속연수</li>
                                        <li>기본일수</li>
                                        <li>가산일수</li>
                                        <li>이월일수</li>
                                        <li>총 부여일수</li>
                                        <li>사용일수</li>
                                        <li>잔여일수</li>
                                        <li>상태</li>
                                    </ul>
                                    <ul className={s.result_list} style={{backgroundColor:"white"}}>
                                        <li>사원번호</li>
                                        <li>성명</li>
                                        <li>부서</li>
                                        <li>직급</li>
                                        <li>입사일</li>
                                        <li>근속연수</li>
                                        <li>기본일수</li>
                                        <li>가산일수</li>
                                        <li>이월일수</li>
                                        <li>총 부여일수</li>
                                        <li>사용일수</li>
                                        <li>잔여일수</li>
                                        <li>상태</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}