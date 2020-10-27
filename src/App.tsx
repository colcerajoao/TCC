import React from 'react';
import './styles/global.css';
import './styles/pages/style.css';


function App() {
  return (
    <div id="page-landing">
        <div id="home">
          <h1>Pre Diagnóstico Animal</h1>
              </div>
                <div>     
                  <select id="select" className="placeholder">
                          <option value="hide">Escolha um Animal</option>
                          <option value="dog">Cachorro</option>
                  </select>
                          <div id="inicio">
                          <button className="iniciar-btn">Iniciar Análise</button>
                          </div>
                </div>
      </div>
  );
}
export default App;
