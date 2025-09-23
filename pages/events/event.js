import { useState, useEffect } from "react";
import EventTable from "../components/EventTable";
export default function Event() {
   const [events, setEvents] = useState([]);
   useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
    }
   }, []);

    return (
        <>
        <EventTable events={events} />
        </>
    )
}