import { DateRangePicker } from "react-date-range";
import { useState } from "react";

import "./Calender.css";


const Calender = () =>
{
    const [date , setDate] = useState(
        {
            startDate: new Date(),
            endeDate : new Date (),
            key :'selection',

        }
    )

    return 
    (
        <div className="container">
            <span className="calender">start date to end date</span>
            <DateRangePicker ranges={[date]} onchange = {() => {}} />
        </div>
    )

}

export default Calender ;