import "@styles/App.scss";
import MainLayout from "@components/Layout";
import { ConfigProvider, theme,Layout, Menu, Button } from "antd";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "@pages/Home";
import Docs from "@pages/Docs";
import About from "@pages/About";
const { Header, Sider, Content } = Layout;


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Router>
      <ConfigProvider theme={{ algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
        <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/:id" element={<Docs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
