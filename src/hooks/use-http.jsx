import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { hideAlert, showAlert } from "../store"

const useHttp = () => {
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()
  const sendRequest = useCallback(async (requestConfiq, applyData) => {
    setIsEditing(true)
    try {
      const response = await fetch(requestConfiq.url, {
        method: requestConfiq ? requestConfiq.method : "GET",
        body: requestConfiq ? JSON.stringify(requestConfiq.body) : null,
        headers: requestConfiq ? requestConfiq.headers : {},
      })
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      const data = await response.json()
      applyData(data)
      // console.log(data)
      setIsEditing(false)
    } catch (error) {
      console.log(error.message)
      setIsEditing(false)
      dispatch(showAlert({ message: error.message, type: "danger" }))
      setTimeout(() => {
        dispatch(hideAlert())
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    sendRequest,
    isEditing,
  }
}

export default useHttp
