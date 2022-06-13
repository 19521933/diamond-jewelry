import { Send } from '@material-ui/icons'
import React from 'react'
import styles from "./Newsletter.module.css"

const Newsletter = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Đăng kí liên hệ</h1>
      <div className={styles.Description}>Hãy gửi email của bạn để cập nhật những thông tin mới nhất về chúng tôi.</div>
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
