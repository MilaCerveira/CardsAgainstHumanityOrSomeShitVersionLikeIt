import AnswerCard from './AnswerCard';
import BlackCard from './BlackCard';
import './JudgeModal.css';

const JudgeModal = ({selectedBlackCard, selectedAnswerCards, players}) => {
    
    const answers = selectedAnswerCards.map((answer,index) =>
    {
        return <AnswerCard answer = {answer} key = {index}/>
    })

  return (
      <>
    <div className={'JudgeModal'}>
    <div className={'JudgeModal-Content'}>
     <BlackCard selectedBlackCard ={selectedBlackCard} />
     {answers}
       
     <h2>I'm a modal</h2>
   
    </div>
</div>
</>
  )
}

export default JudgeModal;