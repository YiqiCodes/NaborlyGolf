// Icons
import { FlagIcon, AdjustmentsIcon, SunIcon } from "@heroicons/react/outline";

// Recoil
import { useRecoilValue } from "recoil";
import userWeatherAtom from "../../recoil/atoms/UserWeatherAtom";

// Styles
import * as S from "./WeatherBanner.styles";

import { Spin } from "antd";

const WeatherBanner = () => {
  const weather = useRecoilValue(userWeatherAtom);

  if (weather === null)
    return (
      <S.WeatherBanner>
        <S.LoadingText>Getting the forecast...</S.LoadingText>
        <Spin />
      </S.WeatherBanner>
    );

  const stats = [
    {
      id: 1,
      name: "Conditions:",
      stat: weather.current.condition.text,
      icon: SunIcon,
    },
    {
      id: 2,
      name: "Feels like:",
      stat: `${weather.current.feelslike_c}C`,
      icon: AdjustmentsIcon,
    },
    {
      id: 3,
      name: "Wind:",
      stat: `${weather.current.wind_kph}km ${weather.current.wind_dir}`,
      icon: FlagIcon,
    },
  ];

  return (
    <S.WeatherBanner>
      <dl className="mt-5 grid grid-cols-3 sm:gap-2 md:gap-5 sm:grid-cols-3 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 sm:pt-4 sm:px-4 sm:pb-4 md:pb-0 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-gray-700 rounded-md p-3">
                <item.icon
                  className="h-4 w-4 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate sm:hidden lg:flex">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline sm:ml-12 md:ml-16">
              <p className="text-2xl font-semibold text-gray-900 sm:text-sm md:text-2xl sm:mb-0 md:mb-4">
                {item.stat}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </S.WeatherBanner>
  );
};

export default WeatherBanner;
