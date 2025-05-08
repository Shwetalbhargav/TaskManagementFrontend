'use client';

import { useState } from 'react';
import { Menu, Layout } from 'antd';
import {
  PieChartOutlined,
  TeamOutlined,
  NotificationOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import Link from 'next/link';

const { Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} theme="light">
        <div className="text-center py-4 font-bold text-lg">TaskHub</div>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <Link href="/dashboard/teams">Teams</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            <Link href="/dashboard/notifications">Notifications</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="p-6 bg-gray-50 min-h-screen">{children}</Content>
      </Layout>
    </Layout>
  );
}
