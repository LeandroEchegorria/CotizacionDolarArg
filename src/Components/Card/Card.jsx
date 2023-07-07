import MostrarFecha from "../MostrarFecha/MostrarFecha";
import { PropTypes } from "prop-types";
import './Card.css';
import Table  from "react-bootstrap/Table";

const Card = (props) => {
  return (
    <div className="container">
      <h1>Cotización del Dolar en Argentina</h1>
      <p>Fecha de actualización:{props.fecha && <MostrarFecha fechas={props.fecha} />}</p>
      
      <Table striped>
        <tbody>
            <tr>
              <td>Dolar Oficial:</td>
              <td>Compra: $ {props.oficialCompra}</td>
              <td>Venta: $ {props.oficialVenta}</td>
            </tr>
            <tr>
              <td>Dolar Blue:</td>
              <td>Compra: $ {props.blueCompra}</td>
              <td>Venta: $ {props.blueVenta}</td> 
            </tr>
        </tbody>
          
      </Table>

    </div>
  )
}
Card.propTypes = {
    fecha: PropTypes.string,
    oficialCompra: PropTypes.number,
    oficialVenta: PropTypes.number,
    blueCompra:PropTypes.number,
    blueVenta:PropTypes.number,
}
export default Card;
