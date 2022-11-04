import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DisplayClock from './displayClock';
import styled from 'styled-components';

const Select = styled.select`
    outline: none;
    box-sizing: border-box;
    background-color: white;
    border: none;
    border-bottom: 1.5px solid #033d84;
    transition: border-bottom-color 0.2s ease-in;
    padding: 4px 8px;
    font-size: 16px;
    color: black;
    font-weight: 400;

  &:focus {
    /* background: rgba(255, 255, 255, 0.2); */
    border-bottom-color: #4179a6;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    transition: opacity 0.2s ease-in;
    color: #303030;
  }
`;

const TIMEZONES_URL = 'http://worldtimeapi.org/api/timezone';

const WorldClock = () => {
      const [selectedTimeZone, setTimezone] = useState('');
      const { isLoading, data } = useQuery('timezones', () => {
            return axios.get(TIMEZONES_URL)
      },[])



      const onTimeZoneSelect = (e) => {
            setTimezone(e.target.value);
      }
      return (
            <div>
                  <h2>WORLD CLOCK</h2> <br />
                  <Select onChange={onTimeZoneSelect} >
                        {!isLoading && data?.data.length && data.data.map((zone) => <option value={zone} key={zone} >{zone}</option>)}
                  </Select>
                  {selectedTimeZone && <DisplayClock timezone={selectedTimeZone} />}
            </div>
      );
}

export default WorldClock;
