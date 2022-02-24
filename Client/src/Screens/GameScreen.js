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


const GameScreen = ({ cards, loaded, playerId, players, socket }) => {
    const [hand, setHand] = useState();
    const [whiteDeck, setWhiteDeck] = useState();
    const [selectedBlackCard, setSelectedBlackCard] = useState();
    const [selectedAnswerCards, setSelectedAnswerCards] = useState([]);
    const [blackDeck, setBlackDeck] = useState();
    const [roundCounter, setRoundCounter] = useState(1);
    const [gamePhase, setGamePhase] = useState('drawBlackCardPhase');
    const [judge, setJudge] = useState(playerId);
    const [winner, setWinner] = useState();
    const [scores, setScores] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [judgeModal, setJudgeModal] = useState(false);

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
            let tempCard = arrayShuffle(cards[0].white);
            cards[0].white=arrayShuffle(tempCard);
            CreateHand();
            setBlackDeck(arrayShuffle(cards[0].black));
        }
    }, [cards[0]])

    const CreateHand = () => {
        // let tempCard = arrayShuffle(cards[0].white);
        socket.emit('createHand');
        // setHand(tempCard.splice(0, 7));
        // setWhiteDeck(tempCard);
        // socket.emit('updateWhiteDeck',tempCard);
    }

    const addToHand = () => {
        let tempHand = [...hand];
        let tempWhiteCards = [...whiteDeck];
        tempHand.push(tempWhiteCards.splice(0, 1)[0]);
        setHand(tempHand);
        setWhiteDeck(tempWhiteCards);
        socket.emit('updateWhiteDeck',tempWhiteCards);
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
        socket.emit('updateBlackCards',tempSelected[0],tempBlackCards);

        if (hand.length >= 7) {
            setGamePhase('selectPhase');
        }
        else {
            setGamePhase('drawPhase');
        }
    }

    socket.on('receiveHand', (hand) => {
        setHand(hand);
    })

    socket.on('sendWhiteDeck', (whiteDeck) => {
        setWhiteDeck(whiteDeck);
    })


    socket.on('receiveUpdatedBlackCards',(blackCard,blackDeck) => {
        setBlackDeck(blackDeck);
        setSelectedBlackCard(blackCard);

    })


    socket.on('receiveUpdatedWhiteCards',(whiteCards) => {
        setSelectedAnswerCards(whiteCards);

    })

    socket.on('receiveUpdatedWhiteDeck',(whiteDeck)=> {
        setWhiteDeck(whiteDeck);
    })

    const updateAnswers = (cardId, cardsCounter) => {
        let tempSelectedArray = selectedAnswerCards;
        
        let tempHand = [...hand];
        let tempCard = tempHand.splice(cardId, 1);
        tempSelectedArray.push(tempCard[0]);
        setHand(tempHand);
        socket.emit('updateWhiteCards',tempSelectedArray);


        if (cardsCounter + 1 >= selectedBlackCard.pick) {
            setGamePhase('drawBlackCardPhase'); // this will change to judge phase when implemented
            let tempRound = roundCounter;
            setRoundCounter(tempRound += 1);
        }

    }

    const goToResults = (event) => {
        navigate('/Result');
    }

    const handlePopUp = () => {
        setPopUp(true);

        setTimeout(() => {
            setPopUp(false);
        },2000);

    }

    return (
        <>
         <JudgeModal/>
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
                        <Slider hand={hand} gamePhase={gamePhase} selectedBlackCard={selectedBlackCard} updateAnswers={(cardId, cardsCounter) => updateAnswers(cardId, cardsCounter)} updatePopUp = {() => handlePopUp()}/>
                    </div>
                )}

                 {popUp && 
                    <PopUp text = 'it is not the select phase'/>}
        
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