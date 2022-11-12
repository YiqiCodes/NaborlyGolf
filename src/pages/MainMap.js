import React from "react";

// Components
import LeafletMap from "../components/map/LeafletMap";

// Hooks
import UseGetCourses from "../hooks/GetWithSWR/UseGetCourses";

const MainMap = () => {
  const { courses, isLoading, isError } = UseGetCourses();

  if (isLoading || isError) return null;

  return <LeafletMap courses={courses.courses} />;
};

export default MainMap;
