export const getTimeUtil = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  const mon = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const hour = newDate.getHours();
  const min = newDate.getMinutes();
  const twoYear = String(year).slice(2);

  const currentTime = `${twoYear}.${mon}.${date} ${hour}시 ${min}분`;

  return currentTime;
};
