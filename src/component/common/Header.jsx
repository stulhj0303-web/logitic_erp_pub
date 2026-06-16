'use client'

import style from './Header.module.css';
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function Header({headList}){

    // 모달 오픈
    const [open, setOpen] = useState(false);
    
    const openPostcode = () => {
        if (!window || window === undefined) return;
        
        const postCode = new window.daum.Postcode({
            oncomplete(data) {
                // 여기에 주소 검색 완료시에 데이터 내려옴.
                // setter를 이용해 설정하자
                console.log(data.zonecode);
                console.log(data.address);
            },
        });
        
        postCode.open();
        
    };
    
    return(
    
    <div>

        <div className={style.mainHeader}>
            <img src="/House.png" alt="Home" />
            {headList[0]?.headli1 && (
                <div style={{display:'flex'}}>
                    <img src="/Chevron Right.png" alt="" />
                    <span>{headList[0].headli1}</span>
                </div>
            )}
            {headList[1]?.headli2 && (
                <div style={{display:'flex'}}>
                    <img src="/Chevron Right.png" alt="" />
                    <span>{headList[1].headli2}</span>
                </div>
            )}
            {headList[2]?.headli3 && (
                <div style={{display:'flex'}}>
                    <img src="/Chevron Right.png" alt="" />
                    <p>{headList[2].headli3}</p>
                </div>
            )}
        </div>

        <div className={style.mainTitle}>
            <div className={style.mainLtitle}>
                {headList.map((subli, subidx)=>(
                    <h2 key={subidx} className={style.title}>{subli.headli3}</h2>
                ))}
                
                {headList.map((headin, sidx)=>(
                    <p key={sidx}>{headin.headinfo}</p>
                ))}
            </div>
            
            <div className={style.mainRtitle}>
                <button className={style.download}><img src="
                /Download.png" />엑셀 다운로드</button>
                <button className={style.plus} onClick={() => {
                    setOpen(true);
                }}>
                    <img src="/Plus.png" />
                    신규등록
                </button>
                
            </div>
        </div>
        
        {/*모달*/}
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[600px]">
                <DialogHeader>
                    <DialogTitle>신규 등록</DialogTitle>
                </DialogHeader>
                <div>
                    <button onClick={() => {
                        openPostcode()
                    }}>
                        주소검색
                    </button>
                </div>
            </DialogContent>
        </Dialog>
        
        </div>
    )
}