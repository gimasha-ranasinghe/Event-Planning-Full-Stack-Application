import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEvent() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    const result = await axios.get(`http://localhost:8080/event/${id}`);
    setEvent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-5 mt-2 shadow">
          <h2 className="text-center m-4">Event Details</h2>
          <div className="card">
            <div className="card-header">
              Details of event id : {event.eventid}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Title: </b>
                  {event.title}
                </li>
                <li className="list-group-item">
                  <b>Date: </b>
                  {event.date}
                </li>
                <li className="list-group-item">
                  <b>Location: </b>
                  {event.location}
                </li>
                <li className="list-group-item">
                  <b>Description: </b>
                  {event.description}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
