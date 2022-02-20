import Landing from "../components/Landing";




const MenuScreen = ({updateIds, updateHostLobby}) => {

    return(
        <>
        <Landing updateIds={(playerId,gameId) => updateIds(playerId,gameId)} updateHostLobby={(playerId,noOfPlayers) => updateHostLobby(playerId,noOfPlayers)}/>
        </>
    )
}


export default MenuScreen;