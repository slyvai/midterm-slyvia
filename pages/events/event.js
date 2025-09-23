import { useState, useEffect } from "react";
import EventTable from "../components/EventTable";

export default function EventListPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);


  const handleDelete = (id) => {
  const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
  const filteredEvents = storedEvents.filter((e) => String(e.id) !== String(id));
  localStorage.setItem("events", JSON.stringify(filteredEvents));
  setEvents(filteredEvents);
};


  return <EventTable events={events} onDelete={handleDelete} />;
}
