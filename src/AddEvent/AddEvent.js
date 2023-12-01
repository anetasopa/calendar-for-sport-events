import './AddEvent.css';
import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventStatus: '',
    eventHomeTeamName: '',
    eventHomeTeamSlug: '',
    eventAwayTeamName: '',
    eventAwayTeamSlug: '',
    eventResult: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(formData);
  };

  return (
    <div className="add-event-container">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit} className="add-event-form">
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <label htmlFor="eventStatus">Event Status:</label>
        <input
          type="text"
          id="eventStatus"
          name="eventStatus"
          value={formData.eventStatus}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <h4>Home Team:</h4>
        <label htmlFor="eventHomeTeamName">Home Team Name:</label>
        <input
          type="text"
          id="eventHomeTeamName"
          name="eventHomeTeamName"
          value={formData.eventHomeTeamName}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <label htmlFor="eventHomeTeamSlug">Home Team Slug:</label>
        <input
          type="text"
          id="eventHomeTeamSlug"
          name="eventHomeTeamSlug"
          value={formData.eventHomeTeamSlug}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <h4>Away Team:</h4>
        <label htmlFor="eventAwayTeamName">Away Team Name:</label>
        <input
          type="text"
          id="eventAwayTeamName"
          name="eventAwayTeamName"
          value={formData.eventAwayTeamName}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <label htmlFor="eventAwayTeamSlug">Away Team Slug:</label>
        <input
          type="text"
          id="eventAwayTeamSlug"
          name="eventAwayTeamSlug"
          value={formData.eventAwayTeamSlug}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <label htmlFor="eventResult">Result:</label>
        <input
          type="text"
          id="eventResult"
          name="eventResult"
          value={formData.eventResult}
          onChange={handleInputChange}
          className="add-event-input"
        />
        <button type="submit" className="add-event-btn">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
