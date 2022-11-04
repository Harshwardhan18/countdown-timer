import React from 'react';
import Cards from '../../shared/components/cards/cards';
import { useCountdown } from '../../shared/hooks/useCountdown';
import DateTimeDisplay from './dateTimeDisplay';



const CountdownExpired = ({clicked}) => {
  return (
    <Cards clicked={clicked}>
      <div>
        <h3 style={{color: 'red', margin: '0'}}>Expired!!!</h3>
        <p>Please select a future date and time.</p>
      </div>
    </Cards>
  );
};



const CountdownTimer = ({ targetDate, deleteTimer }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <CountdownExpired clicked={deleteTimer} />;
  } else {
    return (
      <Cards clicked={deleteTimer} >
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={days <= 3 && hours <=2} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </Cards>
    );
  }
};

export default CountdownTimer;


