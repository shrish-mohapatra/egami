import React, { useContext, useRef, useState } from 'react';
import { Modal, Form, Input, Button, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { CoreContext } from '../Provider';

const { Dragger } = Upload;

function UploadModal() {
    const { uploadVisible, setUploadVisible, uploadImage, } = useContext(CoreContext);
    const formRef = useRef();
    const [file, setFile] = useState(false);

    const onFinish = async() => {
        const formData = formRef.current.getFieldsValue()

        await uploadImage(formData, file)
        setUploadVisible(false)
    }

    const prepareFile = ({file, onSuccess}) => {
        setFile(file)
        onSuccess("Ok")
    }

    return(
        <Modal
            visible={uploadVisible}
            onOk={uploadImage}
            onCancel={() => setUploadVisible(false)}
            footer={null}
        >
            <h2>Upload Image</h2>
            <p>Showcase your images by uploading them to our cloud storage.</p>

            <Form onFinish={onFinish} ref={formRef}>
                <Form.Item name="title" rules={[{ required: true, message: 'Please enter a title.'}]}>
                    <Input id='title' placeholder="Title"/>
                </Form.Item>

                <Form.Item name="description">
                    <Input.TextArea id='description' placeholder="Description" rows={3}/>
                </Form.Item>

                <Dragger
                    name="file"
                    accept="image/png, image/jpeg"
                    customRequest={prepareFile}
                    multiple={false}
                    className="upload-field"
                >
                    <InboxOutlined/>
                    <p>Drag and drop your images here to upload</p>
                </Dragger>

                <Button
                    type="primary"
                    htmlType="submit"
                    className="auth-btn upload-btn"
                >
                    Upload
                </Button>
            </Form>

        </Modal>
    )
}

export default UploadModal;