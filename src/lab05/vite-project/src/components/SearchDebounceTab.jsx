import { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchDebounceTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      console.log('Done!', searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery) {
      setResults([
        `Kết quả 1 cho "${debouncedQuery}"`,
        `Kết quả 2 cho "${debouncedQuery}"`,
        `Kết quả 3 cho "${debouncedQuery}"`,
      ]);
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);

  return (
    <div className='max-w-lg p-4'>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 5: Debouncing Search with useCallback
      </h1>
      <p className='my-4'>
        Nhập từ khóa để tìm kiếm. Chức năng tìm kiếm sẽ chỉ được thực hiện sau
        khi bạn ngừng gõ 500ms, giúp tránh gọi API quá nhiều lần.
      </p>
      <div className='flex items-center space-x-2 w-full'>
        <Input
          placeholder='Nhập từ khóa tìm kiếm...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full'
        />
        <Button icon={<SearchOutlined />} type='primary' />
      </div>

      <ul className='mt-4 border border-gray-200 rounded-md'>
        {results.map((result, index) => (
          <li key={index} className='p-4 border-b last:border-b-0'>
            <p className='font-bold'>{result}</p>
            <p className='text-gray-600'>
              Mô tả chi tiết cho kết quả tìm kiếm {index + 1}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchDebounceTab;
