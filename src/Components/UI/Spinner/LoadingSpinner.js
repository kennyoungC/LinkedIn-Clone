import styles from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return (
    <div className={styles["dot-spinner"]}>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
      <div className={styles["dot-spinner__dot"]}></div>
    </div>
  )
}

export default LoadingSpinner
