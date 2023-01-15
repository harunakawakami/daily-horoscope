import axios from "axios";
import namedColors from "color-name-list";

import { ZodiacSigns } from "../types/api/horoscope";

export const getDailyHoroscope = async (sign: ZodiacSigns) => {
  try {
    const res = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getColorCode = (luckyColor: string) => {
  const lowerCasedColor = luckyColor.toLowerCase();
  const foundColor = namedColors.find(
    (color) => color.name.toLowerCase() === lowerCasedColor
  );
  if (foundColor !== undefined) {
    console.log(foundColor.hex);
    const hexCode = foundColor.hex;
    return hexCode;
  }
};
