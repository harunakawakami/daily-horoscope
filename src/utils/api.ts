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
