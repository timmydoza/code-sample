const applyKeys = data => data.map((item, key) => ({ key, ...item }));

export default () => fetch('https://gist.githubusercontent.com/timmydoza/7aa003ffabf272dcfd953a37d61a18c5/raw/91f247fb0ad242bd0e7c37c52ce473770ce4541a/newcars.json')
  .then(data => data.json())
  .then(data => applyKeys(data));

