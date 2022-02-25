import AnswerCard from './AnswerCard';
import BlackCard from './BlackCard';
import './JudgeModal.css';
import arrayShuffle from 'array-shuffle';

const JudgeModal = ({ selectedBlackCard, selectedAnswerCards, players, updateVote, judge, playerId }) => {

    let tempPlayers = arrayShuffle([...players]);
    let playersFilter = tempPlayers.map((player) => {
        return selectedAnswerCards.filter((answer) => {
            return answer.name === player.name;
        })
    })

    const handleVote = (event) => {
        event.preventDefault();
        if(playerId!==judge){
            return;
        }
       
        let tempString = event.target.id.replace(/[^0-9\.]+/g, "")
        console.dir(tempPlayers[tempString-1].name);
        updateVote(tempPlayers[tempString-1].name);
    }


    const answers = playersFilter.map((player, index1) => {
        let tempClass = `player${index1 + 1}`
        let tempCards = `cards${index1 + 1}`
        console.log(tempPlayers);
        return (
            <div className={tempClass} key={index1}>
               
                <div className = {tempCards}>
                    {player.map((card, index2) => {

                        return (
                            <div key={index2}>
                                <AnswerCard answer={card} />
                            </div>
                        )
                    })}
                </div>
                {playerId ===judge && tempPlayers[index1].name!=judge &&(
                <button id={tempClass} onClick={handleVote}>Vote!</button>
                )}
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


                </div>
            </div>
        </>
    )
}

export default JudgeModal;