import './EventDetail.css';
import React from 'react';

const EventDetail = ({ event, lastScheduledOrPlayedEvent }) => {
  const displayedEvent = event || lastScheduledOrPlayedEvent;
  return (
    <div className="event-detail-container">
      <h2>Event Details</h2>
      {displayedEvent ? (
        <div className="event-details">
          <h3>{displayedEvent.eventName}</h3>
          <p>Date: {displayedEvent.dateVenue}</p>
          {displayedEvent.status ? (
            <p>Status: {displayedEvent.status}</p>
          ) : null}
        </div>
      ) : (
        <p>No event selected</p>
      )}
    </div>
  );
};

export default EventDetail;
