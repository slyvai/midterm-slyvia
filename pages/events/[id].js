import { useRouter } from "next/router";
import { useEffect } from "react";
import { Form, Input, Button, Select, message, Radio } from "antd";

const { Option } = Select;

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [form] = Form.useForm();

  useEffect(() => {
    if (!router.isReady || !id) return;

    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const foundEvent = storedEvents.find((e) => String(e.id) === String(id));

    if (foundEvent) {
      form.setFieldsValue(foundEvent);
    } else {
      message.error("Event not found.");
      router.push("/events/event");
    }
  }, [router.isReady, id, form, router]);

  const handleUpdate = (values) => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const updatedEvents = storedEvents.map((e) =>
      String(e.id) === String(id) ? { ...e, ...values } : e
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    router.push("/events/event");
  };

  const handleDelete = () => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    const filteredEvents = storedEvents.filter((e) => String(e.id) !== String(id));
    localStorage.setItem("events", JSON.stringify(filteredEvents));
    router.push("/events/event");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Edit Event</h2>
      <Form form={form} layout="vertical" onFinish={handleUpdate}>
        <Form.Item name="name" label="Event Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="date" label="Date" rules={[{ required: true }]}>
          <Input type="date" />
        </Form.Item>

        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select>
            <Option value="conference">Conference</Option>
            <Option value="meetup">Meetup</Option>
            <Option value="workshop">Workshop</Option>
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Description">
          <Input.TextArea rows={4} placeholder="Enter event description" />
        </Form.Item>

        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="upcoming">Upcoming</Radio>
            <Radio value="completed">Completed</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
          <Button danger style={{ marginLeft: 10 }} onClick={handleDelete}>
            Delete
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
