import { Send } from '@material-ui/icons'
import React from 'react'
import styles from "./Newsletter.module.css"

const Newsletter = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Hộp Thư Góp Ý</h1>
      <div className={styles.Description}>Hãy gửi ý kiến của bạn vào hộp thư này.</div>
      <div className={styles.InputContainer}>
        <input className={styles.Input} placeholder="Email của bạn"></input>
        <button className={styles.Button}>
            <Send/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
