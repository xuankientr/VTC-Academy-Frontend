import { useEffect, useCallback, useMemo } from 'react';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearch } from '../context/SearchContext';

const SearchDebounceTab = () => {
  const { state, dispatch } = useSearch();

  const updateQuery = useCallback(
    (query) => {
      dispatch({ type: 'SET_QUERY', payload: query });
    },
    [dispatch]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch({ type: 'SET_RESULTS', payload: state.query });
      console.log('Done!', state.query);
    }, 500);

    return () => clearTimeout(handler);
  }, [state.query, dispatch]);

  const searchResults = useMemo(() => {
    if (!state.results) return [];
    return [
      `Kết quả 1 cho "${state.results}"`,
      `Kết quả 2 cho "${state.results}"`,
      `Kết quả 3 cho "${state.results}"`,
    ];
  }, [state.results]);

  return (
    <div className='max-w-lg p-4'>
      <h1 className='text-lg font-semibold text-black'>
        Exercise 5: Debouncing Search with useReducer, useContext, useMemo, and
        useCallback
      </h1>
      <p className='my-4'>
        Nhập từ khóa để tìm kiếm. Chức năng tìm kiếm sẽ chỉ được thực hiện sau
        khi bạn ngừng gõ 500ms, giúp tránh gọi API quá nhiều lần.
      </p>
      <div className='flex items-center space-x-2 w-full'>
        <Input
          placeholder='Nhập từ khóa tìm kiếm...'
          value={state.query}
          onChange={(e) => updateQuery(e.target.value)}
          className='w-full'
        />
        <Button icon={<SearchOutlined />} type='primary' />
      </div>

      <ul className='mt-4 border border-gray-200 rounded-md'>
        {searchResults.map((result, index) => (
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
