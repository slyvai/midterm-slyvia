import { Card, Row, Col } from "antd";
import { useState, useEffect } from "react";

export default function EventCard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  const totalEvents = events.length;
  const upcomingEvents = events.filter((event) => event.status === "upcoming").length;
  const completedEvents = events.filter((event) => event.status === "completed").length;

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
      <Col xs={24} sm={12} md={8}>
        <Card title="Total Events">{totalEvents}</Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card title="Upcoming Events">{upcomingEvents}</Card>
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Card title="Completed Events">{completedEvents}</Card>
      </Col>
    </Row>
  );
}
