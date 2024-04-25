"use client";

import firebaseService from "@mynextapp/services/firebase";
import { Button, Form, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@mynextapp/app/login/login.css";

const Login = () => {
    const [loginData, setLoginData] = useState<SingInRequest>({
        email: "",
        password: ""
    })
    const router = useRouter();


    const handleChange = (event: any) => {
        const { name, value } = event.target
        console.log(name, value)
        setLoginData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        console.log(loginData)
        firebaseService.signIn(loginData)
            .then((token) => {
                router.push("/")
            }).catch((error) => {
                window.alert("Failed to login")
            })
    }

    return (
        <Layout className="layout">
            <Content className="content">
                <div className="login-container">
                    <Title level={2} className="login-title">Login</Title>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input placeholder="Email" name="email" onChange={handleChange} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password placeholder="Password" name="password" onChange={handleChange} type="password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                        <div>
                            Did not have an account? <a href="/register"><p style={{ color: "#1890ff" }}>register now!</p></a>
                        </div>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default Login;