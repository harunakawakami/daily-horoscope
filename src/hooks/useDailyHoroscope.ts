import { useCallback, useState } from "react";
import axios from "axios";

import { Horoscope } from "../types/api/horoscope";

export const useDailyHoroscope = () => {
  const [horoscope, setHoroscope] = useState<Horoscope | null>(null);
  const getDailyHoroscope = useCallback((sign: string) => {
    axios
      .post(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`)
      .then((res) => {
        setHoroscope(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return { getDailyHoroscope, horoscope };
};
