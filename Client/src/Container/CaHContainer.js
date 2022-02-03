import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuScreen from "../Screens/MenuScreen";
import GameScreen from "../Screens/GameScreen";



const CaHContainer = () => {

    const [cards, setCards] = useState([]);


    useEffect(() => {
        FetchCards();

    }, [])


    const FetchCards = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/CaH/`)
            const data = await response.json();
            await setCards(data);
            console.log('Success');
        }

        catch (error) {
            console.log('error');
        }

    }


    return (
        <>
            <div id='RouterContainer'>
                <Router>
                    <Routes>
                        <Route path="/" element={<MenuScreen/>}/>
                        {/* {/* <Route path="/Lobby" element={<LobbyScreen/>}/> */}
                        <Route path="/Game" element={<GameScreen cards = {cards}/>} />
                        {/* <Route path="/Result" element={<ResultScreen/>}/> */}
                        {/* <Route path="/*" element={<NotFoundScreen/>}/> */}
                    </Routes>
                </Router>

            </div>

        </>
    );
}


export default CaHContainer;