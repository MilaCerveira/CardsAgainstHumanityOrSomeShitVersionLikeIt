import Slider from "../components/Slider";
import arrayShuffle from 'array-shuffle';
import { useEffect, useState } from "react";
import BlackCard from "../components/BlackCard";
import BlackDeck from '../components/BlackDeck';
import WhiteDeck from '../components/WhiteDeck';
import '../Screens/GameScreen.css';
import Timer from "../components/Timer";
import AnswerPile from "../components/AnswerPile";
import { useNavigate } from 'react-router-dom';
import GameUI from "../components/gameUI";
import PopUp from '../components/PopUp';
import JudgeModal from "../components/JudgeModal";


const GameScreen = ({ cards, loaded, playerId, players, socket, setWinnerId }) => {
    const [hand, setHand] = useState();
    const [whiteDeck, setWhiteDeck] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();
    const [selectedAnswerCards, setSelectedAnswerCards] = useState([]);
    const [blackDeck, setBlackDeck] = useState();
    const [roundCounter, setRoundCounter] = useState(1);
    const [gamePhase, setGamePhase] = useState('drawBlackCardPhase');
    const [judge, setJudge] = useState();
    const [winner, setWinner] = useState();
    const [scores, setScores] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [drawPhase, setDrawPhase] = useState(false);
    const [selectPhase, setSelectPhase] = useState(false);


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
            setBlackDeck(cards[0].black);
            socket.emit('setJudge');
        }
    }, [cards[0]]) //cards[0]

    const CreateHand = () => {
        socket.emit('createHand');
    }

    const addToHand = () => {
        if (drawPhase && hand.length) {
            return;
        }
        let tempHand = [...hand];
        let tempWhiteCards = [...whiteDeck];
        tempHand.push(tempWhiteCards.splice(0, 1)[0]);
        setHand(tempHand);
        setWhiteDeck(tempWhiteCards);
        socket.emit('updateWhiteDeck', tempWhiteCards);
        if (tempHand.length >= 7) {
            socket.emit('checkPhase', 'selectPhase');
            setDrawPhase(true);
            return;
        }
    }

    const CreateBlackCard = () => {
        if (judge != playerId) {
            return;
        }

        let tempBlackCards = [...blackDeck];
        let tempSelected = tempBlackCards.splice(0, 1);
        setSelectedBlackCard(tempSelected[0]);
        setBlackDeck(tempBlackCards);
        socket.emit('updateBlackCards', tempSelected[0], tempBlackCards);

        if (hand.length >= 7) {
            socket.emit('setPhase', 'selectPhase');
        }
        else {
            socket.emit('setPhase', 'drawPhase');
        }

    }

    socket.on('receiveHand', (hand) => {
        setHand(hand);
    })

    socket.on('sendWhiteDeck', (whiteDeck) => {
        setWhiteDeck(whiteDeck)
    })

    socket.on('receivePhase', (phase) => {
        setGamePhase(phase);
    })

    socket.on('sendJudge', (judge) => {
        setJudge(judge.name);
    })

    socket.on('receiveUpdatedBlackCards', (blackCard, blackDeck) => {
        setBlackDeck(blackDeck);
        setSelectedBlackCard(blackCard);

    })

    socket.on('receiveUpdatedWhiteCards', (whiteCards) => {
        setSelectedAnswerCards(whiteCards);

    })

    socket.on('receiveUpdatedWhiteDeck', (whiteDeck) => {
        setWhiteDeck(whiteDeck);
    })

    socket.on('receiveScores', scores => {
        setScores(scores);
    })

    socket.on('receivePhases', (draw,select)=> {
        setDrawPhase(draw);
        setSelectPhase(select);
    })

    socket.on('sendWinner', winner => {
        setWinnerId(winner);
        navigate('/Result');
    })

    const updateAnswers = (cardId, cardsCounter) => {
        if (selectPhase) {
            return;
        }
        let tempSelectedArray = selectedAnswerCards;

        let tempHand = [...hand];
        let tempCard = tempHand.splice(cardId, 1);
        tempSelectedArray.push({ name: playerId, card: tempCard[0] });
        setHand(tempHand);
        socket.emit('updateWhiteCards', tempSelectedArray);

        if (cardsCounter + 1 >= selectedBlackCard.pick) {
            socket.emit('checkSelectPhase', 'judgePhase');
            setSelectPhase(true);

        }

    }

    const goToResults = (event) => {
        navigate('/Result');
    }

    const handlePopUp = () => {
        setPopUp(true);

        setTimeout(() => {
            setPopUp(false);
        }, 2000);

    }

    const updateVote = (player) => {
        let tempScores = scores;
        let tempIndex = tempScores.findIndex(score => {
            return score.playerName === player;
        })

        tempScores[tempIndex].value += 1;
        socket.emit('setPhase', 'rewardPhase');

        socket.emit('updateScores', tempScores);

        resetRound();
        if (tempScores[tempIndex].value >= 3) {
            setWinnerId(tempScores[tempIndex].playerName);
            socket.emit('setWinner', tempScores[tempIndex].playerName);
            socket.emit('setPhase', 'gameOverPhase');
            console.log(`winner is: ${tempScores[tempIndex].playerName}`);
            navigate('/Result');
        }
        else {

            socket.emit('setPhase', 'drawBlackCardPhase');
        }

    }


    const resetRound = () => {

        setSelectedAnswerCards([]);
        setSelectedBlackCard(undefined);
        let tempRound = roundCounter;
        setRoundCounter(tempRound += 1);
        setDrawPhase(false);
        setSelectPhase(false);
        socket.emit('updatePhases', false, false);
        socket.emit('updateWhiteCards', []);
        socket.emit('updateBlackCards', undefined, blackDeck);
        socket.emit('updateJudge');



    }

    return (
        <>
            {selectedBlackCard && gamePhase === 'judgePhase' && (
                <JudgeModal selectedBlackCard={selectedBlackCard} selectedAnswerCards={selectedAnswerCards} players={players} updateVote={(player) => updateVote(player)} playerId={playerId} judge={judge} />
            )}
            <div id="gameScreen">

                {selectedBlackCard && (
                    <div id='blackCard'>
                        <p>Selected Black Card</p>
                        <BlackCard selectedBlackCard={selectedBlackCard} />
                        {/* <Timer /> */}
                    </div>
                )}
                {hand && gamePhase !== 'judgePhase' && (
                    <div id='hand1'>
                        <Slider hand={hand} gamePhase={gamePhase} selectedBlackCard={selectedBlackCard} updateAnswers={(cardId, cardsCounter) => updateAnswers(cardId, cardsCounter)} updatePopUp={() => handlePopUp()} judge = {judge} playerId = {playerId}/>
                    </div>
                )}

                {popUp &&
                    <PopUp text='it is not your turn to play a card' />}

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
                {selectedAnswerCards[0] && (
                    <div id='answerCards'>
                        <p>Answers</p>
                        <AnswerPile cards={selectedAnswerCards} />
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