import './AddEvent.css';
import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventStatus: '',
    eventSeason: '',
    eventHomeTeamName: '',
    eventHomeTeamSlug: '',
    eventAwayTeamName: '',
    eventAwayTeamSlug: '',
    eventResult: '',
  });

  const [formErrors, setFormErrors] = useState({
    eventName: '',
    eventDate: '',
    eventStatus: '',
    eventSeason: '',
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

    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.eventName.trim()) {
      errors.eventName = 'Event Name is required';
    }

    if (!formData.eventDate.trim()) {
      errors.eventDate = 'Event Date is required';
    }

    if (!formData.eventStatus.trim()) {
      errors.eventStatus = 'Event Status is required';
    }

    if (!formData.eventSeason.trim()) {
      errors.eventSeason = 'Event Season is required';
    }

    if (!formData.eventHomeTeamName.trim()) {
      errors.eventHomeTeamName = 'Event Home Team Name is required';
    }

    if (!formData.eventHomeTeamSlug.trim()) {
      errors.eventHomeTeamSlug = 'Event Home Team Slug is required';
    }

    if (!formData.eventAwayTeamName.trim()) {
      errors.eventAwayTeamName = 'Event Away Team Name is required';
    }

    if (!formData.eventAwayTeamSlug.trim()) {
      errors.eventAwayTeamSlug = 'Event Away Team Slug is required';
    }

    if (!formData.eventResult.trim()) {
      errors.eventResult = 'Event Result is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

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
          className={`add-event-input ${
            formErrors.eventName && 'input-without-margin'
          }`}
        />
        {formErrors.eventName && (
          <p className="error-message">{formErrors.eventName}</p>
        )}
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          value={formData.eventDate}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventDate && 'input-without-margin'
          }`}
        />
        {formErrors.eventDate && (
          <p className="error-message">{formErrors.eventDate}</p>
        )}
        <label htmlFor="eventStatus">Event Status:</label>
        <input
          type="text"
          id="eventStatus"
          name="eventStatus"
          value={formData.eventStatus}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventStatus && 'input-without-margin'
          }`}
        />
        {formErrors.eventStatus && (
          <p className="error-message">{formErrors.eventStatus}</p>
        )}
        <label htmlFor="eventSeason">Event Season:</label>
        <input
          type="text"
          id="eventSeason"
          name="eventSeason"
          value={formData.eventSeason}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventSeason && 'input-without-margin'
          }`}
        />
        {formErrors.eventSeason && (
          <p className="error-message">{formErrors.eventSeason}</p>
        )}
        <h4>Home Team:</h4>
        <label htmlFor="eventHomeTeamName">Home Team Name:</label>
        <input
          type="text"
          id="eventHomeTeamName"
          name="eventHomeTeamName"
          value={formData.eventHomeTeamName}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventHomeTeamName && 'input-without-margin'
          }`}
        />
        {formErrors.eventHomeTeamName && (
          <p className="error-message">{formErrors.eventHomeTeamName}</p>
        )}
        <label htmlFor="eventHomeTeamSlug">Home Team Slug:</label>
        <input
          type="text"
          id="eventHomeTeamSlug"
          name="eventHomeTeamSlug"
          value={formData.eventHomeTeamSlug}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventHomeTeamSlug && 'input-without-margin'
          }`}
        />
        {formErrors.eventHomeTeamSlug && (
          <p className="error-message">{formErrors.eventHomeTeamSlug}</p>
        )}
        <h4>Away Team:</h4>
        <label htmlFor="eventAwayTeamName">Away Team Name:</label>
        <input
          type="text"
          id="eventAwayTeamName"
          name="eventAwayTeamName"
          value={formData.eventAwayTeamName}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventAwayTeamName && 'input-without-margin'
          }`}
        />
        {formErrors.eventAwayTeamName && (
          <p className="error-message">{formErrors.eventAwayTeamName}</p>
        )}
        <label htmlFor="eventAwayTeamSlug">Away Team Slug:</label>
        <input
          type="text"
          id="eventAwayTeamSlug"
          name="eventAwayTeamSlug"
          value={formData.eventAwayTeamSlug}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventAwayTeamSlug && 'input-without-margin'
          }`}
        />
        {formErrors.eventAwayTeamSlug && (
          <p className="error-message">{formErrors.eventAwayTeamSlug}</p>
        )}
        <label htmlFor="eventResult">Result:</label>
        <input
          type="text"
          id="eventResult"
          name="eventResult"
          value={formData.eventResult}
          onChange={handleInputChange}
          className={`add-event-input ${
            formErrors.eventResult && 'input-without-margin'
          }`}
        />
        {formErrors.eventResult && (
          <p className="error-message">{formErrors.eventResult}</p>
        )}
        <button type="submit" className="add-event-btn">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
