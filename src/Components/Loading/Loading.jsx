import { Spinner } from "react-bootstrap"


const Loading = () => {
  return (
    <div>
      <p><Spinner animation="border"/></p>
      Actualizando datos, por favor espere....
        
    </div>
  )
}

export default Loading
