const MetricClient = require('./metricClient');

const metricClient = new MetricClient('virtual-test-stack', 'my.metrics');

test('Increment', () => {
  const metric = metricClient.increment('product.search', 1, [
    'domain:xyz',
    'identifier:the_one',
    'team:my_team'
  ]);

  expect(metric).toEqual(
    'my.metrics: virtual-test-stack count product.search 1 domain:xyz identifier:the_one team:my_team'
  );
});
