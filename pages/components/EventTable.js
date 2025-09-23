import { Table, Tag, Button, Space } from "antd";
import { useRouter } from "next/router";

export default function EventTable({ events, onDelete }) {
  const router = useRouter();

  const columns = [
    {
      title: "Event Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "completed" ? "green" : "orange"}>
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => router.push(`/events/${record.id}`)}>
            View
          </Button>

          <Button
            type="link"
            onClick={() => router.push(`/events/${record.id}?edit=true`)}
          >
            Edit
          </Button>

          <Button danger type="link" onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={events}
      rowKey={(record) => record.id}
      pagination={{ pageSize: 5 }}
    />
  );
}
