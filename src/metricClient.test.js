const MetricClient = require('./metricClient');

const metricClient = new MetricClient('virtual-test-stack', 'my.metrics');

test('Increment', () => {
  const metric = metricClient.increment('product.search', 1, [
    'identifier:the-one',
    'team:my-team'
  ]);

  expect(metric).toEqual(
    'my.metrics: virtual-test-stack count product.search 1 domain:virtual-test-stack identifier:the-one team:my-team'
  );
});

test('Increment with domain override', () => {
  const metric = metricClient.increment(
    'product.search',
    1,
    ['identifier:the-one', 'team:my-team'],
    'my-domain'
  );

  expect(metric).toEqual(
    'my.metrics: virtual-test-stack count product.search 1 domain:my-domain identifier:the-one team:my-team'
  );
});
