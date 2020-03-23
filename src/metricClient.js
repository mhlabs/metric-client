let stack = 'default-stack';
let prefix = 'default-prefix';

function write(metric) {
  process.stdout.write(`${metric}\n`);
}

const increment = (type, count, tags, domain) => {
  let metric = `${prefix}: ${stack} count ${type} ${count} domain:${domain ||
    stack}`;
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
