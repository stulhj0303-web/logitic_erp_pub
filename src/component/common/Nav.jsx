import style from './Nav.module.css';

export default function Nav() {
    return(
            <div className={style.nav}>
                <div className={style.navLeft}>
                    <img src='/Briefcase Business.png'/>
                    <span>인사관리시스템</span> 
                </div>
                <div className={style.navRight}>
                    <ul className={style.navRlist}>
                        <li>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </div>
                <div className={style.login}>
                    <div className={style.loginBell}>
                        <img src='/Bell.png'/> <span></span>
                    </div>
                    <div className={style.loginProfile}>
                        <span>홍</span>
                    </div>
                    <ul className={style.loginInfo}>
                        <li>홍길동</li><hr/>
                        <li>인사팀</li>
                    </ul>
                    <div className={style.logout}>
                        <img src='/Log Out.png'/>
                    </div>
                </div>
            </div>)
}