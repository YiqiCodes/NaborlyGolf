import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Assets
import {
  ChartBarIcon,
  FlagIcon,
  HomeIcon,
  GiftIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";

// Auth
import { useAuth0 } from "@auth0/auth0-react";

// Components
import { Layout, Menu, notification } from "antd";
import LoginWithAuth0 from "../buttons/LoginWithAuth0";
import LogoutWithAuth0 from "../buttons/LogoutWithAuth0";

// Recoil
import { useSetRecoilState } from "recoil";
import userLoginCredentialsAtom from "../../recoil/atoms/UserLoginCredentialsAtom";

// Styles
import * as S from "./Navbar.styles";
import "../../index.css";
import "antd/dist/antd.css";

const { Sider } = Layout;

const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const setUserCoords = useSetRecoilState(userLoginCredentialsAtom);
  useEffect(() => {
    if (user) setUserCoords(user.email);
  }, [user, setUserCoords]);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "This is a premium feature.",
      description: "Please login or register to access your stock yardages.",
    });
  };

  return (
    <Layout>
      <Sider
        style={{ background: "#F2F2F2" }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {}}
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
            {/* If logged in: display yardages component
             ** If not logged in: display notification */}
            {user ? (
              <Menu.Item key="2" icon={<ChartBarIcon />}>
                Yardages
                <Link to="/yardages" />
              </Menu.Item>
            ) : (
              <Menu.Item
                key="2"
                icon={<ChartBarIcon />}
                onClick={() => {
                  openNotificationWithIcon("warning");
                }}
              >
                Yardages
              </Menu.Item>
            )}
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
        {!isLoading ? (
          <S.UserProfileContainer className="w-full bottom-0 absolute flex-shrink-0 flex bg-gray-300 p-4">
            {isAuthenticated ? (
              <>
                <div>
                  {isAuthenticated && !isLoading && (
                    <div className="flex-shrink-0 w-full group block">
                      <div className="flex items-start ml-3">
                        <div className="mr-5 mt-1">
                          <p className="text-sm font-medium text-gray-800 mb-2">
                            Welcome, {user.nickname}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex">
                  <LogoutWithAuth0 />
                  <div className="flex items-center">
                    <S.RotatedDiv upsideDown>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </S.RotatedDiv>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full flex justify-end">
                <LoginWithAuth0 />
                {/* Copied "login" svg from https://heroicons.com/ */}
                <S.RotatedDiv>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </S.RotatedDiv>
              </div>
            )}
          </S.UserProfileContainer>
        ) : null}
      </Sider>
    </Layout>
  );
};

export default Navbar;
