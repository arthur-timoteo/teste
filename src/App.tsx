import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardAceitou } from './components/CardAceitou';
import { CardConfirmar } from './components/CardConfirmar';

import PeterPan from './assets/peter_pan.png';
import TinkerBell from './assets/tinker_bell.png';
import GifConfete from './assets/gif_confete.gif';

import SetCookie from './hooks/setCookie';
import GetCookie from './hooks/getCookie';

function App() {
  const [aceitou, SetAceitou] = useState(false);
  const [aceitouEntrouNovamente, SetAceitouEntrouNovamente] = useState(false);
  const audio1 = new Audio('./assets/rodrigo_faro-sonoplastia-nao.mp3');
  const audio2 = new Audio('./assets/rodrigo_faro-sonoplastia-iha.mp3');
  const audio3 = new Audio('./assets/parabens.mp3');

  function aceitar(){
    SetAceitou(true);

    SetCookie('aceitou', JSON.stringify(1));
    
    audio1.play();
    audio2.play();
    audio3.play();
  }

  useEffect(() => {
    audio1.load();
    audio2.load();
    audio3.load();
    var valor = GetCookie('aceitou');
    SetAceitouEntrouNovamente(valor == 1 ? true : false);
  }, []);

  return (
    <div className="background">
      {
        aceitouEntrouNovamente 
        ? <CardConfirmar/>
        : 
          !aceitou ?
            <div className="question-area">
              <h1 className="question-area-title">Cara Dama, você aceita firmar uma relação comigo?</h1>
    
              <button className="question-area-btn question-are-btn-yes" onClick={aceitar}>SIM</button>
              <button className="question-area-btn question-are-btn-no">NÃO</button>
            </div>
          :
            <>
              <CardAceitou/>
              <img className="img-gif" src={GifConfete} />
            </>
      }

      <img className="img-peter-pan" src={PeterPan} />
      <img className="img-tinker-bell" src={TinkerBell} />
    </div>
  );
}

export default App;
