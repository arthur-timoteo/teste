import LuvaPedreiro from '../assets/luva_pedreiro.png';

export function CardAceitou(){
    return(
        <div className="question-area">
            <h1 className="question-area-title-act">Ela aceitou!!!<br/>Obrigado meu Deus</h1>
            <img className="question-area-img" src={LuvaPedreiro} />
            <h2 className="question-area-ask">RECEBA!<br/>Gire seu corpo 180°</h2>
        </div>
    );
}