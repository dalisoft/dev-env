export default (jsonData, res) => {
  const data = Buffer.from(JSON.stringify(jsonData));
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', data.length);
  res.write(data);
  res.end();
};
