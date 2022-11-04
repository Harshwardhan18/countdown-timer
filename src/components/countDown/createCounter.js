import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '../../shared/components/button/button';


const CreateCounter = ({createNewCountdown}) => {
      const [date, setDate] = useState(new Date());

      const createCountdown = () => {
            createNewCountdown(date)
      }

      return (
            <div>
                  <DatePicker selected={date} onChange={date => setDate(date)} />
                  <Button clicked={createCountdown} name='Submit'></Button>
            </div>
      );
}

export default CreateCounter;
