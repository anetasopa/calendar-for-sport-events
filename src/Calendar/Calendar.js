import './Calendar.css';
import React, { useEffect, useState } from 'react';

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateMonthDays = (year, month) => {
  const daysInMonth = getDaysInMonth(year, month);
  const monthDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    monthDays.push({
      day,
      date: new Date(year, month, day),
    });
  }

  return monthDays;
};

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = ({
  events,
  onEventClick,
  onAddEvent,
  setLastScheduledOrPlayedEvent,
}) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  useEffect(() => {
    const lastEvent = events
      .slice()
      .reverse()
      .find(
        (event) => event.status === 'scheduled' || event.status === 'played',
      );
    setLastScheduledOrPlayedEvent(lastEvent);
  }, [events, setLastScheduledOrPlayedEvent]);

  const handleDayClick = (date) => {
    const eventForDate = events.find(
      (event) =>
        new Date(event.dateVenue).getDate() === date.getDate() &&
        new Date(event.dateVenue).getMonth() === date.getMonth(),
    );
    setLastScheduledOrPlayedEvent(eventForDate);
    onEventClick(eventForDate);
  };

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <div className="month-navigation">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days-of-week">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>
      <div className="event-list">
        {generateMonthDays(currentYear, currentMonth).map((day) => {
          const eventForDay = events.find(
            (event) =>
              new Date(event.dateVenue).getDate() === day.day &&
              new Date(event.dateVenue).getMonth() === currentMonth &&
              new Date(event.dateVenue).getFullYear() === currentYear,
          );

          return (
            <div
              key={day.date.toISOString()}
              className={`event-item ${eventForDay ? eventForDay.status : ''}`}
              onClick={() => handleDayClick(day.date)}
            >
              {day.day} -{' '}
              {eventForDay
                ? eventForDay.status === 'played'
                  ? 'Played'
                  : 'Scheduled'
                : 'No Event'}
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button className="add-event-btn" onClick={onAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
};

export default Calendar;
