const captureRate = (catchRate) => {
  const pokeball = Math.floor((catchRate * 100) / 255);
  const greatball = Math.floor((catchRate * 100) / 200);
  const other = Math.floor((catchRate * 100) / 150);

  return {
    pokeball,
    greatball,
    other
  };
};

export default captureRate;