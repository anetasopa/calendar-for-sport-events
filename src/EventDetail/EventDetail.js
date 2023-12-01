import './EventDetail.css';
import React from 'react';

const EventDetail = ({ event, lastScheduledOrPlayedEvent }) => {
  console.log({ event333333: event });
  console.log({ lastScheduledOrPlayedEven333333: lastScheduledOrPlayedEvent });

  const displayedEvent = event || lastScheduledOrPlayedEvent;

  const getTeamInfo = (team, event) => {
    console.log({ event66666: event });
    if (team || event) {
      return (
        <div>
          <p>
            <span>Name:</span>{' '}
            {team?.name || event?.eventHomeTeamName || event?.eventAwayTeamName}
          </p>
          <p>
            <span>Official Name:</span> {team?.officialName}
          </p>
          <p>
            <span>Slug:</span>{' '}
            {team?.slug || event?.eventHomeTeamSlug || event?.eventAwayTeamSlug}
          </p>
          <p>
            <span>Abbreviation:</span> {team?.abbreviation}
          </p>
          <p>
            <span>Team Country Code:</span> {team?.teamCountryCode}
          </p>
          <p>
            <span>Stage Position:</span> {team?.stagePosition}
          </p>
        </div>
      );
    }
    return null;
  };

  const getResultInfo = (result) => {
    if (result) {
      return (
        <div>
          <p>
            <span>Home Goals:</span> {result.homeGoals}
          </p>
          <p>
            <span>Away Goals:</span> {result.awayGoals}
          </p>
          <p>
            <span>Winner:</span> {result?.winner || event?.eventResult}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="event-details-container">
      <h2>Event Details</h2>
      {displayedEvent ? (
        <div className="event-details">
          <p>
            <span>Name:</span> {displayedEvent?.eventName || event?.eventName}
          </p>
          <p>
            <span>Date:</span> {displayedEvent?.dateVenue || event?.eventData}
          </p>
          <p>
            <span>Season:</span> {displayedEvent?.season || event?.eventSeason}
          </p>
          <p>
            <span>Status:</span> {displayedEvent?.status || event?.eventStatus}
          </p>
          <div>
            <h4>Home Team:</h4>
            {getTeamInfo(displayedEvent.homeTeam, event)}
          </div>
          <div>
            <h4>Away Team:</h4>
            {getTeamInfo(displayedEvent.awayTeam)}
          </div>
          <div>
            <h4>Result:</h4>
            {getResultInfo(displayedEvent.result)}
          </div>
        </div>
      ) : (
        <p className="no-event-selected">No event selected</p>
      )}
    </div>
  );
};

export default EventDetail;
