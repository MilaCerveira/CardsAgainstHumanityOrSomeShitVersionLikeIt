import cad from '../assets/cad.png';
import '../components/HandTop.css';

const HandTop = () => {

    let handCounter = [1, 2, 3, 4, 5, 6, 7];

    const createdHand = handCounter.map((counter, index) => {

        return (<div className='card-top' key={index}>
            <img src={cad} alt='logo' />
        </div>);
    })

    return (
        <>
            <div className='hand' id='hand-top' >
                {createdHand}
            </div>
        </>
    )
}

export default HandTop;