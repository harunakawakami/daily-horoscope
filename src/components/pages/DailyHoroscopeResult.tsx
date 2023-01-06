import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { useDailyHoroscope } from "../../hooks/useDailyHoroscope";

export default function DailyHoroscopeResult() {
  const loaderData = useLoaderData();
  const { sign } = useParams();

  console.log(sign);

  const getDailyHoroscope = useDailyHoroscope();

  return (
    <>
      <h1>test</h1>
      <div>{sign}</div>
    </>
  );
}
