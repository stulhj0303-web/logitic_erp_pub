'use client';

import style from './DB.module.css';
import { useEffect, useState } from 'react';
import baseApi from '@/api/baseApi';

export default function DB({data}){

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        // 1. api를 요청해서 받는다. (await랑 async는 같이 사용)
        const getEmployee = async () => {
            const response = await baseApi.get("/api/v1/employees");
            console.log(response.data.data);

            // 2. useState 넣는다.
            setEmployee(response.data.data);
        }

        getEmployee();


        // 3. useState에 있는 데이터를 렌더링 시킨다.
    },[])

    return(


        

        <div className={style.mainDB}>
            <ul className={style.maindbList}>
                <li>NO</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서</li>
                <li>직급</li>
                <li>입사일</li>
                <li>연락처</li>
                <li style={{textAlign:'center'}}>이메일</li>
                <li>재직상태</li>
                <li>관리</li>
            </ul>

            {data.map((item, index) => (
                <ul className={style.maindbList}>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li>{item}</li>
                    <li style={{textAlign:'center'}}>{item}</li>
                    <li></li>
                    <li></li>
                </ul>
            ))}

            <ul className={style.maindbListlast}>
                <li>총 4건</li>
                <li><img src="Chevron Left.png" alt="" /></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li><img src="Chevron Right.png" alt="" /></li>
            </ul>
        </div>
    )
}