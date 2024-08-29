import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
// import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'COR出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        // {
        //   key: '',
        //   title: '',
        //   href: '',
        //   blankTarget: true,
        // },
        // {
        //   key: '',
        //   title: '',
        //   href: '',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: <><GithubOutlined/> COR GitHub</>,
          href: 'https://github.com/LuckyCor',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
