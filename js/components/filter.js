export const filteringTheArray = (array, filterString) => {
  return array.filter((arrayElm) => {
    return arrayElm.name.toLowerCase().includes(filterString.toLowerCase());
  });
};
