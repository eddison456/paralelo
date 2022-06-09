import "./diseño/Form.css";
import { v4 as uuidv4 } from 'uuid';


const Form = (props) => {

  const controlador = (e) => {
    e.preventDefault();
    props.setmovimientoEstado({...props.movimientoEstado, [e.target.name]: e.target.value});
  };


  const ActualizarMovimiento = () => {
   
    const reg = new RegExp('^[a-zA-Z0-9]+$');
    const numerico = new RegExp('^[0-9]+$');
    if 
   (props.headerEstado.saldoInicial === ''){
    alert("El saldo inicial no debe tener un valor");
  }else if (props.movimientoEstado.tipoMovimiento === '') {
    alert("Seleccione un tipo de movimiento");
  } else if (props.movimientoEstado.name === '') {
    alert("Debe ingresar un movimiento ");
  }else if (!reg.test(props.movimientoEstado.name)){
    props.setmovimientoEstado({...props.movimientoEstado,name: ''});
    alert("El nombre del tipo de movimiento puede tener letras y numeros");
  }else if(!numerico.test(props.movimientoEstado.value)){
    props.setmovimientoEstado({...props.movimientoEstado,value: ''});
    alert("La cantidad no permite letras ni valores negativos");
  }else if(props.movimientoEstado.value<=0){
    props.setmovimientoEstado({...props.movimientoEstado,value: ''});
    alert("La cantidad ingresada debe ser mayor a cero");
  }else if(props.movimientoEstado.tipoMovimiento === 'pasivo'){
    if (parseFloat(props.headerEstado.saldoFinal) - parseFloat(props.movimientoEstado.value) < 0){
      alert("El campo no recibe valores negativos");
  
    }else{
      const valores = props.movimiento.filter(item => item.id !== props.movimientoEstado.id);
      const valorActualizado = {
        id: props.movimientoEstado.id,
        tipoMovimiento: props.movimientoEstado.tipoMovimiento,
        name: props.movimientoEstado.name,
        value: props.movimientoEstado.value
      };
  
      valores.push(valorActualizado);
  
      props.setmovimiento(valores);
      props.setmovimientoEstado({ tipoMovimiento: '', name: '', value: '', edit: false, id: ''});
  
      alert("Registro actualizado correctamente");

    }
    }else{
    const valores = props.movimiento.filter(item => item.id !== props.movimientoEstado.id);

    const valorActualizado= {
      id: props.movimientoEstado.id,
      tipoMovimiento: props.movimientoEstado.tipoMovimiento,
      name: props.movimientoEstado.name,
      value: props.movimientoEstado.value
    };

    valores .push(valorActualizado);

    props.setmovimiento(valores );
    props.setmovimientoEstado({ tipoMovimiento: '', name: '', value: '', edit: false, id: ''});

    alert("Registro actualizado correctamente");

  }
}



 

  const agregarMovimiento = () => {

   const reg = new RegExp('^[a-zA-Z0-9]+$');
   const numerico = new RegExp('^[0-9]+$');
   
   if 
   (props.headerEstado.saldoInicial === ''){
    alert("El saldo inicial no debe tener un valor");
  }else if (props.movimientoEstado.tipoMovimiento=== '') {
    alert("Seleccione un tipo de movimiento");
  } else if (props.movimientoEstado.name === '') {
    alert("Debe ingresar un movimiento ");
  }else if (!reg.test(props.movimientoEstado.name)){
    props.setmovimientoEstado({...props.movimientoEstado,name: ''});
    alert("El nombre del tipo de movimiento puede tener letras y numeros");
  }else if(!numerico.test(props.movimientoEstado.value)){
    props.setmovimientoEstado({...props.movimientoEstado,value: ''});
    alert("La cantidad no permite letras ni valores negativos");
  }else if(props.movimientoEstado.value<=0){
    props.setmovimientoEstado({...props.movimientoEstado,value: ''});
    alert("La cantidad ingresada debe ser mayor a cero");
  }else if(props.movimientoEstado.tipoMovimiento === 'pasivo'){
    console.log("entre a la condicion ")
    if (parseFloat(props.headerEstado.saldoFinal) - parseFloat(props.movimientoEstado.value) < 0){
 
  
    }else{
      const valorAgregado = {
        id: uuidv4(),
        tipoMovimiento: props.movimientoEstado.tipoMovimiento,
        name: props.movimientoEstado.name,
        value: props.movimientoEstado.value
      };
  
      
  
      props.setmovimiento([...props.movimiento, valorAgregado]);
  
      props.setmovimientoEstado({ tipoMovimiento: '', name: '', value: '', edit: false});

      alert("Se almaceno el registro de forma correcta");

    }
  }else{
    
    const valorAgregado = {
      id: uuidv4(),
      tipoMovimiento: props.movimientoEstado.tipoMovimiento,
      name: props.movimientoEstado.name,
      value: props.movimientoEstado.value
    };

  

    props.setmovimiento([...props.movimiento, valorAgregado]);

    props.setmovimientoEstado({ tipoMovimiento: '', name: '', value: '', edit: false});
    
    alert("Se almaceno el registro de forma correcta");
  }
    

  }

 

  return (

      <div className="card mb-3 bg-right">
          <div className="card-body">
            Registro
          </div>

          <div className="col-sm-10">
            <br/>
              <div className="col-sm-14">
                
                  <div className="col-sm-6">
                    <label>Tipo de movimiento: </label>
                  </div>
                  <div className="col-sm-14">
                    <select name="tipoMovimiento" onChange={controlador} value={props.movimientoEstado.tipoMovimiento} >
                      <option value={''}>Seleccione...</option>
                      <option value={'pasivo'}>Gasto</option>
                      <option value={'activo'}>Ingreso</option>
                     
                    </select>
                  </div>
               
              </div>

              <br/>
              <br/>

              <div className="col-sm-10">
                
                  <div className="col-sm-18">
                    <label>Nombre: </label>
                  </div>
                  <div className="col-sm-40">
                    <input type="text" name="name" onChange={controlador} value={props.movimientoEstado.name} />
                  </div>
               
              </div>

              <div className="col-sm-20">
                
                  <div className="col-sm-10">
                    <label>Cantidad: </label>
                  </div>
                  <div className="col-sm-10">
                    <input type="text" name="value" onChange={controlador} value={props.movimientoEstado.value}  />
                  </div>
                
              </div>

              <div className="cell small-1000">
               
                  <div  align ="right">
                  <div className="mb-0 text-white lh-100">
                    {!props.movimientoEstado.edit &&
                      <button className="button primary" onClick={agregarMovimiento}>Guardar</button>
                    }
                    {props.movimientoEstado.edit &&
                      <button className="button primary" onClick={ActualizarMovimiento}>Actualizar</button>
                    }

                    <div className="small-50 cell">
                    <button className="button secondary">Cancelar</button>
                  </div>
                  </div>
                  </div>
                </div>
          </div>
        </div>


  );
};

export default Form;