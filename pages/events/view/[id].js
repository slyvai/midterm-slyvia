import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Tag, message } from "antd";

export default function EventView() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (!router.isReady || !id) return;

    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const foundEvent = storedEvents.find((e) => String(e.id) === String(id));

    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      message.error("Event not found.");
      router.push("/events/event");
    }
  }, [router.isReady, id]);

    if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <Card title={event.name} style={{ maxWidth: 600, margin: "0 auto" }}>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Category:</strong> <Tag color="blue">{event.category}</Tag></p>
      <p><strong>Status:</strong> <Tag color={event.status === "completed" ? "green" : "orange"}>{event.status}</Tag></p>
      <p><strong>Description:</strong></p>
      <p>{event.description || "No description provided."}</p>
    </Card>
  );
}
