
import React, { useState } from "react";

const DateRangePicker = () => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(
    new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)
  ); // Default to next day


  const handleStartDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= currentDate) {
      setStartDate(selectedDate);
      if (!endDate || selectedDate > endDate) {
        setEndDate(new Date(selectedDate.getTime() + 24 * 60 * 60 * 1000)); // Set default end date to next day
      }
    }
  };

  const handleEndDateChange = (e) => {
     const selectedDate = new Date(e.target.value);
    const differenceInMilliseconds = (selectedDate.getTime() - startDate.getTime());
    const start = new Date(Date.now()); // Current date
    const end = new Date(start.getTime() + differenceInMilliseconds);

    const endDateFormatted = end.toISOString().split("T")[0];
    // const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    console.log(endDateFormatted);
    
    
   const minDate = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
     console.log(minDate);

    const maxDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
      .split("T")[0];
    //  console.log(maxDate);

    if (endDateFormatted >= minDate && endDateFormatted < maxDate) {
      setEndDate(selectedDate);
    }
    else {
      alert("Invaild input")
    }
  };

  return (
    <div>
      <label htmlFor="dateRange">Date Range:</label>
      <input
        type="text"
        id="dateRange"
        value={`${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`}
        placeholder={`${startDate} to ${endDate}`}
        // min={minDate}
        // max={maxDate}
        readOnly
      />
      <div>
        <input
          type="date"
          id="startDate"
          value={startDate.toISOString().split("T")[0]}
          onChange={handleStartDateChange}

          // min={minDate} // Set minimum date to current date
          // max={maxDate} // Set maximum date to 7 days ahead
        />
        <input
          type="date"
          id="endDate"
          value={endDate.toISOString().split("T")[0]}
          onChange={handleEndDateChange}
          disabled={!startDate} // Disable end date until start date is selected
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
