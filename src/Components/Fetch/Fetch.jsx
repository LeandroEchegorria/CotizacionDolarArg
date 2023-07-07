import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Fetch = () => {
  const [datos, setDatos] = useState({});
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
        const data = await response.json();
        setDatos(data);
        setIsLoading(false);
        console.log(datos)
      }
    fetchData();
    }, 0.1*60*1000)
    return () => {
      clearInterval(interval);
    };
  }, [datos.last_update]);  

  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : (
        <Card 
      fecha={datos.last_update} 
      oficialCompra={datos.oficial?.value_buy}
      oficialVenta={datos.oficial?.value_sell}
      blueCompra={datos.blue?.value_buy}
      blueVenta={datos.blue?.value_sell}
      />
      )}      
    </div>
  )
}

export default Fetch
