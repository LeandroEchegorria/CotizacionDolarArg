import { useState, useEffect } from "react";
import MostrarFecha from "../MostrarFecha/MostrarFecha";


const Fetch = () => {
  const [datos, setDatos] = useState({});

  useEffect(() => {
    async function fetchData() {
      
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        setDatos(data);
        
      }
    
    fetchData();
  }, []);  
  
  

    
  return (
    <div>
      <h2>Cotización del Dolar en Argentina</h2>
      <h4>Fecha de actualización:{datos.last_update && <MostrarFecha fechas={datos.last_update} />}</h4>
          <div>
            <li>Dolar Oficial:
              <p>Compra: ${datos.oficial?.value_sell}</p>
              <p>Venta: ${datos.oficial?.value_buy}</p>
            </li>
            <li>Dolar Blue:
              <p>Compra: ${datos.blue?.value_sell}</p>
              <p>Venta: ${datos.blue?.value_buy}</p>
            </li>



          </div>
          
      
    </div>
  )
}

export default Fetch
