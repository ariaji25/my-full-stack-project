"use client"

import firebaseService from "@mynextapp/services/firebase";
import { Button, Form, Input, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@mynextapp/app/register/register.css";

const Register = () => {
    const [registerData, setRegisterData] = useState<SignUpRequest>({
        email: '',
        password: ''
    })

    const router = useRouter();

    const handleChange = (event: any) => {
        const { name, value } = event.target
        console.log(name, value)
        setRegisterData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async () => {
        firebaseService.signUp(registerData)
        .then((token) => {
            router.push("/")
        }).catch((error) => {
            window.alert("Failed to sign up")
        })
    }

    return (
        <Layout className="layout">
            <Content className="content">
                <div className="signup-container">
                    <Title level={2} className="signup-title">Register</Title>
                    <Form
                        name="normal_signup"
                        className="signup-form"
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
                            <Button type="primary" htmlType="submit" className="signup-form-button">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default Register;