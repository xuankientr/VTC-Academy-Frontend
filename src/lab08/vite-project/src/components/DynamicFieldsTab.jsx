import { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const validateMessages = {
  required: {
    school: 'Vui lòng nhập tên trường!',
    degree: 'Vui lòng nhập bằng cấp!',
    year: 'Vui lòng nhập năm tốt nghiệp!',
  },
};

const handleFinish = (values) => {
  console.log('Dữ liệu:', values);
  alert('Lưu thông tin thành công!');
};

const DynamicFieldsTab = () => {
  const [form] = Form.useForm();
  const [visibleFields, setVisibleFields] = useState({});

  const handleAdd = (add) => {
    add();
    setTimeout(() => {
      setVisibleFields((prev) => ({
        ...prev,
        [Object.keys(prev).length]: true,
      }));
    }, 0);
  };

  const toggleVisibility = (index) => {
    setVisibleFields((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 3: Dynamic Form Fields
      </h1>
      <p className='my-4'>
        Form các trường nhập liệu động, cho phép thêm/xóa nhiều mục học vấn
      </p>

      <Form
        form={form}
        name='dynamic_form'
        layout='vertical'
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        onFinish={handleFinish}
      >
        <Form.List name='education'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }, index) => (
                <Card
                  key={key}
                  style={{ marginBottom: 10 }}
                  size='small'
                  title={
                    <div
                      onClick={() => toggleVisibility(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      Học vấn #{index + 1}
                    </div>
                  }
                  extra={
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: 'red' }}
                    />
                  }
                >
                  {visibleFields[index] && (
                    <>
                      <Form.Item
                        {...restField}
                        name={[name, 'school']}
                        rules={[
                          {
                            required: true,
                            message: validateMessages.required.school,
                          },
                        ]}
                      >
                        <Input placeholder='Tên trường' />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'degree']}
                        rules={[
                          {
                            required: true,
                            message: validateMessages.required.degree,
                          },
                        ]}
                      >
                        <Input placeholder='Bằng cấp' />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'year']}
                        rules={[
                          {
                            required: true,
                            message: validateMessages.required.year,
                          },
                        ]}
                      >
                        <Input placeholder='Năm tốt nghiệp' />
                      </Form.Item>
                    </>
                  )}
                </Card>
              ))}
              <Button type='dashed' onClick={() => handleAdd(add)} block>
                <PlusOutlined /> Thêm học vấn
              </Button>
            </>
          )}
        </Form.List>
        <Button type='primary' htmlType='submit' style={{ marginTop: 20 }}>
          Lưu thông tin
        </Button>
      </Form>
    </div>
  );
};

export default DynamicFieldsTab;
