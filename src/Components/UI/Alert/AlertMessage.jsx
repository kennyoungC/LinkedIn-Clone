import { Alert } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { hideAlert } from "../../../store"
import styles from "./AlertMessage.module.css"
const AlertMessage = () => {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.alert.message)
  const type = useSelector((state) => state.alert.type)

  const closeAlert = () => {
    dispatch(hideAlert())
  }

  return (
    <div
      className={`${styles.alert} bg-${type} rounded d-flex justify-content-between align-items-center gap-2 bg-opacity-75 text-white lead`}
    >
      <p className="mb-0">{message}</p>
      <button onClick={closeAlert} className="border-0 bg-transparent">
        <i className="bi bi-x-square-fill"></i>
      </button>
    </div>
  )
}

export default AlertMessage
