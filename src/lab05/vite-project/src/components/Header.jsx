import { useState } from 'react';
import { Tabs } from 'antd';
// import 'antd/dist/reset.css';

import UserInputTab from './UserInputTab';
import CounterHookTab from './CounterHookTab';
import MemoizationTab from './MemoizationTab';
import SumCalculationTab from './SumCalculationTab';
import SearchDebounceTab from './SearchDebounceTab';

const { TabPane } = Tabs;

const Header = () => {
  // Quản lý tab đang active bằng state
  const [activeKey, setActiveKey] = useState('1');

  // Xử lý khi người dùng chuyển tab
  const onTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} onChange={onTabChange}>
      <TabPane tab='CounterHook' key='5'>
        <CounterHookTab />
      </TabPane>
      <TabPane tab='UserInput' key='2'>
        <UserInputTab />
      </TabPane>
      <TabPane tab='Memoization' key='3'>
        <MemoizationTab />
      </TabPane>
      <TabPane tab='SumCalculation' key='4'>
        <SumCalculationTab />
      </TabPane>
      <TabPane tab='SearchDebounce' key='1'>
        <SearchDebounceTab />
      </TabPane>
    </Tabs>
  );
};
export default Header;
