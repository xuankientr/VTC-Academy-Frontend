import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const SimpleContactTab = () => {
  const validateMessages = {
    required: 'Vui lòng nhập ${label}! ',
  };
  const onFinish = (values) => {
    console.log('Dữ liệu người dùng:', values);
    alert('Gửi tin nhắn thành công!');
  };
  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 1: Building a Simple Contact Form
      </h1>
      <p className='my-4'>
        Form liên hệ đơn giản với các trường: tên, email và tin nhắn
      </p>
      <Form
        validateMessages={validateMessages}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        layout='vertical'
      >
        <Form.Item
          name={['user', 'name']}
          label='Họ tên'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label='Email'
          rules={[
            {
              type: 'email',
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['user', 'message']}
          label='Tin nhắn'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder='Nhập tin nhắn của bạn'
            maxLength={500}
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Gửi tin nhắn
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SimpleContactTab;
