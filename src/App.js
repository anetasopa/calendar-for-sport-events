import './App.css';
import React, { useState } from 'react';
import AddEvent from './AddEvent/AddEvent';
import Calendar from './Calendar/Calendar';
import { eventData } from './eventData';
import EventDetail from './EventDetail/EventDetail';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState('calendar');
  const [events, setEvents] = useState(eventData.data);
  const [lastScheduledOrPlayedEvent, setLastScheduledOrPlayedEvent] =
    useState(null);
  const [showContent, setShowContent] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setLastScheduledOrPlayedEvent(event);
    setCurrentPage('eventDetail');
  };

  const handleAddEvent = (newEvent) => {
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

  const handleGoToAppClick = () => {
    setCurrentPage('app');
    setShowContent(true);
  };

  const handleGoToCalendarClick = () => {
    setCurrentPage('calendar');
    setShowContent(true);
  };

  return (
    <div>
      <nav>
        <button onClick={handleGoToAppClick}>Menu</button>
        <button onClick={() => setCurrentPage('calendar')}>Calendar</button>
        <button onClick={() => setCurrentPage('addEvent')}>Add Event</button>
      </nav>

      {showContent ? (
        <>
          {currentPage === 'calendar' && (
            <Calendar
              event={selectedEvent}
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
          {currentPage === 'addEvent' && (
            <AddEvent onAddEvent={handleAddEvent} />
          )}
          {currentPage === 'app' && (
            <div className="container">
              <div className="eleven">
                <h1>SportEvent Planner </h1>
              </div>
              <button onClick={handleGoToCalendarClick}>Go to Calendar</button>
            </div>
          )}
        </>
      ) : (
        <div className="container">
          <div className="eleven">
            <h1>SportEvent Planner </h1>
          </div>
          <button onClick={handleGoToCalendarClick}>Go to Calendar</button>
        </div>
      )}
    </div>
  );
};

export default App;
