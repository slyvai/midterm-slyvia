"use client";
import {
  Form,
  Select,
  DatePicker,
  Input,
  Radio,
  Button,
  notification,
  message,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;
export default function EventForm() {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, message, description) => {
    api[type]({
      message,
      description,
      duration: 2,
    });
  };

  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const eventData = {
      name: values.eventName,
      date: values.date.format("YYYY-MM-DD"),
      category: values.category,
      status: values.status,
    };

    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    existingEvents.push({ ...eventData, id: Date.now() });
    localStorage.setItem("events", JSON.stringify(existingEvents));

    openNotification("success", "Success", "Event created successfully!");
    form.resetFields();
  };

  const handleFinishFailed = () => {
    openNotification(
      "error",
      "Failed to create event. Please check the form for errors."
    );
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <Form.Item
        label="Event Name"
        name="eventName"
        rules={[{ required: true, message: "Isi event nama mu!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please select the event date!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[
          { required: true, message: "Please select the event category!" },
        ]}
      >
        <Select>
          <Option value="conference">Conference</Option>
          <Option value="meetup">Meetup</Option>
          <Option value="workshop">Workshop</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input the event description!" },
        ]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Please select the event status!" }]}
      >
        <Radio.Group>
          <Radio value="upcoming">Upcoming</Radio>
          <Radio value="completed">Completed</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        {contextHolder}
        <Button type="primary" htmlType="submit">
          Create Event
        </Button>
      </Form.Item>
    </Form>
  );
}
