import React from "react";
import { Link } from "react-router-dom";

// Assets
import {
  FlagIcon,
  HomeIcon,
  GiftIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import profilepicture from "../../assets/profilepicture.png";

// Components
import { Layout, Menu } from "antd";
// Styles
import * as S from "./Navbar.styles";
import "../../index.css";
import "antd/dist/antd.css";

const { Sider } = Layout;

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
        <S.MenuContainer>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeIcon />}>
              Home
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<FlagIcon />}>
              Courses
              <Link to="/map" />
            </Menu.Item>
            <Menu.Item key="3" icon={<GiftIcon />}>
              Products
              <Link to="/products" />
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraIcon />}>
              Videos
              <Link to="/videos" />
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
    </Layout>
  );
};

export default Navbar;
