"use client";
import style from "./Aside.module.css";
import { useRouter } from "next/navigation";

export default function Aside({ dummy }) {
  const router = useRouter();
  return (
    <div className={style.peopleInfo}>
      {dummy.map((item, idx) => (
        <ul key={idx} className={style.InfoList}>
          <li key={idx}>
            <img src={item.titleInfo.iconPath} /> {item.titleInfo.titleName}
          </li>

          {item.submenuList.map((subItem, subIdx) => (
            <li key={subIdx} onClick={() => router.push(subItem.path)}>
              <span></span>
              {subItem.name}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
