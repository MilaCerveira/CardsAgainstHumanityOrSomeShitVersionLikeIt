import Loser from '../components/Loser.js'
import Winner from '../components/Winner.js'

const ResultScreen = ({playerId, winnerId}) => {

    return(
        <>
        {playerId != winnerId & (
            <Loser/>
        )}

        {playerId === winnerId && (
            <Winner/>
        )}
        </>
    )
}


export default ResultScreen;