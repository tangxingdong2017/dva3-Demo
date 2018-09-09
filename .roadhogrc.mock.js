function getMockData(req, res) {
  const pathname = req.params['0'];
  let json = {
    errorCode: -1,
    msg: '获取失败'
  };
  try {
    const path = `./mock/${pathname}`;
    delete require.cache[require.resolve(path)];
    json = require(path);
  } catch (e) {
    console.log(e);
  }
  res.json(json);
}

module.exports = {
  'all /mock/*': getMockData
};
