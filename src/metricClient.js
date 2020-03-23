let stack = 'default-stack';
let prefix = 'default-prefix';

function write(metric) {
  process.stdout.write(`${metric}\n`);
}

const increment = (type, count, tags) => {
  let metric = `${prefix}: ${stack} count ${type} ${count}`;
  if (tags && tags.length) {
    metric = `${metric} ${tags.join(' ')}`;
  }

  write(metric);

  return metric;
};

function MetricClient(stackName, metricPrefix) {
  stack = stackName;
  prefix = metricPrefix;

  this.increment = increment;
}

module.exports = MetricClient;
