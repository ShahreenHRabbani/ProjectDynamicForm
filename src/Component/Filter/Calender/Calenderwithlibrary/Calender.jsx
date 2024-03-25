import { DateRangePicker } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react";
import "./Calender.css"


const Calender = () =>
{
    const [date, setDate] = useState({
      startDate: new Date(), //initial value set to the current date (new Date()).
      endeDate: new Date(),
      key: "selection",
    });

    return (
       <>
        <div className="container">
        <span className="calender">start date to end date</span>
        <DateRangePicker ranges={[date]} onchange={() => {}} />
        </div>
        </>
    )

}

export default Calender ;