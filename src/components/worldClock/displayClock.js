import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Cards from '../../shared/components/cards/cards';
import classes from './displayClock.module.css'

const TimeBlock = styled.span`
      padding: 4px;
      box-shadow: 2px 0px 2px 2px #1e477870;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
`

const DisplayClock = ({ timezone }) => {

      const startTime = new Date(Date.now()).toLocaleTimeString("en-US", {
            timeZone: timezone
      });

      const [time, setTime] = useState(startTime);
      let n = useRef(null);

      const cleanup = () => {
            clearInterval(n.current);
      }

      // On Component Destroy remove the timers
      useEffect(() => {
            return cleanup()
      }, [])

      useEffect(() => {
            if (n.current) cleanup();
            n.current = setInterval(() => {
                        setTime(
                              new Date(Date.now()).toLocaleTimeString("en-US", {
                                    timeZone: timezone
                              })
                        );
                  
            }, 1000);
      }, [timezone]);

      const [timeData, timeOfDay] = time.split(" ");
      const [hours, minutes, seconds] = timeData.split(":");

      return (
                  <div className={classes.timeBlocks}>
                        <TimeBlock>{hours}</TimeBlock>
                        <span> : </span> 
                        <TimeBlock>{minutes}</TimeBlock>
                        <span> : </span>
                        <TimeBlock>{seconds}</TimeBlock>
                  <TimeBlock>{timeOfDay}</TimeBlock>
                  {timezone}
                  </div>
            
      );
}

export default DisplayClock;
