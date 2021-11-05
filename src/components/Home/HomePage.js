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
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            NaborlyGolf
          </h2>
          <p className="mt-3 text-xl text-white">
            Browse nearby courses, view products and watch instrucitonal videos
            to help improve your game. More features coming soon!
          </p>
          {/* <a
            href="#"
            className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a> */}
        </div>
      </div>
    </div>
  );
}
