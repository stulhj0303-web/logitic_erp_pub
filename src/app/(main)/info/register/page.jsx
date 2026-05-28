import style from './page.module.css'
import Nav from '@/component/common/Nav'
import Aside from '@/component/common/Aside'
import Header from '@/component/common/Header'
import Search1 from '@/component/common/Search1'
import FormInput from '@/component/common/FormInput'
import DB from '@/component/common/DB'


export default function page(){

    return(
        <div className={style.container}>

            <Nav/>

            <div className={style.main}>

               <Aside
                    dummy = {
                        [
                            {
                                titleInfo: { iconPath: "/User.png", titleName:"인사정보"},
                                submenuList: [ "인사정보등록", "사원명수/인사기록카드", "인사발령등록"],
                            },
                            {
                                titleInfo: { iconPath: "/Heart Handshake.png", titleName:"경조비관리"},
                                submenuList: [ "경조비신청", "경조비신청현황"],
                            },
                            {
                                titleInfo: { iconPath: "/File Text.png", titleName:"증명서관리"},
                                submenuList: [ "증명서발급"],
                            }
                        ]
                    }
                />

                <div className={style.InfoMain}>

                    <div className={style.mainContainer}>

                        <Header
                            headList={[
                                { headli1: "인사관리" },
                                { headli2: "인사정보" },
                                { headli3: "인사발령등록" },
                                { headinfo: "사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다."}
                            ]}
                        />

                        <Search1/>
                        
                        <FormInput/>

                        <DB
                            data = {
                                [
                                    'NO',
                                    '사원번호',
                                    '성명',
                                    '부서',
                                    '직급',
                                    '입사일',
                                    '연락처',
                                    '이메일',
                                    '재직상태',
                                    '관리'
                                ]
                            }
                        />
                    </div>

                </div>

            </div>
        </div>
    )

}