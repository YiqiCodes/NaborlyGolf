import golfCoursePhoto from "../../assets/golfcourse.jpg";
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
        <div className="relative max-w-3xl w-4/6 mx-auto flex flex-col items-center text-center">
          <h2 className="text-6xl font-extrabold tracking-tight text-white">
            NaborlyGolf
          </h2>
          <p className="mt-3 text-2xl text-white">
            Browse nearby courses, view products and watch instructional videos
            to help improve your game.
          </p>
          <p className="mt-1 text-base text-white">
            Built with React, antd, axios, react-player, styled-components, swr,
            tailwindCSS, CoinDesk API & Google Maps API.
          </p>
        </div>
      </div>
    </div>
  );
}
