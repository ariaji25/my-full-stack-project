"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useAuth } from "@mynextapp/common/context/auth.context";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";

const Home = () => {
  const token = useAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  function claimToken() {
    fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    if (!token) {
      router.push("/login")
    } else {
      claimToken()
    }
  }, [])

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Dashboard</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Welcome to the Dashboard</div>
      </Content>
    </Layout>
  );
}
export default Home;