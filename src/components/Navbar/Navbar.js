/* This example requires Tailwind CSS v2.0+ */
import profilepicture from "../../assets/profilepicture.png";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  InboxIcon,
  FlagIcon,
} from "@heroicons/react/outline";

let navigation = [
  { name: "Courses", icon: FlagIcon, count: 5, href: "/", current: true },
  { name: "More", icon: FolderIcon, href: "#", current: false },
  { name: "Features", icon: CalendarIcon, href: "#", current: false },
  { name: "Coming", icon: InboxIcon, href: "#", current: false },
  { name: "Soon!", icon: ChartBarIcon, href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="hidden sm:block h-screen w-2/6 flex-1 flex flex-col min-h-0 bg-gray-800">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <nav
          className="mt-1 flex-1 px-2 bg-gray-800 space-y-1"
          aria-label="Sidebar"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-gray-300"
                    : "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count ? (
                <span
                  className={classNames(
                    item.current
                      ? "bg-gray-800"
                      : "bg-gray-900 group-hover:bg-gray-800",
                    "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex-shrink-0 flex bg-gray-700 p-4">
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
              <p className="text-sm font-medium text-white mb-2">Yiqi Zhang</p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
