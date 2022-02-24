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


const GameScreen = ({ cards, loaded, playerId, players }) => {
    const [hand, setHand] = useState();
    const [whiteDeck, setWhiteDeck] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();
    const [selectedAnswerCard, setSelectedAnswerCard] = useState();
    const [blackDeck, setBlackDeck] = useState();
    const [roundCounter, setRoundCounter] = useState(1);
    const [gamePhase, setGamePhase] = useState('drawBlackCardPhase');
    const [judge, setJudge] = useState(playerId);
    const [winner, setWinner] = useState();
    const [scores, setScores] = useState([]);

    //  ['drawBlackCardPhase','drawPhase',selectPhase','judgePhase','rewardPhase', 'gameOverPhase']);
    useEffect(() => {
        setScores(players.map(player => {
            return (
                {
                    playerName: player.name,
                    value: 0,
                }
            )
        }))

    }, [players])




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
        let tempHand = [...hand];
        let tempWhiteCards = [...whiteDeck];
        tempHand.push(tempWhiteCards.splice(0, 1)[0]);
        setHand(tempHand);
        setWhiteDeck(tempWhiteCards);
        if (tempHand.length >= 7) {
            setGamePhase('selectPhase');
            return;
        }
    }

    const CreateBlackCard = () => {
        let tempBlackCards = [...blackDeck];
        let tempSelected = tempBlackCards.splice(0, 1);
        setSelectedBlackCard(tempSelected[0]);
        setBlackDeck(tempBlackCards);

        if (hand.length >= 7) {
            setGamePhase('selectPhase');
        }
        else {
            setGamePhase('drawPhase');
        }
    }

    const updateAnswers = (cardId, cardsCounter) => {



        setSelectedAnswerCard(hand[cardId]);
        let tempHand = [...hand];
        let TempCard = tempHand.splice(cardId, 1);
        setHand(tempHand);

        if (cardsCounter + 1 >= selectedBlackCard.pick) {
            setGamePhase('drawBlackCardPhase'); // this will change to judge phase when implemented
            let tempRound = roundCounter;
            setRoundCounter(tempRound += 1);
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
                        <p>Selected Black Card</p>
                        <BlackCard selectedBlackCard={selectedBlackCard} />
                        {/* <Timer /> */}
                    </div>
                )}
                {hand && (
                    <div id='hand1'>
                        <Slider hand={hand} gamePhase={gamePhase} selectedBlackCard={selectedBlackCard} updateAnswers={(cardId, cardsCounter) => updateAnswers(cardId, cardsCounter)} />
                    </div>
                )}
                <div id='hand2'>
                    {/* <HandLeft /> */}
                </div>

                <div id='hand3'>
                    {/* <HandTop /> */}
                </div>

                <div id='hand4'>
                    {/* <HandRight /> */}
                </div>
                {cards[0] && (
                    <div id='blackDeck'>
                        <p>Black Deck</p>
                        <BlackDeck gamePhase={gamePhase} blackCards={cards[0].black} onBlackCardSelect={(selectedCard) => CreateBlackCard()} />
                    </div>
                )}
                {cards[0] && (
                    <div id='whiteDeck'>
                        <p>White Deck</p>
                        <WhiteDeck gamePhase={gamePhase} whiteCards={cards[0].white} onWhiteCardSelect={() => addToHand()} />
                    </div>
                )}
                {selectedAnswerCard && (
                    <div id='answerCards'>
                        <p>Answers</p>
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