import { useState } from 'react';
import { Tabs } from 'antd';
// import 'antd/dist/reset.css';

import SingleButtonTab from './SingleButtonTab';
import InputHandlingTab from './InputHandlingTab';
import MouseEventTab from './MouseEventTab';
import KeyboardEventTab from './KeyboardEventTab';
import CounterTab from './CounterTab';

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
      <TabPane tab='Simple Button' key='1'>
        <SingleButtonTab />
      </TabPane>
      <TabPane tab='Input Handling' key='2'>
        <InputHandlingTab />
      </TabPane>
      <TabPane tab='Mouse Events' key='3'>
        <MouseEventTab />
      </TabPane>
      <TabPane tab='Keyboard Events' key='4'>
        <KeyboardEventTab />
      </TabPane>
      <TabPane tab='Counter' key='5'>
        <CounterTab />
      </TabPane>
    </Tabs>
  );
};
export default Header;
