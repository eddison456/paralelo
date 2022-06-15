import {  useEffect } from "react";


const Encabezado = (props) => {
 

  const controlador = (e) => {
    e.preventDefault();
    props.setHeaderEstado({...props.headerEstado, [e.target.name]: e.target.value});
  };

  useEffect(() => {

    const numerico = new RegExp('^[0-9]+$');

    const valor = props.headerEstado.saldoInicial.replace(numerico);
    props.setHeaderEstado({...props.headerEstado, saldoInicial: valor});
  }, [props.headerEstado.saldoInicial]);

  return (
   
    <div className="card-body">
     
      <div className="col-sm-10">
        <img src={require('./img/iconoapp.png')} width={100} />
        <h2 class="card-title">Ingresos Y Gastos PDP</h2>
      </div>
          <div className="mb-0 text-white lh-10">
              <div  align ="right">
                <label>
                  Saldo inicial
                  <input type="text" name="saldoInicial" onChange={controlador} value={props.headerEstado.saldoInicial} />
                </label>
              </div>
             
              <div className="mb-0 text-white lh-10">
              <div  align ="right">
                <label>
                  Saldo final
                  <input type="text" value={props.headerEstado.saldoFinal} />
                </label>  
                </div>
                </div> 
              </div>
              </div>

  );
};

export default Encabezado;