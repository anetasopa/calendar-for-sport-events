import './EventDetail.css';
import React from 'react';

const EventDetail = ({ event, lastScheduledOrPlayedEvent }) => {
  const displayedEvent = event || lastScheduledOrPlayedEvent;

  const getTeamInfo = (team) => {
    if (team) {
      return (
        <div>
          <p>
            <span>Name:</span> {team.name}
          </p>
          <p>
            <span>Official Name:</span> {team.officialName}
          </p>
          <p>
            <span>Slug:</span> {team.slug}
          </p>
          <p>
            <span>Abbreviation:</span> {team.abbreviation}
          </p>
          <p>
            <span>Team Country Code:</span> {team.teamCountryCode}
          </p>
          <p>
            <span>Stage Position:</span> {team.stagePosition}
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
            <span>Winner:</span> {result.winner}
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
          <h3>{displayedEvent.eventName}</h3>
          <p>
            <span>Date:</span> {displayedEvent.dateVenue}
          </p>
          <p>
            <span>Season:</span> {displayedEvent.season}
          </p>
          {displayedEvent.status ? (
            <p>
              <span>Status:</span> {displayedEvent.status}
            </p>
          ) : null}
          <div>
            <h4>Home Team:</h4>
            {getTeamInfo(displayedEvent.homeTeam)}
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
        <p>No event selected</p>
      )}
    </div>
  );
};

export default EventDetail;
