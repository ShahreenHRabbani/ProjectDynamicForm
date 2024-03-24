import React, { useState } from 'react';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= new Date()) {
      setStartDate(selectedDate);
      if (!endDate || selectedDate > endDate) {
        setEndDate(null);
      }
    }
  };

  const handleEndDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= startDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <div>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate.toISOString().split('T')[0]}
        onChange={handleStartDateChange}
        min={new Date().toISOString().split('T')[0]} // Set minimum date to current date
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={handleEndDateChange}
        min={startDate.toISOString().split('T')[0]} // Set minimum date to selected start date
        disabled={!startDate} // Disable end date until start date is selected
      />
    </div>
  );
};

export default DateRangePicker;
