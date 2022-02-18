import Landing from "../components/Landing";




const MenuScreen = ({updateIds}) => {

    return(
        <>
        <Landing updateIds={(playerId,gameId) => updateIds(playerId,gameId)}/>
        </>
    )
}


export default MenuScreen;