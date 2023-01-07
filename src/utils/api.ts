import axios from "axios";
import wtf from "wtf_wikipedia";
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

// export const getWikiPageId = async (color: string) => {
//   const lowerCasedColor = color.toLowerCase();
//   const res = await axios.get(
//     `https://en.wikipedia.org/w/api.php?origin=*&action=query&generator=search&gsrsearch=${lowerCasedColor}+color&format=json`
//   );

//   // &gsrlimit=1

//   const pageIdObject = await res.data.query.pages;
//   console.log(pageIdObject);

//   let id;
//   for (let jsonData in pageIdObject) {
//     id = jsonData;
//   }
//   return id;
// };

// export const getColorCode = async (color: string) => {
//   const wikiPageId = await getWikiPageId(color);
//   const wikiData = (await wtf.fetch(Number(wikiPageId))) as any;

//   const hexCode = wikiData?.infobox().get("hex").text();

//   return hexCode;
// };

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
