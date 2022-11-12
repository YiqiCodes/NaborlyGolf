// Hooks
import useGetTutorialVideos from "../../hooks/GetWithSWR/UseGetTutorialVideos";

// Packages
import ReactPlayer from "react-player";

export default function InstructionalVideos() {
  const { tutorialVideos, isLoading, isError } = useGetTutorialVideos();

  if (isLoading || isError) return null;

  return (
    <div className="w-full flex relative mr-4 bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-8 xl:pt-8 2xl:pt-16 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-right md:text-center lg:text-center xl:text-center 2xl:text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the pros.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join Andy & Piers and learn
            <br />
            how the best approach the game.
          </p>
        </div>
        <div className="h-4/5 2xl:h-3/5 flex -right-3.5 relative overflow-y-scroll xl:overflow-hidden 2xl:overflow-y-scroll mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {tutorialVideos.videos.map((post) => (
            <div
              key={post.title}
              className="flex flex-col min-h-full lg:min-h-0 xl:min-h-0 2xl:min-h-0 mb-32 md:mb-8 lg:mb-8 xl:mb-8 2xl:mb-8 rounded-lg shadow-lg"
            >
              <div className="flex h-3/6 w-full justify-center flex-shrink-0">
                <div className="flex w-full">
                  <ReactPlayer
                    controls={true}
                    url={post.href}
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
