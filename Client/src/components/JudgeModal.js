import AnswerCard from './AnswerCard';
import BlackCard from './BlackCard';
import './JudgeModal.css';

const JudgeModal = ({ selectedBlackCard, selectedAnswerCards, players }) => {

    const answers = selectedAnswerCards.map((answer, index) => {
        return <AnswerCard answer={answer} key={index} />
    })

    return (
        <>
            <div className={'JudgeModal'}>
                <div className='QuestionContent'>
                    <BlackCard selectedBlackCard={selectedBlackCard} />
                </div>
              
                <div className={'JudgeModal-AnswerContent'}>
               
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                    <div>{answers}</div>
                   
                </div>
            </div>
        </>
    )
}

export default JudgeModal;