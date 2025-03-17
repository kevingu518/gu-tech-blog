import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
// import "@/styles/header.scss";

const { Header } = Layout;

const HeaderBar = ({ toggleSidebar, darkMode, setDarkMode }) => {
  return (
    <Header className="header-bar">
      <Button className="menu-btn" type="text" icon={<MenuOutlined />} onClick={toggleSidebar} />

      <div className="header-title">
        <Link to="/">📚 技術文件網站</Link>
      </div>

      <Button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </Button>
    </Header>
  );
};

export default HeaderBar;
