import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";
import BlackDeck from '../components/BlackDeck';
import WhiteDeck from '../components/WhiteDeck';
import HandTop from "../components/HandTop";
import HandLeft from "../components/HandLeft";
import HandRight from "../components/HandRight";
import '../Screens/GameScreen.css';
import Timer from "../components/Timer";
import AnswerPile from "../components/AnswerPile";
import { useNavigate } from 'react-router-dom';
import GameUI from "../components/gameUI";


const GameScreen = ({ cards, loaded, playerId }) => {
    const [hand, setHand] = useState();
    const [whiteDeck, setWhiteDeck] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();
    const [selectedAnswerCard, setSelectedAnswerCard] = useState();
    const [blackDeck, setBlackDeck] = useState();
    const [roundCounter, setRoundCounter] = useState(1);
    const [gamePhase, setGamePhase] = useState('drawBlackCardPhase');
    const [judge, setJudge] = useState(playerId);
    const [scores, setScores] = useState([
        {
            playerName: playerId,
            value: 2,
        },
        {
            playerName: 'Dave',
            value: 2,
        },
        {
            playerName: 'Dave',
            value: 2,
        },
    ])

    //  ['drawBlackCardPhase','drawPhase',selectPhase','judgePhase','rewardPhase', 'gameOverPhase']);

    let navigate = useNavigate();

    useEffect(() => {
        if (loaded && cards[0]) {
            CreateHand();
            setBlackDeck(arrayShuffle(cards[0].black));
        }
    }, [])

    const CreateHand = () => {
        let tempCard = arrayShuffle(cards[0].white);
        setHand(tempCard.splice(0, 7));
        setWhiteDeck(tempCard);
    }

    const addToHand = () => {
        if (hand.length >= 7) {
            setGamePhase('selectPhase');
            return;
        }
        let tempHand = [...hand];
        let tempWhiteCards = [...whiteDeck];
        tempHand.push(tempWhiteCards.splice(0, 1)[0]);
        setHand(tempHand);
        setWhiteDeck(tempWhiteCards);
    }

    const CreateBlackCard = () => {
        let tempBlackCards = [...blackDeck];
        let tempSelected = tempBlackCards.splice(0, 1);
        setSelectedBlackCard(tempSelected[0]);
        setBlackDeck(tempBlackCards[0]);
        setGamePhase('drawPhase');
    }

    const updateAnswers = (cardId, cardsCounter) => {

        
        
        setSelectedAnswerCard(hand[cardId]);
        let tempHand = [...hand];
        let TempCard = tempHand.splice(cardId, 1);
        setHand(tempHand);
        console.log(cardsCounter);

        if (cardsCounter >= selectedBlackCard.pick) {
            setGamePhase('judgePhase');
            return;
        }
        
    }

    const goToResults = (event) => {
        navigate('/Result');
    }

    return (
        <>

            <div id="gameScreen">
                {selectedBlackCard && (
                    <div id='blackCard'>
                        <BlackCard selectedBlackCard={selectedBlackCard} />
                        <Timer />
                    </div>
                )}
                {hand && (
                    <div id='hand1'>
                        <Slider hand={hand} gamePhase={gamePhase} selectedBlackCard={selectedBlackCard} updateAnswers={(cardId, cardsCounter) => updateAnswers(cardId, cardsCounter)} />
                    </div>
                )}
                <div id='hand2'>
                    <HandLeft />
                </div>

                <div id='hand3'>
                    <HandTop />
                </div>

                <div id='hand4'>
                    <HandRight />
                </div>
                {cards[0] && (
                    <div id='blackDeck'>
                        <BlackDeck gamePhase={gamePhase} blackCards={cards[0].black} onBlackCardSelect={(selectedCard) => CreateBlackCard()} />
                    </div>
                )}
                {cards[0] && (
                    <div id='whiteDeck'>
                        <WhiteDeck gamePhase={gamePhase} whiteCards={cards[0].white} onWhiteCardSelect={() => addToHand()} />
                    </div>
                )}
                {selectedAnswerCard && (
                    <div id='answerCards'>
                        <AnswerPile card={selectedAnswerCard} />
                    </div>
                )}
                <div id='score'>
                    <GameUI roundCounter={roundCounter} gamePhase={gamePhase} scores={scores} judge={judge} />
                    <button onClick={goToResults}>Go To Results</button>
                </div>

            </div>
        </>
    )
}

export default GameScreen;