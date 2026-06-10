'use client';

import s from './Certificate.module.css';

export default function Certificate({cer}){

    return(
        <div className={s.receipt}>
            <div className={s.receipt_head}>
                <img src="/Clock (1).png" alt="" />
                <p>나의 발급 이력</p>
                <select>
                    <option value="최근 3개월">최근 3개월</option>
                    <option value="최근 6개월">최근 6개월</option>
                    <option value="최근 12개월">최근 12개월</option>
                </select>
                <span>총 4건</span>
            </div>
            <div className={s.receipt_cont}>

                <ul className={s.receipt_list} style={{borderBottom:"1px solid #E5E7EB"}}>
                    <li>NO</li>
                    <li>발급일시</li>
                    <li>증명서 종류</li>
                    <li>용도</li>
                    <li>제출처</li>
                    <li>언어</li>
                    <li>부수</li>
                    <li>발급번호</li>
                    <li>관리</li>
                </ul>

                {cer.map((item, index) => (
                <ul key={index} className={s.receipt_list} style={{backgroundColor:'white', borderBottom:"1px solid #E5E7EB"}}>
                    <li>{index+1}</li>
                    <li>{item.date}</li>
                    <li>{item.type}</li>
                    <li>{item.use}</li>
                    <li>{item.submmit}</li>
                    <li>{item.lang}</li>
                    <li>{item.page}</li>
                    <li>{item.number}</li>
                    <li>{item.manage}</li>
                </ul>
            ))}
            </div>
        </div>
    )
}