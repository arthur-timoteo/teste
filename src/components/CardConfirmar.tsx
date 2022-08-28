import RodrigoFaro from '../assets/rodrigofaro.png';

export function CardConfirmar(){
    return(
        <div className="question-area">
            <h1 className="question-area-title-act">Voltou né?!<br/>Parece tão surreal que voltou para conferir se não era um sonho</h1>
            <img className="question-area-act-img" src={RodrigoFaro} />
        </div>
    );
}