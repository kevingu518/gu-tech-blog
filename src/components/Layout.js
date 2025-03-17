import { Layout, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderBar from "./Header";
import "@styles/layout.scss";

const { Content } = Layout;

const MainLayout = ({ darkMode, setDarkMode, children }) => {
  const location = useLocation();

  return (
    <Layout className={`app-layout ${darkMode ? "dark-mode" : "light-mode"}`}>
      <HeaderBar />
      <Layout>
        <Sidebar />
        <Button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <Content className="content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
