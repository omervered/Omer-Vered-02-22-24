export const getWeekday = ({ timestamp }) => {
  return new Date(timestamp).toLocaleDateString("en-US", { weekday: "long" });
};
