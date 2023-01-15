export type ZodiacSigns =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export type Horoscope = {
  color: string;
  compatibility: string;
  current_date: string;
  date_range: string;
  description: string;
  lucky_number: string;
  lucky_time: string;
  mood: string;
};
