import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEvent() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const { title, date, location, description } = event;

  const onInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEvents();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/event/${id}`, event);
    navigate("/");
  };

  const loadEvents = async () => {
    const result = await axios.get(`http://localhost:8080/event/${id}`);
    const eventData = result.data;
    eventData.id = eventData.eventid;
    setEvent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
          <h2 className="text-center m-4">Edit Event Details</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                id="title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter event date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event location"
                id="location"
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Write a short description here"
                id="description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
