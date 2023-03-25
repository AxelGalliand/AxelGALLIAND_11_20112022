import styles from "./Rating.module.css"

export function Rating(props) {

  let result = [];

  for (let i = 0; i < props.count; i += 1) {
    result.push(<svg className={styles["fullStar"]} key={`${i}-full`}  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
    </svg>);
  }

  for (let i = 0; i < 5 - props.count; i += 1) {
    result.push(<svg className={styles["emptyStar"]} key={`${i}-empty`}  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
    </svg>);
  }

  return <div className={styles["rating"]}>
          {result}
         </div>
}