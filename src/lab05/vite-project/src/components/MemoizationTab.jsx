import { useMemo, useState } from 'react';

const MemoizationTab = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverMemo = useMemo(() => {
    return isHovered ? 'bg-red-600' : 'bg-sky-600';
  }, [isHovered]);

  return (
    <div>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 3: Implementing Memoization with useMemo
      </h1>
      <p className='my-4'>
        Di chuột vào box bên dưới để thay đổi màu nền. Style của box được tính
        toán bằng useMemo để tránh tính toán lại không cần thiết.
      </p>
      <button
        className={`text-white px-25 py-25 rounded-md cursor-pointer ${hoverMemo}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover me
      </button>
    </div>
  );
};
export default MemoizationTab;
