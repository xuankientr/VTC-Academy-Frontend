import { useState } from 'react';
import { Tabs } from 'antd';
import SimpleContactTab from './SimpleContactTab';
import FormValidationTab from './FormValidationTab';
import DynamicFieldsTab from './DynamicFieldsTab';
import APISubmissionTab from './APISubmissionTab';
import AdvancedValidationTab from './AdvancedValidationTab';

const { TabPane } = Tabs;

const Header = () => {
  const [activeKey, setActiveKey] = useState('1');

  const onTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} onChange={onTabChange}>
      <TabPane tab='Simple Contact' key='1'>
        <SimpleContactTab />
      </TabPane>
      <TabPane tab='Form Validation' key='2'>
        <FormValidationTab />
      </TabPane>
      <TabPane tab='Dynamic Fields' key='3'>
        <DynamicFieldsTab />
      </TabPane>
      <TabPane tab='API Submission' key='4'>
        <APISubmissionTab />
      </TabPane>
      <TabPane tab='Advanced Validation' key='5'>
        <AdvancedValidationTab />
      </TabPane>
    </Tabs>
  );
};
export default Header;
