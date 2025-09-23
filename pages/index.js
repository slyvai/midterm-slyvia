import { Typography, Button } from "antd";
import EventCard from "./components/EventCard";
const { Title } = Typography;

export default function Home() {
  return (
 <>
    <Title level={2}>Event</Title>
    <p>This is the dashboard page of the Event Management System.</p>
    <EventCard events={[]} />
    <Button type="primary" href="/create-event">
      Create New Event
    </Button>
    <Button style={{ marginLeft: 8 }} href="/events/event">
      View Events
    </Button>
 </>
  );
}
