import { useCallback, useState } from "react";
import axios from "axios";
import { sign } from "crypto";

// import { useMessage } from "./useMessage";
// import { User } from "../types/api/user";

export const useDailyHoroscopr = () => {
  // const { showMessaege } = useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const [horoscope, setHoroscope] = useState<Array<User>>([]);

  const getDailyHoroscope = useCallback((sign: string) => {
    setIsLoading(true);
    axios
      .request(options)
      .then((res) => {
        setHoroscope(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return { getDailyHoroscope, isLoading, horoscope };
};

const options = {
  method: "POST",
  url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
  params: { sign: sign, day: "today" },
  headers: {
    "X-RapidAPI-Key": "647abadbffmsh86d59b695712164p128cabjsn03bf29a927ad",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};
