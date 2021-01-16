import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, Checkbox, Modal, Button } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { CoreContext } from '../Provider';


function AuthModal({visible, authType, handleOk, handleCancel}){
    const [formType, setFormType] = useState('login')
    const { authenticate } = useContext(CoreContext);
    const formRef = useRef();

    useEffect(() => {
        if(authType !== formType) {
            setFormType(authType)
        }
    }, [authType, visible])

    const onFinish = async () => {
        const formData = formRef.current.getFieldsValue()
        await authenticate({
            ...formData,
            authType
        })

        formRef.current.resetFields()

        handleOk()
    }

    const forms = {
        login: (
            <div>
                <h2>Login</h2>
                <p>Login using credentials entered during registration.</p>

                <Form onFinish={onFinish} ref={formRef}>
                    <Form.Item name="email" rules={[{ required: true, message: 'Please input email.'}]}>
                        <Input id='email' prefix={<MailOutlined/>} placeholder="Email"/>
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: 'Please input password.'}]}>
                        <Input id='password' prefix={<LockOutlined/>} placeholder="Password" type="password"/>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item style={{float: 'left'}} noStyle>
                            <Checkbox id='remember'>Remember me</Checkbox>
                        </Form.Item>

                        <a href="/" style={{float: 'right'}}>Forgot Password?</a>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="auth-btn"
                        block
                    >
                        Login
                    </Button>

                    <div style={{textAlign: "center"}}>
                        <span>
                            Don't have an account? 
                            <a onClick={() => setFormType("signup")}> Signup</a>
                        </span>
                    </div>
                </Form>
            </div>
        ),

        signup: (
            <div>
                <h2>Signup</h2>
                <p>Create an account to start uploading your own images.</p>

                <Form onFinish={onFinish} ref={formRef}>
                    <Form.Item name="name" rules={[{ required: true, message: 'Please input a name.'}]}>
                        <Input id='name' prefix={<UserOutlined/>} placeholder="Name"/>
                    </Form.Item>

                    <Form.Item name="email" rules={[{ required: true, message: 'Please input email.'}]}>
                        <Input id='email' prefix={<MailOutlined/>} placeholder="Email"/>
                    </Form.Item>

                    <Form.Item name="password" rules={[{ required: true, message: 'Please input password.'}]}>
                        <Input id='password' prefix={<LockOutlined/>} placeholder="Password" type="password"/>
                    </Form.Item>

                    <Form.Item name="confirm_password" rules={[{ required: true, message: 'Please confirm password.'}]}>
                        <Input id='confirm_password' prefix={<LockOutlined/>} placeholder="Confirm Password" type="password"/>
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        className="auth-btn"
                        block
                    >
                        Signup
                    </Button>

                    <div style={{textAlign: "center"}}>
                        <span>
                            Already have an account? 
                            <a onClick={() => setFormType("login")}> Login</a>
                        </span>
                    </div>
                </Form>
            </div>
        ),
    }

    return(
        <Modal
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className="auth-modal"
            width={400}
        >
            {forms[formType]}
        </Modal>
    )
}

export default AuthModal;