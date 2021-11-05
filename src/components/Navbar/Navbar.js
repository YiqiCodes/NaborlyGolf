import React from "react";
import { Route, Link } from "react-router-dom";

// Assets
import {
  VideoCameraIcon,
  GiftIcon,
  InboxIcon,
  FlagIcon,
} from "@heroicons/react/outline";
import profilepicture from "../../assets/profilepicture.png";

// Components
import { Layout, Menu } from "antd";
import Products from "../../pages/Products";
import MainMap from "../../pages/MainMap";
import Videos from "../../pages/Videos";

// Styles
import * as S from "./Navbar.styles";
import "../../index.css";
import "antd/dist/antd.css";

const { Header, Content, Sider } = Layout;

const Navbar = () => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <S.MenuContainer>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1" icon={<GiftIcon />}>
              Home
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<FlagIcon />}>
              Courses
              <Link to="/map" />
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraIcon />}>
              Videos
              <Link to="/videos" />
            </Menu.Item>
            <Menu.Item key="4" icon={<InboxIcon />}>
              More Soon
            </Menu.Item>
          </Menu>
        </S.MenuContainer>
        <div className="w-full bottom-0 absolute flex-shrink-0 flex bg-gray-700 p-4">
          <a
            href="https://www.linkedin.com/in/zhangyiqi/"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 w-full group block"
          >
            <div className="flex items-start ml-3">
              <div>
                <img
                  className="inline-block h-12 w-12 rounded-full"
                  src={profilepicture}
                  alt=""
                />
              </div>
              <div className="ml-5 mt-1">
                <p className="text-sm font-medium text-white mb-2">
                  Yiqi Zhang
                </p>
                <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280,
          }}
        >
          <Route exact path="/" component={Products} />
          <Route path="/map" component={MainMap} />
          <Route path="/videos" component={Videos} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
