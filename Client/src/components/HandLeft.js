import cad from '../assets/cad.png';
import '../components/HandLeft.css';

const HandLeft = () => {

    let handCounter = [1, 2, 3, 4, 5, 6, 7];

    const createdHand = handCounter.map((counter, index) => {

        return (<div className={`card-left`} key={index}>
            <img src={cad} alt='logo' />
        </div>);
    })

    return (
        <>
            <div className='hand' id='hand-left' >
                {createdHand}
            </div>
        </>

    )
}

export default HandLeft;