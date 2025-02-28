import { Input } from 'antd';
import { useState } from 'react';

const UserInputTab = () => {
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  const handleAlert = () => {
    alert(content);
  };
  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 2: Managing User Input with State hook
      </h1>
      <p className='my-4'>Sử dụng useState để quản lý giá trị input</p>
      <div className='w-100 h-10 flex'>
        <Input
          placeholder='Nhập dữ liệu vào ô này ...'
          className='w-20'
          onChange={handleChange}
        />
        <button
          className='bg-sky-600 px-4 py-2 w-30 ml-2 text-white rounded-md border'
          onClick={handleAlert}
        >
          Hiển thị
        </button>
      </div>
    </div>
  );
};
export default UserInputTab;
