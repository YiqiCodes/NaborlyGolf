import React from "react";
import { Link } from "react-router-dom";

// Assets
import {
  ChartBarIcon,
  FlagIcon,
  HomeIcon,
  GiftIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

// import profilepicture from "../../assets/profilepicture.png";

// Auth
import { useAuth0 } from "@auth0/auth0-react";

// Components
import { Layout, Menu } from "antd";
import LoginWithAuth0 from "../buttons/LoginWithAuth0";
import LogoutWithAuth0 from "../buttons/LogoutWithAuth0";

// Styles
import * as S from "./Navbar.styles";
import "../../index.css";
import "antd/dist/antd.css";

const { Sider } = Layout;

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("User:", user);
  console.log("Is Authenticated", isAuthenticated);

  return (
    <Layout>
      <Sider
        style={{ background: "#F2F2F2" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}
      >
        <S.MenuContainer>
          <Menu
            theme="light"
            style={{ background: "#F2F2F2" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<HomeIcon />}>
              Home
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2" icon={<ChartBarIcon />}>
              Yardages
              <Link to="/yardages" />
            </Menu.Item>
            <Menu.Item key="3" icon={<FlagIcon />}>
              Courses
              <Link to="/map" />
            </Menu.Item>
            <Menu.Item key="4" icon={<GiftIcon />}>
              Products
              <Link to="/products" />
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraIcon />}>
              Videos
              <Link to="/videos" />
            </Menu.Item>
          </Menu>
        </S.MenuContainer>
        <S.UserProfileContainer className="w-full bottom-0 absolute flex-shrink-0 flex bg-gray-300 p-4">
          <S.ButtonContainer>
            {isAuthenticated ? <LogoutWithAuth0 /> : <LoginWithAuth0 />}
          </S.ButtonContainer>
          <div>
            {isAuthenticated && !isLoading && (
              <div className="flex-shrink-0 w-full group block">
                <div className="flex items-start ml-3">
                  <div>
                    <img
                      className="inline-block h-12 w-12 rounded-lg"
                      src={user.picture}
                      alt=""
                    />
                  </div>
                  <div className="ml-5 mt-1">
                    <p className="text-sm font-medium text-gray-800 mb-2">
                      Welcome, {user.nickname}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </S.UserProfileContainer>
      </Sider>
    </Layout>
  );
};

export default Navbar;
