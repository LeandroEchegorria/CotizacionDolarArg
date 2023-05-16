import PropTypes from 'prop-types';

const MostrarFecha = (props) => {
    
        const fecha = new Date(props.fechas);
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const anio = fecha.getFullYear();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const segundos = fecha.getSeconds();
        
        const hsFormateada = hora < 10 ? `0${hora}` : hora;
        const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
        const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
        const fechaFormateada = `${dia}/${mes}/${anio}`;
        const horaFormateada= `${hsFormateada}:${minutosFormateados}:${segundosFormateados}`;
        
      
  return (
    <p>
      {fechaFormateada} a las {horaFormateada}
    </p>
  )
}
MostrarFecha.propTypes = {
    fechas: PropTypes.string.isRequired,
  };

export default MostrarFecha
