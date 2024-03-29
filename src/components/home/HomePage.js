// Antd
import { Tooltip } from "antd";

// Assets
import golfCoursePhoto from "../../assets/hole13.jpg";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Components
import WeatherBanner from "./WeatherBanner";

export default function HomePage() {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <div className="flex items-center w-full relative bg-white">
      <WeatherBanner />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={golfCoursePhoto}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />

        <div className="cursor-help relative max-w-3xl w-4/6 mx-auto flex flex-col items-center text-center">
          <Tooltip
            placement="top"
            title="Save your yardages, browse nearby courses, view products and watch
          instructional videos to help improve your game. Built with React, Node.js, Express.js, MongoDB, antd, auth0, axios, react-player, recoil.js, styled-components, swr,
          tailwindCSS, Leaflet, CoinDesk API, & Weather API"
          >
            <h2 className="mb-8  text-6xl font-extrabold tracking-tight text-white">
              NaborlyGolf
            </h2>
          </Tooltip>
          {user ? (
            <div className="text-xl tracking-tight text-white">
              Hello {user.nickname}
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              className="w-full justify-center inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
