import { useState } from 'react';

const MouseEventTab = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <h1 className={`text-lg font-semibold text-black`}>
        Exercise 3: Handling Mouse Events
      </h1>
      <p className='my-4'>Di chuột vào box bên dưới để thay đổi màu nền</p>
      <button
        className={`${
          isHovered ? 'bg-red-600' : 'bg-sky-600'
        } text-white px-25 py-25 rounded-md cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me
      </button>
    </div>
  );
};
export default MouseEventTab;
