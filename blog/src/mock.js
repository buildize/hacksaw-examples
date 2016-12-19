var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios, { delayResponse: 2000 });

const posts = [
  {
    id: 1,
    title: 'Hello Hacksaw',
    description: 'A good starting point',
    content: 'This is a test post'
  },
  {
    id: 2,
    title: 'Lorem very very ipsum',
    description: 'A good starting point',
    content: 'This is a test post'
  }
];

mock.onGet('/posts').reply(() => [200, posts.reverse()]);

mock.onGet(/\/posts\/\d+/).reply(config => {
  const id = Number(/\/posts\/(\d+)/.exec(config.url)[1])
  return [200, posts.find(i => i.id === id)]
});

mock.onPatch(/\/posts\/\d+/).reply(config => {
  const id = Number(/\/posts\/(\d+)/.exec(config.url)[1]);
  const index = posts.findIndex(i => i.id == id);
  posts[index] = JSON.parse(config.data);
  return [200, posts[index]]
});

mock.onPost('/posts').reply(config => {
  const data = JSON.parse(config.data);
  data.id = posts.length + 1;
  posts.push(data);
  return [200, data]
});
