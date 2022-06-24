export const separateArray = (itens: any[], max: number) => {
  const reduced = itens.reduce((accumulator, item, index) => {
    const grupo = Math.floor(index / max);
    accumulator[grupo] = [...(accumulator[grupo] || []), item];
    return accumulator;
  }, []);
  return reduced.at(0) ? reduced : [[]];
};
