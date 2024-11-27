import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get("http://localhost:8080/events");
    setEvents(result.data);
  };

  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:8080/event/${id}`);
    loadEvents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Location</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-devider">
            {events.map((event, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{event.title}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>

                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/viewevent/${event.eventid}`}
                    >
                      View
                    </Link>

                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/editevent/${event.eventid}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteEvent(event.eventid)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
