'use client';
import s from './WorkBox.module.css';
import { useEffect, useState } from 'react';
import baseApi from '@/api/baseApi';

export default function WorkBox({workList}){
    
    const [worklist, setWorkList] = useState([]);

    useEffect(() => {
        const getWorkList = async () => {
            const response = await baseApi.get("/api/v1/employees");
            console.log(response.data.data);

            setWorkList(response.data.data);
        }

        getWorkList();


    },[])

    return(
    <>
        <ul className={s.workBox_li} style={{backgroundColor:'#F1F5F9'}}>
            <li><input type="checkbox" checked/></li>
            <li>사원번호</li>
            <li>성명</li>
            <li>부서</li>
            <li>직급</li>
            <li>근태유형</li>
            <li>출근시간</li>
            <li>퇴근시간</li>
            <li>OT</li>
            <li>비고</li>
            <li>관리</li>
        </ul>
        
        {workList.map((item, index) => (
            <ul className={s.workBox_li}>
                <li><input type="checkbox"/></li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
                <li>{item}</li>
            </ul>
        ))}
    </>
    )
}