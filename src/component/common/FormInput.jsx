
import style from './FormInput.module.css';

export default function FormInput(){

    return(
        <div className={style.form_container}>
            <div className={style.form_header}>
                <img src="/File Pen.png" alt="" /><span>발령 입력 폼</span>
                <div style={{display:"flex"}}>
                    <img src="/User Round.png" alt="" /> 
                    <p>EMP-002 · 이영희 · 경영지원팀 · 과장</p>
                </div>
            </div>
            <div className={style.form_body}>


                <div className={style.form_data}>

                    <div className={style.data_type}>
                        <label >발령유형</label>
                        <div className={style.type_button}>
                            <button className={style.button1}>승진</button>
                            <button className={style.button2}>전보</button>
                            <button className={style.button3}>겸직</button>
                            <button className={style.button4}>기타</button>
                        </div>
                    </div>

                    <div className={style.data_date}>
                        <label>발령일</label>
                    </div>

                    <div className={style.data_num}>
                        <label>발령번호</label>
                        <input type="text" placeholder='자동생성'/>
                    </div>

                    <div className={style.data_cont}>
                        <label>발령사유</label>
                        <input type="text" placeholder='발령 사유를 입력하세요'/>
                    </div>

                </div>

                <div className={style.data_compare}>

                    <div className={style.compare_before}>
                        <div className={style.before_header}>
                            <p>발령 전</p> <span></span>
                        </div>
                        <div className={style.before_cont}>
                            <div className={style.before_cont1}>
                                <label>부서</label>
                                <p>경영지원팀</p>
                            </div>
                            <div className={style.before_cont1}>
                                <label>직급</label>
                                <p>과장</p>
                            </div>
                            <div className={style.before_cont1}>
                                <label>직책</label>
                                <p>팀원</p>
                            </div>
                        </div>
                    </div>

                    <div className={style.compare_arrow}>
                        <img src="/Arrow Right.png" alt="" />
                    </div>

                    <div className={style.compare_after}>
                        <div className={style.after_header}>
                            <p>발령 후</p> <span></span>
                        </div>
                        <div className={style.after_cont}>
                            <div className={style.after_cont1}>
                                <label>부서</label>
                                <select>
                                    <option value="전체">전체</option>
                                    <option value="인사팀">인사팀</option>
                                    <option value="경영지원팀">경영지원팀</option>
                                    <option value="개발팀">개발팀</option>
                                    <option value="영업팀">영업팀</option>
                                </select>
                            </div>
                            <div className={style.after_cont1}>
                                <label>직급</label>
                                <select>
                                    <option value="전체">전체</option>
                                    <option value="팀장">팀장</option>
                                    <option value="과장">과장</option>
                                    <option value="대리">대리</option>
                                    <option value="사원">사원</option>
                                </select>
                            </div>
                            <div className={style.after_cont1}>
                                <label>직책</label>
                                <select>
                                    <option value="전체">전체</option>
                                    <option value="팀원">팀원</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.form_addInfo}>
                    <label>비고</label>
                    <input type="text" placeholder='발령 관련 추가 사항을 입력하세요.'/>
                </div>

                <div className={style.form_addbtn}>
                    <button className={style.form_del}>
                        <img src="/X.png" alt="" />취소
                    </button>
                    <button className={style.form_down}>
                        <img src="/Save.png" alt="" />저장
                    </button>
                </div>

            </div>

            <div className={style.form_card}>
                <div className={style.card_header}>
                    <p>발령 이력</p>
                </div>
            </div>

        </div>
    )
}