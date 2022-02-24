import AnswerCard from './AnswerCard';
import BlackCard from './BlackCard';
import './JudgeModal.css';
import WhiteCard from './WhiteCard';

const JudgeModal = ({ selectedBlackCard, selectedAnswerCards, players }) => {

    let playersFilter = players.map((player) => {
        return selectedAnswerCards.filter((answer) => {
            return answer.name === player.name;
        })
    })

    // const answers = selectedAnswerCards.map((answer, index) => {
    //     return <AnswerCard answer={answer} key={index} />
    // })

    const answers = playersFilter.map((player, index) => {
        player.map((card) => {
            let tempClass = `player ${index + 1}`
            return <AnswerCard answer={card} key={index} className={tempClass} />
        })
    })

    return (
        <>
            <div className={'JudgeModal'}>
                <div className='QuestionContent'>
                    <BlackCard selectedBlackCard={selectedBlackCard} />
                </div>

                <div className={'JudgeModal-AnswerContent'}>

                    <div>{answers}</div>


                </div>
            </div>
        </>
    )
}

export default JudgeModal;