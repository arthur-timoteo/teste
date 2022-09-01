import React, { useState, useEffect, AudioHTMLAttributes, useRef } from 'react';
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
  const [sound1, SetSound1] = useState(true);
  const [sound2, SetSound2] = useState(false);
  const [sound3, SetSound3] = useState(false);
  const [buttonFocus, SetButtonFocus] = useState(false);

  function aceitar(){
    SetAceitou(true);
    SetCookie('aceitou', JSON.stringify(1));
    SetSound1(false);
    SetSound2(true);
  }

  useEffect(() => {
    var valor = GetCookie('aceitou');
    SetAceitouEntrouNovamente(valor === 1 ? true : false);
  }, []);

  function negar(){
    SetButtonFocus(true);
    SetSound3(true);

    setTimeout(() => {
      SetSound3(false);
    }, 350);
    
    setTimeout(() => {
      SetButtonFocus(false);
    }, 4000);
  }

  return (
    <div className="background">
      {
        aceitouEntrouNovamente 
        ? <CardConfirmar/>
        : 
          !aceitou ?
            <div className="question-area">
              <h1 className="question-area-title">Cara Dama, você aceita firmar uma relação comigo?</h1>
    
              <button className="question-area-btn question-are-btn-yes" onClick={aceitar}>Sim</button>
              <button className={`question-area-btn question-are-btn-no ${buttonFocus ? "focus" : ""}`} disabled={buttonFocus} onClick={negar}>Não</button>
            </div>
          :
            <>
              <CardAceitou/>
              <img className="img-gif" src={GifConfete} />
            </>
      }

      <img className="img-peter-pan" src={PeterPan} />
      <img className="img-tinker-bell" src={TinkerBell} />

      { sound1 && <audio src={require('./assets/musica_tema_bela_fera.mp3')} autoPlay loop />}
      { sound2 && <audio src={require('./assets/fogos.mp3')} autoPlay />}
      { sound3 && <audio src={require('./assets/rodrigo_faro_nao.mp3')} autoPlay />}
    </div>
  );
}

export default App;
