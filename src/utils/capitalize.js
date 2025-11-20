const capitalize = (str) => {
  if (str.trim().length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export default capitalize;
