import cad from '../assets/cad.png';
import '../components/OpponentHand.css';

const OpponentHand = ({ identifier, id }) => {

    let handCounter = [1, 2, 3, 4, 5, 6, 7];

    const createdHand = handCounter.map((counter, index) => {

        return (<div className={`${identifier} opponent-card`} key={index}>
            <img src={cad} alt='logo' />
        </div>);
    })

    return (
        <>
            <div className='hand' id={id} >
                {createdHand}
            </div>
        </>

    )
}

export default OpponentHand;