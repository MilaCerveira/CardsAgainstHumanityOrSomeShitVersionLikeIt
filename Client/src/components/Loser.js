
import lovetrash  from '../assets/lovetrash.mp3';

const Loser = () => {
    
    const play = () => {
        const trash = new Audio(lovetrash);
        trash.play();
        
    };
  return (
    <>
    <button onClick={play}>Loser</button>
    </>
  )
}

export default Loser