import './AnswerPile.css';
import cad from '../assets/cad.png';
import AnswerCard from './AnswerCard.js';

const AnswerPile = ({cards}) => {


const answers = cards.map((card,index) =>
    {
        return <AnswerCard card = {card} key = {index}/>
    })

    return (
        <div id='answer-pile'>
            <div id='answer-cards'>
            {answers}
            </div>

        </div>
    )
}

export default AnswerPile;