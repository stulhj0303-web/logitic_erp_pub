import style from './Aside.module.css';

export default function Aside({dummy}){

    return(


    <div className={style.peopleInfo}>
        {dummy.map((item,idx) => (
            <ul className={style.InfoList}>
                <li><img src={item.titleInfo.iconPath}/> {item.titleInfo.titleName}</li>
                
                {item.submenuList.map((subItem, subIdx) => (
                            <li><span></span>{subItem}</li>
                        ))}

            </ul>
        ))}


        </div>
    )
}