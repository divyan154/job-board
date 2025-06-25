import { formatDistanceToNowStrict } from "date-fns";
export const getCompactTimeAgo = (date: string) => {
  const result = formatDistanceToNowStrict(new Date(date), {
    unit: "hour",
  });
  const [value, unit] = result.split(" ");
  const map: Record<string, string> = {
    second: "s",
    seconds: "s",
    minute: "m",
    minutes: "m",
    hour: "h",
    hours: "h",
    day: "d",
    days: "d",
  };

  return `${value}${map[unit] || ""} ago`;
};
