import s from "./page.module.css";
export default function page() {
  return (
    <div className={s.modal}>
      <div className={s.modal_header}>
        <img src="/Receipt Text (3).png" alt="" />
        <div className={s.modal_header_text}>
          <span>급여명세서</span>
          <p>Salary Statement</p>
        </div>
        <div className={s.modal_header_date}>2025년 7월분</div>
      </div>
      <div className={s.modal_cont}>
        <div className={s.modal_company}>
          <img src="/Logo Mark.png" alt="" />
        </div>
      </div>
    </div>
  );
}
