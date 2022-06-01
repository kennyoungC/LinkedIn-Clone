import { Alert } from "react-bootstrap"
import { useSelector } from "react-redux"
import styles from "./AlertMessage.module.css"
const AlertMessage = () => {
  const message = useSelector((state) => state.alert.message)
  const type = useSelector((state) => state.alert.type)
  return (
    <Alert className={styles.alert} variant={type}>
      {message}
    </Alert>
  )
}

export default AlertMessage
