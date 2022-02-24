import AnswerCard from './AnswerCard';
import BlackCard from './BlackCard';
import './JudgeModal.css';
import arrayShuffle from 'array-shuffle';

const JudgeModal = ({ selectedBlackCard, selectedAnswerCards, players }) => {

    let tempPlayers = arrayShuffle([...players]);
    let playersFilter = tempPlayers.map((player) => {
        return selectedAnswerCards.filter((answer) => {
            return answer.name === player.name;
        })
    })

    // const answers = selectedAnswerCards.map((answer, index) => {
    //     return <AnswerCard answer={answer} key={index} />
    // })

    const answers = playersFilter.map((player, index) => {
        let tempClass = `player${index + 1}`
        return (
            <div className = {tempClass} key = {index}>
                {player.map((card,index) => {
                   
                    return (
                        <div key={index}>
                            <AnswerCard answer={card}/>
                        </div>

                    )
                })}
            </div>
        )
    })

    return (
        <>
            <div className={'JudgeModal'}>
                <div className='QuestionContent'>
                    <BlackCard selectedBlackCard={selectedBlackCard} />
                </div>

                <div className={'JudgeModal-AnswerContent'}>

                    {answers}
                    {/* {answers} */}


                </div>
            </div>
        </>
    )
}

export default JudgeModal;