import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '帕特纳用户中心',
  pwa: false,
  logo: 'https://img.zcool.cn/community/01ace95c7a329fa801213f268a86dd.png@2o.png',
  iconfontUrl: '',
};

export default Settings;
