import "./diseño/CambioMovimiento.css";

import NumberFormat from 'react-number-format';

const CambioMovimiento = (props) => {
  return (
      <div className="card-header" key={props.movement.id}>
        <div className="form-group row">
            <div className="col-sm-8">
              <span>
                <img src={require('./img/iconEditar2.png')} width={25} onClick={() => props.actualizar(props.movement)} />
                <img src={require('./img/iconBorrar.png')} width={25} onClick={() => props.eliminar(props.movement.id)} />
                {props.movement.nombre} 
              </span>
            </div>
            <div className="col-sm-4">
              <div className={props.movement.tipoMovimiento == 'activo' ? "movement-type movement-deposit" : 'movement-type movement-expense'}> 
                <NumberFormat value={props.movement.valor} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              </div>
            </div>
        </div>
      </div>
           
  );
};

export default CambioMovimiento;