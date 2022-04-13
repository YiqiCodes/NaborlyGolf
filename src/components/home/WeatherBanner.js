// Antd
import { Spin } from "antd";

// Icons
import { FiThermometer, FiWind } from "react-icons/fi";
import { WiCloudy, WiDaySunny, WiRain, WiSnow } from "react-icons/wi";

// Recoil
import { useRecoilValue } from "recoil";
import userWeatherAtom from "../../recoil/UserWeatherAtom";

// Styles
import * as S from "./WeatherBanner.styles";

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
      stat: weather.current.condition.text,
      icon: weather.current.condition.text.includes("loud")
        ? WiCloudy
        : weather.current.condition.text.includes("ain")
        ? WiRain
        : weather.current.condition.text.includes("now")
        ? WiSnow
        : WiDaySunny,
    },
    {
      id: 2,
      stat: `${weather.current.feelslike_c}C`,
      icon: FiThermometer,
    },
    {
      id: 3,
      stat: `${weather.current.wind_kph}km ${weather.current.wind_dir}`,
      icon: FiWind,
    },
  ];

  return (
    <S.WeatherBanner>
      <dl className="mt-5">
        {stats.map((item) => (
          <div key={item.id} className="relative overflow-hidden">
            <div className="absolute bg-white-700 p-3">
              <item.icon
                className="h-4 w-4 md:h-4 md:w-4 lg:w-6 lg:h-6 text-white"
                aria-hidden="true"
              />
              {item.name}
            </div>
            <div className="flex items-baseline sm:ml-8 md:ml-12">
              <p className="text-2xl font-semibold text-white sm:text-sm md:text-2xl">
                {item.stat}
              </p>
            </div>
          </div>
        ))}
      </dl>
    </S.WeatherBanner>
  );
};

export default WeatherBanner;
