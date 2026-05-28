import NavLog from '@/component/common/NavLog';
import s from './page.module.css';

export default function page(){

    return(
            <div className={s.allcontainer}>
                
                <div className={s.maincontainer}>
                    <NavLog/>

                    <div className={s.main}>

                        <div className={s.mainLeft}>
                            <p style={{display:"flex"}} className={s.leftP}>
                                <img src="/Shield Check.png" alt="" />
                                <p>Enterprise HR Solution</p>
                            </p>
                            <div className={s.leftTitle}>
                                <p>HRMaster와 함께</p>
                                <span>인사관리를 혁신하세요</span>
                            </div>
                            <p className={s.leftcont}>지금 가입하고 강력한<br />인사관리 도구를 경험해보세요.</p>

                            <div className={s.leftbutton}>
                                <div className={s.buttonLi}>
                                    <p className={s.img}><img src="/Circle Check.png" alt="" /></p>
                                    <div className={s.buttontext}>
                                        <span>무제한 직원 등록 및 관리</span>
                                    </div>
                                </div>
                                <div className={s.buttonLi}>
                                    <p className={s.img}><img src="/Circle Check.png" alt="" /></p>
                                    <div className={s.buttontext}>
                                        <span>자동화된 급여 계산 및 신고</span>
                                    </div>
                                </div>
                                <div className={s.buttonLi}>
                                    <p className={s.img}><img src="/Circle Check.png" alt="" /></p>
                                    <div className={s.buttontext}>
                                        <span>실시간 근태 현황 모니터링</span>
                                    </div>
                                </div>
                                <div className={s.buttonLi}>
                                    <p className={s.img}><img src="/Circle Check.png" alt="" /></p>
                                    <div className={s.buttontext}>
                                        <span>강력한 보안 및 권한 관리</span>
                                    </div>
                                </div>
                                <div className={s.buttonLi2}>
                                    <p className={s.imgGift}><img src="/Gift.png" alt="" /></p>
                                    <span className={s.giftspan}>30일 무료 체험 제공</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.mainRight}>
                            <div className={s.rightcont}>
                                <p className={s.rightTitle}>회원가입</p>
                                <span style={{fontSize:"15px", color:"#6B7280"}}>계정을 만들어 인사관리를 시작하세요</span>
                                <div className={s.rightinput}>
                                    <div className={s.rightIn}>
                                        <label>성</label>
                                        <input type="text" placeholder='성'/>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>이름</label>
                                        <input type="text" placeholder='이름'/>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>사번</label>
                                        <input type="text" placeholder='EMP-0001'/>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>부서</label>
                                        <select className={s.rightInOp}>
                                            <option value="소속 부서 선택">소속 부서 선택</option>
                                            <option value="경영팀">경영팀</option>
                                            <option value="마케팅팀">마케팅팀</option>
                                            <option value="홍보팀">홍보팀</option>
                                        </select>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>직급</label>
                                        <select className={s.rightInOp}>
                                            <option value="직급 선택">직급 선택</option>
                                            <option value="부장">부장</option>
                                            <option value="팀장">팀장</option>
                                            <option value="대리">대리</option>
                                            <option value="사원">사원</option>
                                        </select>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>회사 이메일</label>
                                        <input type="text" placeholder='company@example.com'/>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>비밀번호</label>
                                        <input type="password" placeholder='비밀번호 입력'/>
                                    </div>
                                    <div className={s.rightIn}>
                                        <label>비밀번호 확인</label>
                                        <input type="text" placeholder='비밀번호 재입력'/>
                                    </div>
                                </div>
                                <div className={s.password}>
                                    <img src="/Info1.png" alt="" />
                                    <p>영문, 숫자, 특수문자 포함 8자리 이상</p>
                                </div>
                                <div className={s.checkbox}>
                                    <input type="checkbox" />
                                    <p>이용약관 및 개인정보 처리 방침에 동의합니다</p>
                                    <span>내용 보기</span>
                                </div>
                                <button className={s.signup}>
                                    <img src="/User Plus.png" alt="" />
                                    <p>회원가입</p>
                                </button>
                                <div className={s.signcheck}>
                                    <p>이미 계정이 있으신가요?</p>
                                    <span>로그인하기</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

}