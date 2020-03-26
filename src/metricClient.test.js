const MetricClient = require('./metricClient');

const metricClient = new MetricClient('virtual-test-stack', 'my.metrics');

const tags = [
  'domain:xyz',
  'identifier:the_one',
  'team:my_team',
  'status_code:200'
];

test('Increment', () => {
  const metric = metricClient.increment('product.search', 1, tags);

  expect(metric).toEqual(
    'my.metrics: virtual-test-stack count product.search 1 domain:xyz identifier:the_one team:my_team status_code:200'
  );
});

test('Gauge', () => {
  const metric = metricClient.gauge('api.requests.elapsed', 501, tags);

  expect(metric).toEqual(
    'my.metrics: virtual-test-stack gauge api.requests.elapsed 501 domain:xyz identifier:the_one team:my_team status_code:200'
  );
});
