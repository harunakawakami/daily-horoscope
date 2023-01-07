import axios from "axios";
import namedColors from "color-name-list";

export const getDailyHoroscope = async (sign: string) => {
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

console.log(getColorCode("shadow"));
