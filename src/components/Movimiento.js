import { useEffect, useState } from "react";
import "./diseño/Movimiento.css";

import CambioMovimiento from './CambioMovimiento';


const Movimiento = (props) => {
  const [cambioFiltro,setCambioFiltro] = useState({tipoMovimiento: '', filtro: ''});
  const [movimientoFiltro, setMovimientoFiltro] = useState([]);

  const controlador = (e) => {
    setCambioFiltro({...cambioFiltro, [e.target.name]: e.target.value});
  }

  const eliminar = (id) => {
    const valor = props.movimiento.filter(e => e.id !== id);
    props.setmovimiento(valor);
  }

  const actualizar = (valor) => {
    console.log("recorte")
    valor.edit = true;
    props.setmovimientoEstado(valor);
  }

  useEffect(() => {
    console.log(props.movimiento)
   
      setMovimientoFiltro(props.movimiento.filter(e => e.nombre.includes(cambioFiltro.filtro) && (e.tipoMovimiento == cambioFiltro.tipoMovimiento || cambioFiltro.tipoMovimiento == '') ));
    
   
  }, [cambioFiltro, props.movimiento]);

  return (
   
      <div className="color"> 
      <div className="card mb-3 bg-light">
          <div className="card-body ">
          Listado Movimientos 
            <span className="notification">{movimientoFiltro.length}</span>
          </div>
        </div>
        <div className="form-group row">
            <br/>
              <div className="col-sm-4">
                <input type="text" name={'filtro'} onChange={controlador} />
              </div>
              <div className="col-sm-6">
                <input type="radio" name="tipoMovimiento" onChange={controlador} value={''}/> Todos
                &nbsp;
                <input type="radio" name="tipoMovimiento" onChange={controlador} value={'pasivo'}/> Gastos
                &nbsp;
                <input type="radio" name="tipoMovimiento" onChange={controlador} value={'activo'}/> Ingresos
              </div>

            <br/>

            {movimientoFiltro.map((movement) => (
              <CambioMovimiento
                movement={movement}
                key={movement.id}
                eliminar={eliminar}
                actualizar={actualizar}
              />
            ))}
        </div>
        <br/>
      </div>

  );
};

export default Movimiento;