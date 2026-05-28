import style from './Header.module.css';

export default function Header({headList}){

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
                    <h2 className={style.title}>{subli.headli3}</h2>
                ))}
                
                {headList.map((headin, sidx)=>(
                    <p>{headin.headinfo}</p>
                ))}
            </div>
            
            <div className={style.mainRtitle}>
                <button className={style.download}><img src="
                /Download.png" />엑셀 다운로드</button>
                <button className={style.plus}><img src="/Plus.png" />신규등록</button>
            </div>
        </div>
        
        </div>
    )
}