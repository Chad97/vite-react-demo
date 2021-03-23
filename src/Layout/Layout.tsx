import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  console.log();
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="App">
          <Link to="/app">App</Link>
        </Menu.Item>
        <Menu.Item key="Home">
          <Link to="/home">Home</Link>
        </Menu.Item>
      </Menu>

      <div style={{ margin: "20px 0" }}>{children}</div>
    </div>
  );
};

export default Layout;
