const applyKeys = data => data.map((item, key) => ({ key, ...item }));

export default () => fetch('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
  .then(data => data.json())
  .then(data => applyKeys(data));

