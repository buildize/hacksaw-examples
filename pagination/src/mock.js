var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var lipsum = require('lorem-ipsum');

var mock = new MockAdapter(axios, { delayResponse: 2000 });
var generateData = () => ({
  id: Math.random(),
  content: lipsum()
});


mock.onGet('/generate').reply(() => {
  const result = [];

  for(let i = 0; i < 10; i++) {
    result.push(generateData());
  }

  return [200, result];
});
