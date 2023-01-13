import { Checkbox, Table, Tag, Typography } from "antd";

const columns = [
  {
    key: "key",
    title: "Key",
    dataIndex: "key",
    render: (key) => <Tag>{key}</Tag>,
  },
  { key: "name", title: "Name", dataIndex: "name" },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
    render: (description) => (
      <Typography.Text italic>{description}</Typography.Text>
    ),
  },
  {
    key: "automatic",
    title: "Automatic",
    dataIndex: "automatic",
    render: (automatic) => <Checkbox checked={automatic} disabled />,
  },
];

const NotificationTables = ({ fetching, notifications }) => {
  return (
    <Table
      dataSource={notifications}
      columns={columns}
      loading={fetching}
      size="small"
    />
  );
};

export default NotificationTables;
