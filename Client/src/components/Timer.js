import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  
const minuteSeconds = 60;

const timerProps = {
  isPlaying: true,
  size: 140,
  strokeWidth: 6
};

const renderTime = (time) => {
  return (
    <>
      <div>{time}</div>
     
      </>
  );
};
      
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  return (
      
      <>
      <CountdownCircleTimer
        {...timerProps}
        colors={["#A6D9F7", "#BCCCE0", "#FF0000"]}
        colorsTime={[60, 10, 0]}
        duration={minuteSeconds}
        initialRemainingTime={60}
        onComplete={(totalElapsedTime) => [60 - totalElapsedTime > 0, false]}
      >
        {({ elapsedTime }) =>
          renderTime(getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
  
      </>
  )
 
  }
export default Timer;
