function findFirstRepeated(gifts) {
  const giftsObj = Object.assign({}, gifts);

  let cacheGiftsObj = Object.assign({}, gifts);
  let repeates      = [];

  if (Object.keys(giftsObj).length > 0 ) {
    for (let index in giftsObj) {
      delete cacheGiftsObj[index];
  
      for (let cacheIndex in cacheGiftsObj) {
        if (giftsObj[index] === cacheGiftsObj[cacheIndex]) repeates.push(parseInt(cacheIndex));
      }
    }

    if (repeates.length > 0) return giftsObj[Math.min(...repeates).toString()];
  }

  return -1;
}
