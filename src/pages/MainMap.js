import React from "react";

// Components
import Map from "../components/map/Map";

// Hooks
import UseGetCourses from "../hooks/GetWithSWR/UseGetCourses";

const MainMap = () => {
  const { courses, isLoading, isError } = UseGetCourses();

  if (isLoading || isError) return null;

  return <Map courses={courses.courses} />;
};

export default MainMap;
