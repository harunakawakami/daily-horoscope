import React from "react";
import { useLoaderData } from "react-router-dom";

import { useDailyHoroscope } from "../../hooks/useDailyHoroscope";

export default function DailyHoroscopeResult() {
  const loaderData = useLoaderData();

  const getDailyHoroscope = useDailyHoroscope();

  return (
    <>
      <h1>test</h1>
      <div>DailyHoroscopeResult</div>
    </>
  );
}
