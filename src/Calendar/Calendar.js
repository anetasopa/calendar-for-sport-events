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
  event,
  events,
  onEventClick,
  onAddEvent,
  setLastScheduledOrPlayedEvent,
}) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [filterStatus, setFilterStatus] = useState('all');
  console.log({ event11111: event });

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

  const handleStatusFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredMonthDays = generateMonthDays(currentYear, currentMonth).filter(
    (day) => {
      const eventForDay = events.find(
        (event) =>
          new Date(event.dateVenue).getDate() === day.day &&
          new Date(event.dateVenue).getMonth() === currentMonth &&
          new Date(event.dateVenue).getFullYear() === currentYear &&
          (filterStatus === 'all' ||
            event.status === filterStatus ||
            event.eventStatus),
      );
      return filterStatus === 'all' || !!eventForDay;
    },
  );

  return (
    <div className="calendar-container">
      <h2>Calendar</h2>
      <div className="filter-container">
        <label>Status Filter:</label>
        <select value={filterStatus} onChange={handleStatusFilterChange}>
          <option value="all">All</option>
          <option value="scheduled">Scheduled</option>
          <option value="played">Played</option>
        </select>
      </div>
      <div className="month-navigation">
        <button className="icons" onClick={handlePrevMonth}>
          &lt;
        </button>
        <span>{`${monthNames[currentMonth]} ${currentYear}`}</span>
        <button className="icons" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="days-of-week">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="day-of-week">
            <p className="week-days">{day}</p>
          </div>
        ))}
      </div>
      <div className="event-list">
        {filteredMonthDays.map((day) => {
          const eventForDay = events.find(
            (event) =>
              new Date(event.dateVenue).getDate() === day.day &&
              new Date(event.dateVenue).getMonth() === currentMonth &&
              new Date(event.dateVenue).getFullYear() === currentYear &&
              (filterStatus === 'all' ||
                event.status === filterStatus ||
                event.eventStatus),
          );

          return (
            <div
              key={day.date.toISOString()}
              className={`event-item ${eventForDay ? eventForDay.status : ''} ${
                event && eventForDay ? eventForDay.status : ''
              }`}
              onClick={() => handleDayClick(day.date)}
            >
              <p className="day">{day.day}</p>
              <p>
                {eventForDay
                  ? eventForDay.status === 'played'
                    ? 'Played'
                    : 'Scheduled'
                  : 'No Event'}
              </p>
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
