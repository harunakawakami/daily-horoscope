import axios from "axios";

export const getFirstDailyHoroscope = async (sign: string) => {
  try {
    const res = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
    );
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSecondDailyHoroscope = async (sign: string) => {
  try {
    const res = await axios.get(`https://ohmanda.com/api/horoscope/${sign}/`);
    const data = await res.data;
    return data;
  } catch (err) {
    console.error(err);
  }
};

console.log(getSecondDailyHoroscope("aries"));
