import mockData from './mockData';

const applyKeys = data => data.map((item, key) => {
  return { key, ...item };
});

export default () => new Promise(resolve => resolve(applyKeys(mockData)));
