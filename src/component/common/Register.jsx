'use client'
import s from './Register.module.css';
import { useEffect, useState } from 'react';
import baseApi from '@/api/baseApi';

export default function Register({register}){

    return(
        <>
            <ul className={s.register_list}>
                <li>NO</li>
                <li>발령번호</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>발령유형</li>
                <li>발령전 부서/직급</li>
                <li>발령후 부서/직급</li>
                <li>발령일</li>
                <li>등록자</li>
                <li>관리</li>
            </ul>
        </>
    )
}