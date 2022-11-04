import React, {useState} from 'react';
import Button from '../../shared/components/button/button';
import CountdownTimer from './countDownTimer';
import CreateCounter from './createCounter';



const ListCounters = () => {
      const [timers, setTimers] = useState([]);
      const [isCreateTimer, setIsCreateTimer] = useState(false);

      const newTimerHandler = (value) => {
            setIsCreateTimer(false)
            setTimers((prevState) => [...prevState, {id: Math.random()*1000, value}])
      }
      
      return (
            <div>
                  <h1>Countdown Timer</h1>
                  {!isCreateTimer && <Button clicked={() => setIsCreateTimer(true)} name='Add Countdown'></Button>}
                  {isCreateTimer && <CreateCounter createNewCountdown={newTimerHandler} />}
                  {timers && timers.map((timer) => <CountdownTimer key={timer.id} targetDate={timer.value} deleteTimer={() => setTimers((prevState) => prevState.filter((t) => t.id !==timer.id))} />)}
            </div>
      );
}

export default ListCounters;
