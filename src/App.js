import './App.css';
import React, { useEffect, useState } from 'react';
import AddEvent from './AddEvent/AddEvent';
import Calendar from './Calendar/Calendar';
import { eventData } from './eventData';
import EventDetail from './EventDetail/EventDetail';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState('calendar');
  const [events, setEvents] = useState(eventData.data);
  console.log({ events111111: events });
  const [lastScheduledOrPlayedEvent, setLastScheduledOrPlayedEvent] =
    useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setLastScheduledOrPlayedEvent(event);
    setCurrentPage('eventDetail');
  };

  const handleAddEvent = (newEvent) => {
    console.log({ newEvent222222: newEvent });
    console.log('Id:', events.length + 1);
    console.log('DateVenue:', newEvent.eventDate);
    console.log('DateName:', newEvent.eventName);
    console.log('DateSeason:', newEvent.eventSeason);

    const newEventWithId = {
      ...newEvent,
      id: events.length + 1,
      dateVenue: newEvent.eventDate,
    };
    setEvents((prevEvents) => [...prevEvents, newEventWithId]);
    setCurrentPage('calendar');
    setSelectedEvent(newEventWithId);
    setLastScheduledOrPlayedEvent(newEventWithId);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('calendar')}>Calendar</button>
        <button onClick={() => setCurrentPage('addEvent')}>Add Event</button>
      </nav>

      {currentPage === 'calendar' && (
        <Calendar
          events={events}
          onEventClick={handleEventClick}
          onAddEvent={() => setCurrentPage('addEvent')}
          setLastScheduledOrPlayedEvent={setLastScheduledOrPlayedEvent}
        />
      )}
      {currentPage === 'eventDetail' && (
        <EventDetail
          event={selectedEvent}
          events={events}
          lastScheduledOrPlayedEvent={lastScheduledOrPlayedEvent}
        />
      )}
      {currentPage === 'addEvent' && <AddEvent onAddEvent={handleAddEvent} />}
    </div>
  );
};

export default App;
