let stack = 'default-stack';
let prefix = 'default-prefix';

function write(metric) {
  process.stdout.write(`${metric}\n`);
}

function createMetric(metricType, identifier, value, tags) {
  let metric = `${prefix}: ${stack} ${metricType} ${identifier} ${value}`;
  if (tags && tags.length) {
    metric = `${metric} ${tags.join(' ')}`;
  }

  return metric;
}

const increment = (type, count, tags) => {
  const metric = createMetric('count', type, count, tags);
  write(metric);

  return metric;
};

const gauge = (type, count, tags) => {
  const metric = createMetric('gauge', type, count, tags);
  write(metric);

  return metric;
};

function MetricClient(stackName, metricPrefix) {
  stack = stackName;
  prefix = metricPrefix;

  this.increment = increment;
  this.gauge = gauge;
}

module.exports = MetricClient;
