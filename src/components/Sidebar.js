import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={200} className="sidebar">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">首頁</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/docs/react">React 技術文件</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/docs/nodejs">Node.js 技術文件</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about">關於</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
