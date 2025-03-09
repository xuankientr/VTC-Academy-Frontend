import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

const validationMessages = {
  password: {
    required: 'Vui lòng nhập mật khẩu!',
    pattern:
      'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt!',
  },
  confirmPassword: {
    required: 'Vui lòng xác nhận mật khẩu!',
    mismatch: 'Mật khẩu không khớp!',
  },
  dob: {
    required: 'Vui lòng chọn ngày sinh!',
    invalid: 'Ngày sinh không hợp lệ!',
  },
  creditCard: {
    required: 'Vui lòng nhập số thẻ tín dụng!',
    pattern: 'Số thẻ tín dụng phải có định dạng XXXX-XXXX-XXXX-XXXX!',
  },
};

const handleFinish = (values) => {
  console.log('Dữ liệu đã gửi:', values);
};

const AdvancedValidationTab = () => {
  const [form] = Form.useForm();

  return (
    <div style={{ maxWidth: 600 }}>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 5: Advanced Form Validation
      </h1>
      <p className='my-4'>
        Form với quy tắc validation nâng cao cho mật khẩu, ngày tháng và các
        trường đặc biệt khác.
      </p>

      <Form form={form} layout='vertical' onFinish={handleFinish}>
        <Form.Item
          name='password'
          label='Mật khẩu'
          rules={[
            { required: true, message: validationMessages.password.required },
            {
              pattern: passwordRegex,
              message: validationMessages.password.pattern,
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder='Nhập mật khẩu' />
        </Form.Item>

        <Form.Item
          name='confirmPassword'
          label='Xác nhận mật khẩu'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: validationMessages.confirmPassword.required,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(validationMessages.confirmPassword.mismatch)
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder='Xác nhận mật khẩu' />
        </Form.Item>

        <Form.Item
          name='dob'
          label='Ngày sinh'
          rules={[
            { required: true, message: validationMessages.dob.required },
            () => ({
              validator(_, value) {
                if (!value) return Promise.resolve();
                if (
                  moment(
                    value.format('YYYY-MM-DD'),
                    'YYYY-MM-DD',
                    true
                  ).isValid()
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(validationMessages.dob.invalid)
                );
              },
            }),
          ]}
        >
          <DatePicker
            format='YYYY-MM-DD'
            placeholder='Chọn ngày sinh'
            style={{ width: 600 }}
          />
        </Form.Item>

        <Form.Item
          name='creditCard'
          label='Số thẻ tín dụng'
          rules={[
            { required: true, message: validationMessages.creditCard.required },
            {
              pattern: creditCardRegex,
              message: validationMessages.creditCard.pattern,
            },
          ]}
        >
          <Input placeholder='XXXX-XXXX-XXXX-XXXX' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdvancedValidationTab;
