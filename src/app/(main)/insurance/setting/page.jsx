import Nav from '@/component/common/Nav';
import s from './page.module.css';
import Aside from '@/component/common/Aside';
import Header from '@/component/common/Header';

export default function page(){

    // const [date, setDate] = useState(new Date());

    return(
            <div className={s.container}>

                <Nav/>

                    <div className={s.main}>

                        <Aside
                                dummy = {
                                    [
                                        {
                                            titleInfo: { iconPath: "/Banknote (3).png", titleName:"급여관리"},
                                            submenuList: [ "급여기본정보관리", "급여지급","기본수당외수당관리","급여계산","급여조회"],
                                        },
                                        {
                                            titleInfo: { iconPath: "/Shield Check (2).png", titleName:"4대보험관리"},
                                            submenuList: [ "4대보험요율표설정", "국민연금관리","건강보험관리","고용보험관리","4대보험취득/상실"],
                                        }
                                    ]
                                }
                            />

                        <div className={s.InfoMain}>

                            <div className={s.mainContainer}>

                                <Header
                                    headList={[
                                        { headli1: "급여관리" },
                                        { headli2: "4대보험관리"},
                                        { headli3: "4대보험요율표설정" },
                                        { headinfo: "연도별 4대보험 요율을 설정하고 직원별 예상 보험료를 시뮬레이션합니다."}
                                    ]}
                                />

                               <div className={s.setting_search}>
                                    <div className={s.search_day}>
                                        <button className={s.left}>
                                            <img src="/Chevron Left (1).png" alt="" />
                                        </button>
                                        <div>
                                            <img src="/Calendar (2).png" alt="" />
                                            <p>2025년</p>
                                        </div>
                                        <button className={s.right}>
                                            <img src="/Chevron Right (1).png" alt="" />
                                        </button>
                                    </div>
                                    <p className={s.setting_span}><span></span>2025년 요율 적용중</p>
                                    <p className={s.setting_edit}>
                                        <img src="/Clock (3).png" alt="" />
                                        <span>최종수정: 2025.01.01 · 홍길동</span>
                                    </p>
                                    <div className={s.setting_btn}>
                                        <button className={s.set_btn1}>2023</button>
                                        <button className={s.set_btn2}>2024</button>
                                        <button className={s.set_btn3}>2025</button>
                                    </div>
                               </div>

                               <div className={s.app_card}>
                                    <div className={s.appcard_list}>
                                        <div className={s.appcard_head}>
                                            <span></span>
                                            <p>국민연금</p>
                                            <div className={s.apphead_per} style={{color:"#1B3A6B"}}>9.0%</div>
                                        </div>
                                        <div className={s.appcard_cont}>
                                            <div className={s.appcard_info}>
                                                <img src="/Info.png" alt="" />
                                                <span>표준소득월액 기준 · 상한 590만원 / 하한 37만원</span>
                                            </div>
                                            <div className={s.appcard_user}>
                                                <div className={s.appcard_emp}>
                                                    <div className={s.appcard_text}>
                                                        <span></span>
                                                        <p>근로자</p>
                                                    </div>
                                                    <div className={s.appcard_box}>
                                                        <div className={s.appcard_box1}>4.5</div>
                                                        <div className={s.appcard_box2}>%</div>
                                                    </div>
                                                </div>
                                                <div className={s.appcard_bus}></div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className={s.appcard_list}>
                                        <div className={s.appcard_head} style={{backgroundImage:"linear-gradient(-170deg, #0F766E 25%, #14B8A6 75%)"}}>
                                            <span></span>
                                            <p>국민연금</p>
                                            <div className={s.apphead_per}  style={{color:"#0F766E"}}>7.09%</div>
                                        </div>
                                    </div>
                                    <div className={s.appcard_list}>
                                        <div className={s.appcard_head} style={{backgroundImage:"linear-gradient(-170deg, #92400E 25%, #D97706 75%)"}}>
                                            <span></span>
                                            <p>국민연금</p>
                                            <div className={s.apphead_per}  style={{color:"#92400E"}}>2.05%</div>
                                        </div>
                                    </div>
                                    <div className={s.appcard_list}>
                                        <div className={s.appcard_head} style={{backgroundImage:"linear-gradient(-170deg, #991B1B 25%, #DC2626 75%)"}}>
                                            <span></span>
                                            <p>국민연금</p>
                                            <div className={s.apphead_per}  style={{color:"#991B1B"}}>업종별</div>
                                        </div>
                                    </div>
                               </div>

                            </div>
                        </div>
                    </div>
                </div>
    )
}