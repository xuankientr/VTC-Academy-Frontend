import { Button, DatePicker, Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const FormValidationTab = () => {
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
        Exercise 2: Form Validation
      </h1>
      <p className='my-4'>
        Form đăng ký với validation chi tiết cho từng trường thông tin
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
          label='Họ và tên'
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
          name={['user', 'phone']}
          label='Số điện thoại'
          rules={[
            {
              required: true,
            },
            {
              pattern: /^[0-9]{10,11}$/,
              message: 'Số điện thoại phải có 10-11 chữ số!',
            },
          ]}
        >
          <Input placeholder='Nhập số điện thoại' />
        </Form.Item>

        <Form.Item
          name={['user', 'dob']}
          label='Ngày sinh'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name={['user', 'gender']}
          label='Giới tính'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            defaultValue='Chọn giới tính'
            style={{
              width: '100%',
            }}
            options={[
              {
                value: 'male',
                label: 'Nam',
              },
              {
                value: 'female',
                label: 'Nữ',
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={['user', 'address']}
          label='Địa chỉ'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TextArea rows={4} placeholder='Nhập địa chỉ' maxLength={500} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormValidationTab;
