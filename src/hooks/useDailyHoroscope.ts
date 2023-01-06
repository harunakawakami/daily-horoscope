import axios from "axios";

export const getDailyHoroscope = async (sign: string) => {
  const res = await axios.post(
    `https://aztro.sameerkumar.website/?sign=${sign}&day=today`
  );
  // .then((res) => {
  //   return res.data;
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
  const data = await res.data;
  return data;
};
