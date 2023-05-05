module.exports.getDate = () => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  const date = new Date();
  return date.toLocaleDateString("en-US", options);
};
