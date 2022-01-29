import './Landing.css';
import cad from '../assets/cad.png';
const Landing = () => {
    return (
        <>
            <h1>Cards</h1>
            <h1>Against</h1>
            <h1> Humanity</h1>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <h1>Instead of coal Santa now gives bad children</h1>
                        <div id="bottom">
                            <img className='bottom-img' src={cad} alt='logo'/>
                            Cards Against Humanity
                        </div>
                    </div>
                    <div className='card-back'>
                        <h1>Multiple stab wounds</h1>
                        <button className="enter-button">ENTER</button>
                        <div id="bottom">
                            <img className='bottom-img' src={cad}/>
                            Cards Against Humanity
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Landing;
