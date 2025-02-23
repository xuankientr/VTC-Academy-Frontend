import { Input } from 'antd';
import { useState } from 'react';

const InputHandlingTab = () => {
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 2: Handling Input Changes
      </h1>
      <p className='my-4'>
        Nhập text vào ô input bên dưới để xem kết quả thay đổi
      </p>
      <div className='w-52'>
        <Input
          placeholder='Nhập dữ liệu vào ô này ...'
          className='w-20'
          onChange={handleChange}
        />
      </div>
      <p className='mt-4'>Giá trị hiện tại: {content}</p>
    </div>
  );
};
export default InputHandlingTab;
