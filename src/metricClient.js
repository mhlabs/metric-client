function write(metric) {
  process.stdout.write(`${metric}\n`);
}

const increment = (type, count, tags) => {
  // write(msg);
  // return msg;
};

function MetricClient(stackName) {
  stack = stackName;

  this.increment = increment;
}

module.exports = MetricClient;
