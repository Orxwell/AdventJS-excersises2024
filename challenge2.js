function manufacture(gifts, materials) {
  let cleanGifts     = [];
  let cleanMaterials = [];

  [...new Set(materials.replace(' ', ''))].forEach(elem => {
    cleanMaterials.push(...elem.toLowerCase());
  });

  [...new Set(gifts)].forEach(elem => {
    cleanGifts.push([...elem.toLowerCase()]);
  });

  let found = [];
  for (let index in cleanGifts) {
    let arrGift = cleanGifts[index];
    let result = '';
    for (let elem in arrGift) {
      if (!cleanMaterials.includes(arrGift[elem])) {
        result = '';
        break;
      }
      result = arrGift.join('')
    }
    if (result !== '') found.push(result);
  }

  return found;
}
