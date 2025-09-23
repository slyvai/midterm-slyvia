import { Layout, Typography, Menu, Grid } from "antd";
import {
  DashboardOutlined,
  CalendarOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;


export default function LayoutApps({ children }) {
  const screens = useBreakpoint();

  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: screens.xs ? "0 8px" : "0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title
          style={{
            color: "white",
            margin: 0,
            textAlign: "center",
            fontSize: screens.xs ? "1rem" : "1.5rem",
          }}
          level={3}
        >
          Event Management System
        </Title>
      </Header>

      <Layout>
        <Sider
          collapsible
          breakpoint="md"
          collapsedWidth={screens.xs ? "60" : "80"}
        >
          <Menu theme="dark" mode="inline" style={{ minHeight: "100%" }}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link href="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<CalendarOutlined />}>
              <Link href="/events/event">Events</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<PlusOutlined />}>
              <Link href="/create-event">Create Event</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content
          style={{
            padding: screens.xs ? "8px" : "24px",
            margin: 0,
          }}
        >
          <div
            className="site-layout-content"
            style={{
              padding: screens.xs ? 12 : 24,
              minHeight: 380,
              background: "#fff",
              borderRadius: 8,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>

      <Footer
        style={{
          textAlign: "center",
          fontSize: screens.xs ? "0.75rem" : "0.9rem",
          padding: screens.xs ? "8px" : "16px",
        }}
      >
       Event Management System ©2025 Created by Slyvia
      </Footer>
    </Layout>
  );
}
