import s from './Appli.module.css';

export default function Appli(){

    return(
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
                                <p>EMP-002</p><img src="/Lock.png" alt="" />
                            </div>
                        </div>
                        <div className={s.main_cont}>
                            <label>성명</label>
                            <div>
                                <p>이영희</p><img src="/Lock.png" alt="" />
                            </div>
                        </div>
                        <div className={s.main_cont}>
                            <label>부서</label>
                            <div>
                                <p>경영지원팀</p><img src="/Lock.png" alt="" />
                            </div>
                        </div>
                        <div className={s.main_cont}>
                            <label>직급</label>
                            <div>
                                <p>과장</p><img src="/Lock.png" alt="" />
                            </div>
                        </div>
                        <div className={s.main_cont}>
                            <label>신청일</label>
                            <div>
                                <p>2025.07.01</p><img src="/Lock.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <span className={s.appli_hr}></span>

                    <div className={s.info_head}>
                        <span></span>
                        <p>경조 구분</p>
                        <p style={{color: "#EF4444"}}>*</p>
                    </div>

                    <div className={s.info_main}>
                        <button className={s.marry}>
                            <img src="/Heart.png" alt="" />
                            <p style={{color:"white"}}>본인결혼</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB"}}>
                            <img src="/Heart (1).png" alt="" />
                            <p>자녀결혼</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB", borderLeft: "0"}}>
                            <img src="/Baby.png" alt="" />
                            <p>출산</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB", borderLeft: "0"}}>
                            <img src="/Flower 2.png" alt="" />
                            <p>부모사망</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB", borderLeft: "0"}}>
                            <img src="/Flower 2.png" alt="" />
                            <p>배우자사망</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB", borderLeft: "0"}}>
                            <img src="/Cake Slice.png" alt="" />
                            <p>부모회갑</p>
                        </button>
                        <button style={{border: "1px solid #D1D5DB", borderLeft: "0", borderTopRightRadius:"6px", borderBottomRightRadius:"6px"}}>
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
                            <label style={{display:"flex"}}>대상자 성명 <p className={s.star}> *</p></label>
                            <input type="text" placeholder='성명을 입력하세요'/>
                        </div>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>관계<p className={s.star}> *</p></label>
                            <select>
                                <option value="본인">본인</option>
                            </select>
                        </div>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>경조일<p className={s.star}> *</p></label>
                            <input type="text" placeholder='성명을 입력하세요'/>
                        </div>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>경조장소</label>
                            <input type="text" placeholder='장소를 입력하세요 (선택)' style={{width:"220px"}}/>
                        </div>
                    </div>

                    <span className={s.appli_hr}></span>

                    <div className={s.info_head}>
                        <span></span>
                        <p>지급 계좌</p>
                        <p style={{color: "#EF4444"}}>*</p>
                    </div>

                    <div className={s.info_main}>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>은행</label>
                            <select>
                                <option value="국민은행">국민은행</option>
                                <option value="신한은행">신한은행</option>
                                <option value="농협은행">농협은행</option>
                            </select>
                        </div>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>계좌번호</label>
                            <input type="text" placeholder='-없이 숫자만 입력' style={{width:"240px"}}/>
                        </div>
                        <div className={s.main_cont}>
                            <label style={{display:"flex"}}>예금주</label>
                            <input type="text" placeholder='성명을 입력하세요'/>
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

                </div>
            </div>
        </div>
    )
}