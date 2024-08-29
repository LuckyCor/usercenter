import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert
          message={'欢迎登录帕特纳用户管理中心！'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          系统介绍:{' '}
          <a
            href="https://github.com/LuckyCor"
            rel="noopener noreferrer"
            target="__blank"
          >
           (访问作者)
          </a>
        </Typography.Text>
        <CodePreview>基于 React + Spring Boot 的 PC 网站,实现了用户注册、用户登录、用户身份验证、用户信息增删改查。</CodePreview>
        {/* <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          高级布局{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            欢迎使用
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview> */}
      </Card>
    </PageContainer>
  );
};

export default Welcome;
