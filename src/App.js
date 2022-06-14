import { useState, useEffect } from "react";

import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import Movimiento from './components/Movimiento';


import './components/diseño/App.css';

const App = () => {



  const [headerEstado, setHeaderEstado] = useState({ saldoInicial: "", saldoFinal: "" });
  const [movimientoEstado, setmovimientoEstado] = useState({ tipoMovimiento: '', nombre: '', valor: '', edit: false, id: ''});
  const [movimiento, setmovimiento] = useState([]);

  useEffect(() => {
    var valor = headerEstado.saldoInicial !== '' ? parseFloat(headerEstado.saldoInicial) : 0;

    for (const movement of movimiento){
      if (movement.tipoMovimiento === 'pasivo') {
        valor =valor- parseFloat(movement.value);
      }else if (movement.tipoMovimiento === 'activo') {
        valor =valor+ parseFloat(movement.value);
      }
    }

    setHeaderEstado({...headerEstado, saldoFinal: String(valor)});

  }, [headerEstado.saldoInicial, movimiento]);

  return (
    <div className="grid-x grid-margin-y grid-padding-y app-content">
  
      <div className="cell small-8 small-offset-2 xcard">

        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <Encabezado
              headerEstado={headerEstado}
              setHeaderEstado={setHeaderEstado}
            />
          </div>
        </div>
        
        <br/>
        
        <div className="grid-x grid-padding-x">
          <div className="cell small-6">
            <Formulario
              movimiento={movimiento}
              setmovimiento={setmovimiento}       
              headerEstado={headerEstado}
              setHeaderEstado={setHeaderEstado}
              movimientoEstado={movimientoEstado}
              setmovimientoEstado={setmovimientoEstado}
            />
          </div>

          <div className="cell small-6">
            <Movimiento
              movimiento={movimiento}
              setmovimiento={setmovimiento}
              movimientoEstado={movimientoEstado}
              setmovimientoEstado={setmovimientoEstado}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
