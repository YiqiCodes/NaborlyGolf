// Antd
import { Tooltip } from "antd";

// Assets
import golfCoursePhoto from "../../assets/hole13.jpeg";

// Components
import WeatherBanner from "./WeatherBanner";

export default function HomePage() {
  return (
    <div className="flex items-center w-full relative bg-white">
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
        <Tooltip
          placement="top"
          title="Save your yardages, browse nearby courses, view products and watch
          instructional videos to help improve your game. Built with React, antd, auth0, axios, react-player, recoil.js, styled-components, swr,
          tailwindCSS, CoinDesk API, Google Maps API & Weather API"
        >
          <div className="cursor-help relative max-w-3xl w-4/6 mx-auto flex flex-col items-center text-center">
            <h2 className="text-6xl font-extrabold tracking-tight text-white">
              NaborlyGolf
            </h2>
            <button
              type="button"
              className="w-full justify-center inline-flex items-center px-8 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Login
            </button>
          </div>
        </Tooltip>
      </div>
      <WeatherBanner />
    </div>
  );
}
