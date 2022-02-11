import cad from '../assets/cad.png';
import '../components/HandRight.css';

const HandRight = () => {

    let handCounter = [1, 2, 3, 4, 5, 6, 7];

    const createdHand = handCounter.map((counter, index) => {

        return (<div className={`card-right opponent-card`} key={index}>
            <img src={cad} alt='logo' />
        </div>);
    })

    return (
        <>
            <div className='hand' id='hand-right' >
                {createdHand}
            </div>
        </>

    )
}

export default HandRight;