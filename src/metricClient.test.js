const MetricClient = require('./metricClient');

const logger = new MetricClient('virtual-test-stack');

test('Increment', () => {
  // const log = logger.info('You have been informed.', metaData);
  // expect(log).toEqual(
  //   '[INF] [{"Stack":"virtual-test-stack","entityId":"123"}]You have been informed.'
  // );
});
