import './GameUI.css'

const GameUI = ({roundCounter,scores,gamePhase, judge}) => {

    let scoreString= '';

    scores.map(score => {
        let tempString=`${score.playerName}: ${(score.value)} `;
        scoreString = scoreString.concat(tempString);
    })

    return(
        <div id ='game-ui'>
        
        <h3>Round: {roundCounter}</h3>
        <h3>Phase: {gamePhase}</h3>
        <h3>Judge: {judge}</h3>
        <h3>{scoreString}</h3>
        </div>
    )
}


export default GameUI;