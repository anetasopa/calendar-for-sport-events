import './AddEvent.css';
import React, { useState } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
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
    <div className="add-event-page">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit} className="add-event-form">
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            className="add-event-input"
          />
        </div>
        <div>
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            className="add-event-input"
          />
        </div>
        <button type="submit" className="add-event-button">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
